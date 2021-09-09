import { useEffect, useMemo, useState } from "react";
import { Row as AntdRow, Col as AntdCol, Switch as AntdSwitch } from "antd";

import { useOptionsContext } from "../../context/option-context";
export default function AppRightControls() {
  const {
    state: { rightOptions },
    dispatch,
  } = useOptionsContext();
  const [button, setButton] = useState(rightOptions.button);
  const [buttonColor, setButtonColor] = useState(rightOptions.buttonColor);
  const [buttonHoverColor, setButtonHoverColor] = useState(
    rightOptions.buttonHoverColor
  );
  const [gradientColor, setGradientColor] = useState(
    rightOptions.gradientColor
  );

  useEffect(() => {
    dispatch({
      type: "UPDATE_RIGHT_OPTIONS",
      payload: {
        button,
        buttonColor,
        buttonHoverColor,
        gradientColor,
      },
    });
  }, [button, buttonColor, buttonHoverColor, gradientColor, dispatch]);

  return useMemo(() => {
    return (
      <section>
        <AntdRow>
          <AntdCol span={12}>
            <label htmlFor="button">Button</label>
          </AntdCol>
          <AntdCol span={12}>
            <AntdSwitch
              style={{ background: "#63b6b8" }}
              onChange={() => setButton((val) => !val)}
            />
          </AntdCol>
        </AntdRow>
        <AntdRow>
          <AntdCol span={12}>
            <label htmlFor="buttonColor">Button Color</label>
          </AntdCol>
          <AntdCol span={12}>
            <input
              id="buttonColor"
              type="color"
              onChange={(e) => setButtonColor(e.target.value)}
              value={buttonColor}
            />
          </AntdCol>
        </AntdRow>
        <AntdRow>
          <AntdCol span={12}>
            <label htmlFor="buttonHoverColor">Button Hover Color</label>
          </AntdCol>
          <AntdCol span={12}>
            <input
              id="buttonHoverColor"
              type="color"
              onChange={(e) => setButtonHoverColor(e.target.value)}
              value={buttonHoverColor}
            />
          </AntdCol>
        </AntdRow>
        <AntdRow>
          <AntdCol span={12}>
            <label htmlFor="gradientColor">Gradient Color</label>
          </AntdCol>
          <AntdCol span={12}>
            <input
              id="gradientColor"
              type="color"
              onChange={(e) => setGradientColor(e.target.value)}
              value={gradientColor}
            />
          </AntdCol>
        </AntdRow>
      </section>
    );
  }, [buttonColor, buttonHoverColor, gradientColor]);
}
