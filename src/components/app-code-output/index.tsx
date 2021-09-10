import { Button as AntdButton } from "antd";
import { useRef, useState } from "react";

import { useOutputCss } from "../../hooks/use-css";
import { StylesCode, StylesCopyButton } from "./styles";
import { useOptionsContext } from "../../context/option-context";

export default function AppCodeOutput() {
  const {
    state: { leftOptions, rightOptions },
  } = useOptionsContext();

  const code = useRef<HTMLDivElement>(null);
  const [codeCopied, setCodeCopied] = useState(false);

  const buttonOutput = `
    button {
        background: ${rightOptions.buttonColor};
        transition: background ease .25s;
        border-radius: ${leftOptions.buttonRadius}px;
        display: inline-block;
        border: none;
        padding: 0.75rem 1.5rem;
        margin: 0;
        text-decoration: none;
        color: #ffffff;
        font-size: 1.2rem;
        cursor: pointer;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    button:hover {
        background: ${rightOptions.buttonHoverColor}
    }
    button:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }`;

  const mastHeadOutput = `
    .masthead {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 100%;
        height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
        overflow: hidden;
        background-size: cover !important;
        background: ${useOutputCss()};
    }

    h1 {
        font-style: normal;
        font-weight: bold;
        color: #eee;
        font-size: 11vmin;
        letter-spacing: 0.03em;
        line-height: 1;
        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
        margin-bottom: ${leftOptions.titleSpacing}px;
    }`;

  const htmlOutput = `
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>
        The Hero Generator
      </h1>
      ${
        rightOptions.button
          ? `<button>
        When a hero comes along
      </button>`
          : ""
      }
    </section>
  `;

  function copy(e: React.MouseEvent) {
    e.preventDefault();
    let text = code.current,
      range,
      selection;
    if (window.getSelection !== undefined) {
      selection = window.getSelection();
      range = document.createRange();
      if (text) range.selectNodeContents(text);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    let copied = document.execCommand("copy");
    if (copied) {
      setCodeCopied(true);
      setTimeout(() => {
        setCodeCopied(false);
      }, 2000);
    }
  }
  return (
    <div>
      <div ref={code}>
        <h3 style={{ color: "#eee" }}>CSS</h3>
        <StylesCode>{mastHeadOutput}</StylesCode>
        {rightOptions.button && <StylesCode>{buttonOutput}</StylesCode>}
        <StylesCode html>{htmlOutput}</StylesCode>
      </div>
      <StylesCopyButton>
        <AntdButton
          onClick={copy}
          style={{ background: "#098191", color: "#eee" }}
        >
          {!codeCopied ? "Copy to the clipboard!" : "Code copied"}
        </AntdButton>
      </StylesCopyButton>
    </div>
  );
}
