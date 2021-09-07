import { useState } from "react";

import {
  Row as AntdRow,
  Col as AntdCol,
  Radio as AntdRadio,
  InputNumber as AntdInputNumber,
  Slider as AntdSlider,
  Upload as AntdUpload,
  Button as AntdButton,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function AppLeftControls() {
  const [gradientType, setGradientType] = useState("circular");
  const [gradientCoverage, setGradientCoverage] = useState(0);
  const [buttonRadius, setButtonRadius] = useState(1);
  const [titleSpacing, setTitleSpacing] = useState(1);

  return (
    <section>
      <AntdRow>
        <AntdCol span={6}>
          <label htmlFor="gradientType">Gradient Type</label>
        </AntdCol>
        <AntdCol span={18}>
          <AntdRadio.Group
            value={gradientType}
            onChange={(e) => setGradientType(e.target.value)}
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
      <AntdRow>
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
      <AntdRow>
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
      <AntdRow>
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
      <AntdRow>
        <AntdCol span={6}>
          <label htmlFor="upload">Upload a new image</label>
        </AntdCol>
        <AntdCol span={18}>
          <AntdUpload>
            <AntdButton icon={<UploadOutlined />}>Click to upload</AntdButton>
          </AntdUpload>
        </AntdCol>
      </AntdRow>
    </section>
  );
}
