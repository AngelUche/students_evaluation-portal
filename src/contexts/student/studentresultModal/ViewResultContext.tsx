// jshint esversion:6
import { createContext, ReactNode, useState } from "react";

// interface to select result session from UseState
export interface ToSelectViewSessioninterface {
  status: boolean;
  id: number | undefined;
}

// INTERFACE FOR ViewResultModalContext
interface ViewResultModalContextProps {
  isResultPage: {
    status: boolean;
    id: number | undefined;
  };
  toggleViewResultPage: (ViewResult: ToSelectViewSessioninterface) => void;
}

// INTERFACE FOR THE CONTETXT PROVIDER FUNCTION
interface ViewResultModalContextProviderProps {
  children: ReactNode;
}

// CREATE CONTEXT FORNTHE CONTEXT PROVIDERFUNVTION
export const ViewResultModalContext = createContext(
  {} as ViewResultModalContextProps
);

// CONTEXT PROVIER FUNCTION
export function ViewResultModalContextProvider({
  children,
}: ViewResultModalContextProviderProps) {
  // CREATING STATE VARIABLE TO SELECT RESULTPAGE
  const [isResultPage, setIsResultPgae] =
    useState<ToSelectViewSessioninterface>({
      status: true,
      id: undefined,
    });

  // TO TOGGLE BETWEEN SELECTCIONMPDAL  AND SHOW RESULTPAGE
  function toggleViewResultPage({ status, id }: ToSelectViewSessioninterface) {
    setIsResultPgae({ status, id });
  }
  // RETURN STATEMENT FOR THE CONTEXT PROVIDER
  return (
    <ViewResultModalContext.Provider
      value={{ isResultPage, toggleViewResultPage }}
    >
      {children}
    </ViewResultModalContext.Provider>
  );
}
