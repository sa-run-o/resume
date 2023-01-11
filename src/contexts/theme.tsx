import { createContext, ReactNode, useState } from "react";
interface IModeComtextProvider {
  children: ReactNode;
}
interface IModeContext {
  mode: "sun" | "moon";
  setMode: Function;
}
export const ModeContext = createContext<IModeContext>({
  mode: "sun",
  setMode: (e: string) => {},
});

const ModeContextProvider = ({ children }: IModeComtextProvider) => {
  const [mode, setMode] = useState<"sun" | "moon">("sun");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
