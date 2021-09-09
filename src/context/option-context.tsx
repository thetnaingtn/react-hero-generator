import React, { createContext, useContext, useReducer } from "react";

type LeftOptionsProps = {
  buttonRadius: number;
  titleSpacing: number;
  gradientCoverage: number;
  gradientOverlay: string;
  previewImage: string;
  fileName: string;
  previewVisible: boolean;
};

type RightOptionsProps = {
  buttonColor: string;
  gradientColor: string;
  buttonHoverColor: string;
  button: boolean;
};

type Action =
  | { type: "UPDATE_LEFT_OPTIONS"; payload: LeftOptionsProps }
  | { type: "UPDATE_RIGHT_OPTIONS"; payload: RightOptionsProps };

type OptionsProps = {
  leftOptions: LeftOptionsProps;
  rightOptions: RightOptionsProps;
};

type AppOptionsContext = {
  state: OptionsProps;
  dispatch: React.Dispatch<Action>;
};

const initialState: OptionsProps = {
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
    gradientColor: "#000000",
    buttonHoverColor: "#63b6b8",
    button: true,
  },
};

const OptionContext = createContext<AppOptionsContext>({} as AppOptionsContext);

function reducer(state: OptionsProps, action: Action) {
  switch (action.type) {
    case "UPDATE_LEFT_OPTIONS": {
      return {
        ...state,
        leftOptions: action.payload,
      };
    }
    case "UPDATE_RIGHT_OPTIONS": {
      return {
        ...state,
        rightOptions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export function useOptionsContext() {
  return useContext(OptionContext);
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
