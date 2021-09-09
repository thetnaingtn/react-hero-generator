import { useOptionsContext } from "../../context/option-context";
import { useBackgroundCss } from "../../hooks/use-css";
import {
  StylesMastHead,
  StylesMastHeadTitle,
  StylesMastHeadButton,
} from "./styles";

export default function AppMastHeader() {
  const {
    state: { leftOptions, rightOptions },
  } = useOptionsContext();
  let background = useBackgroundCss();
  return (
    <StylesMastHead background={background}>
      <StylesMastHeadTitle marginBottom={leftOptions.titleSpacing}>
        The Hero Generator
      </StylesMastHeadTitle>
      <StylesMastHeadButton
        button={rightOptions.button}
        borderRadius={leftOptions.buttonRadius}
        buttonColor={rightOptions.buttonColor}
        buttonHoverColor={rightOptions.buttonHoverColor}
      >
        When a hero come along
      </StylesMastHeadButton>
    </StylesMastHead>
  );
}
