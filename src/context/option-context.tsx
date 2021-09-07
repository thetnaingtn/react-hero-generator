import React, { createContext, useReducer } from "react";

type leftOptionsProps = {
  buttonRadius: number;
  titleSpacing: number;
  gradientCoverage: number;
  gradientOverlay: string;
  previewImage: string;
  fileName: string;
  previewVisible: boolean;
};

type rightOptionsProps = {
  buttonColor: string;
  gradientColor: string;
  buttonHoverColor: string;
  button: boolean;
};

type Action =
  | { type: "UPDATE_LEFT_OPTIONS" }
  | { type: "UPDATE_RIGHT_OPTIONS" };

type optionsProps = {
  leftOptions: leftOptionsProps;
  rightOptions: rightOptionsProps;
};

type AppOptionsContext = {
  state: optionsProps;
  dispatch: React.Dispatch<Action>;
};

const initialState: optionsProps = {
  leftOptions: {
    buttonRadius: 5,
    titleSpacing: 40,
    gradientCoverage: 37,
    gradientOverlay: "circular",
    previewImage: "https://hero-generator.netlify.app/qijin-xu.png",
    fileName: "qijin-xu.png",
    previewVisible: false,
  },
  rightOptions: {
    buttonColor: "#098191",
    gradientColor: "rgb(0, 0, 0)",
    buttonHoverColor: "#63b6b8",
    button: true,
  },
};

const OptionContext = createContext<AppOptionsContext>({} as AppOptionsContext);

function reducer(state: optionsProps, action: Action) {
  switch (action.type) {
    case "UPDATE_LEFT_OPTIONS": {
      return state;
    }
    case "UPDATE_RIGHT_OPTIONS": {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default function OptionsContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <OptionContext.Provider value={{ state, dispatch }}>
      {children}
    </OptionContext.Provider>
  );
}
