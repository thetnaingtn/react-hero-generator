import { StylesMain } from "../app-bottom-drawer/styles";
import { AppLeftControls, AppRightControls } from "..";

export default function AppBottomDrawer() {
  return (
    <StylesMain>
      <aside>
        <AppLeftControls />
      </aside>
      <aside>
        <AppRightControls />
      </aside>
      <aside>
        <h3>About this project</h3>
        <p>
          I've had to implement the same hero for several years now, so like a
          good lazy programmer, I figured I'd automate it. This generator is
          intended to get you going, it doesn't provide every value but the code
          output should give you a nice jumping off point :)
        </p>
        <p>
          What does it do? It generates the code for the example above based on
          your preferences.
        </p>
      </aside>
    </StylesMain>
  );
}
