import { useEffect, useState, useMemo } from "react";
import {
  Row as AntdRow,
  Col as AntdCol,
  Radio as AntdRadio,
  InputNumber as AntdInputNumber,
  Slider as AntdSlider,
  Upload as AntdUpload,
  Button as AntdButton,
  UploadProps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useOptionsContext } from "../../context/option-context";

function getBase64(img: any, callback: (imgUrl: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

export default function AppLeftControls() {
  const {
    dispatch,
    state: { leftOptions },
  } = useOptionsContext();
  const [loading, setLoading] = useState(false);
  const [gradientOverlay, setGradientOverlay] = useState(
    leftOptions.gradientOverlay
  );
  const [gradientCoverage, setGradientCoverage] = useState(
    leftOptions.gradientCoverage
  );
  const [buttonRadius, setButtonRadius] = useState(leftOptions.buttonRadius);
  const [titleSpacing, setTitleSpacing] = useState(leftOptions.titleSpacing);
  const [fileName, setFileName] = useState(leftOptions.fileName);
  const [previewImage, setPreviewImage] = useState(leftOptions.previewImage);
  const [previewVisible, setPreviewVisible] = useState(
    leftOptions.previewVisible
  );

  useEffect(() => {
    dispatch({
      type: "UPDATE_LEFT_OPTIONS",
      payload: {
        buttonRadius,
        titleSpacing,
        fileName,
        previewImage,
        previewVisible,
        gradientCoverage,
        gradientOverlay,
      },
    });
  }, [
    dispatch,
    buttonRadius,
    titleSpacing,
    fileName,
    previewImage,
    previewVisible,
    gradientOverlay,
    gradientCoverage,
  ]);

  const props: UploadProps = useMemo(
    () => ({
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          setLoading(true);
        }
        if (info.file.status === "done") {
          setFileName(info.file.name);
          getBase64(info.file.originFileObj, (imgUrl) => {
            setLoading(false);
            setPreviewVisible(true);
            setPreviewImage(imgUrl);
            if (info.fileList.length > 1) info.fileList.shift();
          });
        }
        if (info.file.status === "removed") {
          setPreviewVisible(false);
          setPreviewImage("qijin-xu.png");
        }
      },
    }),
    []
  );

  return useMemo(() => {
    return (
      <section>
        <AntdRow style={{ marginBottom: "20px" }}>
          <AntdCol span={6}>
            <label htmlFor="gradientOverlay">Gradient Type</label>
          </AntdCol>
          <AntdCol span={18}>
            <AntdRadio.Group
              value={gradientOverlay}
              onChange={(e) => setGradientOverlay(e.target.value)}
              defaultValue="circular"
            >
              <AntdRadio.Button value="circular">Circular</AntdRadio.Button>
              <AntdRadio.Button value="up">Up</AntdRadio.Button>
              <AntdRadio.Button value="down">Down</AntdRadio.Button>
              <AntdRadio.Button value="diagonaldown">↘</AntdRadio.Button>
              <AntdRadio.Button value="diagonalup">↗</AntdRadio.Button>
              <AntdRadio.Button value="none">None</AntdRadio.Button>
            </AntdRadio.Group>
          </AntdCol>
        </AntdRow>
        <AntdRow style={{ marginBottom: "20px" }}>
          <AntdCol span={6}>
            <label htmlFor="gradientCoverage">Gradient Coverage</label>
          </AntdCol>
          <AntdCol span={13}>
            <AntdSlider
              onChange={(value) => setGradientCoverage(value)}
              min={0}
              max={100}
              value={gradientCoverage}
            />
          </AntdCol>
          <AntdCol span={5}>
            <AntdInputNumber
              min={0}
              max={100}
              onChange={(value) => setGradientCoverage(value)}
              value={gradientCoverage}
              id="gradientCoverage"
            />
          </AntdCol>
        </AntdRow>
        <AntdRow style={{ marginBottom: "20px" }}>
          <AntdCol span={6}>
            <label htmlFor="buttonRadius">Button Radius</label>
          </AntdCol>
          <AntdCol span={13}>
            <AntdSlider
              onChange={(value) => setButtonRadius(value)}
              min={1}
              max={40}
              value={buttonRadius}
            />
          </AntdCol>
          <AntdCol span={5}>
            <AntdInputNumber
              min={1}
              max={40}
              onChange={(value) => setButtonRadius(value)}
              value={buttonRadius}
              id="buttonRadius"
            />
          </AntdCol>
        </AntdRow>
        <AntdRow style={{ marginBottom: "20px" }}>
          <AntdCol span={6}>
            <label htmlFor="titleSpacing">Title Spacing</label>
          </AntdCol>
          <AntdCol span={13}>
            <AntdSlider
              onChange={(value) => setTitleSpacing(value)}
              min={1}
              max={300}
              value={titleSpacing}
            />
          </AntdCol>
          <AntdCol span={5}>
            <AntdInputNumber
              min={1}
              max={300}
              onChange={(value) => setTitleSpacing(value)}
              value={titleSpacing}
              id="titleSpacing"
            />
          </AntdCol>
        </AntdRow>
        <AntdRow style={{ marginBottom: "20px" }}>
          <AntdCol span={6}>
            <label htmlFor="upload">Upload a new image</label>
          </AntdCol>
          <AntdCol span={18}>
            <AntdUpload {...props}>
              <AntdButton icon={<UploadOutlined />}>Click to upload</AntdButton>
            </AntdUpload>
          </AntdCol>
        </AntdRow>
      </section>
    );
  }, [buttonRadius, titleSpacing, gradientOverlay, gradientCoverage, props]);
}
