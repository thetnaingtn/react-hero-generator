import { useOptionsContext } from "../context/option-context";
import { LeftOptionsProps } from "../context/option-context";

function rgbify(color: string) {
  let r = "0",
    g = "0",
    b = "0",
    h = color;

  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  } else if (h.length === 7) {
  }

  return `${+r},${+g},${+b}`;
}

function gradientType(overlay: LeftOptionsProps["gradientOverlay"]) {
  let direction;
  switch (overlay) {
    case "up": {
      direction = "to bottom";
      break;
    }
    case "down": {
      direction = "to top";
      break;
    }
    case "diagonalup": {
      direction = "45deg";
      break;
    }
    case "diagonaldown": {
      direction = "-45deg";
      break;
    }
  }

  if (overlay === "circular") {
    return `radial-gradient(ellipse at center`;
  } else {
    return `linear-gradient(${direction}`;
  }
}

function useGradient() {
  const {
    state: { leftOptions, rightOptions },
  } = useOptionsContext();
  const { gradientOverlay, gradientCoverage } = leftOptions;
  const type = gradientType(gradientOverlay);
  const rgb = rgbify(rightOptions.gradientColor);

  return gradientOverlay !== "none"
    ? `${type}, rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${gradientCoverage}%, rgba(${rgb},0.65) 100%), `
    : "";
}

export function useBackgroundCss() {
  const {
    state: { leftOptions },
  } = useOptionsContext();
  let img;
  leftOptions.previewVisible
    ? (img = leftOptions.previewImage)
    : (img =
        "https://images.unsplash.com/photo-1630700246857-3113649eb3b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2982&q=80");

  return `${useGradient()}url(${img}) no-repeat center center scroll`;
}

export function useOutputCss() {
  const {
    state: { leftOptions },
  } = useOptionsContext();
  return `${useGradient()}url(${
    leftOptions.fileName
  }) no-repeat center center scroll`;
}
