import { useOptionsContext } from "../../context/option-context";
import {
  StylesMastHead,
  StylesMastHeadTitle,
  StylesMastHeadButton,
} from "./styles";

export default function AppMastHeader() {
  const {
    state: { leftOptions, rightOptions },
  } = useOptionsContext();
  return (
    <StylesMastHead>
      <StylesMastHeadTitle>The Hero Generator</StylesMastHeadTitle>
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
