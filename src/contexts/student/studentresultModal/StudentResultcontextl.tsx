import { useState, useContext, createContext, ReactNode } from "react";

// INTERFACE FOR CONTEXT BASED ON THE ID AND STATUS OF THE STUDENT
interface ViewResultContextinterface {
  // id: string;
  showviewResult: { resultstatus: boolean };
  showResultPage: { isViewResultTrue: boolean };
  setShowrRsultPage: (value: ShowViewResltinterface) => void;
  OpenViewResult: (openresult: LogoutModaltinterface) => void;
  CloseViewResult: (closeresult: LogoutModaltinterface) => void;
  OpenResultPage: (openresultpage: ShowViewResltinterface) => void;
  CloseResultPage: (closenresultpage: ShowViewResltinterface) => void;
}

// interface FOR THE state values (useState)
interface LogoutModaltinterface {
  resultstatus: boolean;
}
// INTERFACE TO TOGGLE BETWEEN RESULT PAGE AND VIEW RESULTS
export interface ShowViewResltinterface {
  isViewResultTrue: boolean;
  // ID OF EACH STUDENT
  id: number | undefined;
}

// SETTNG INTERFACEFOR THE CHILDREN AND THE VALUE
interface ViewResultContextproviderprops {
  children: ReactNode;
}

// CREATING THE CONTEXT FOR THE MODAL
export const ViewResultContext = createContext(
  {} as ViewResultContextinterface
);

export function ViewResultContextprovider({
  children,
}: ViewResultContextproviderprops) {
  // STATE TO DISPLAY MODAL
  const [showviewResult, setshowviewResult] = useState<LogoutModaltinterface>({
    resultstatus: false,
  });
  // TO TGGLE BETWEEN VIEW RESUT AND RESULT PAGE
  const [showResultPage, setShowrRsultPage] = useState<ShowViewResltinterface>({
    isViewResultTrue: true,
    id: undefined,
  });

  // FUNCTION TO OPEN VIEWRESULT MODAL
  function OpenViewResult({ resultstatus }: LogoutModaltinterface) {
    setshowviewResult({ resultstatus: true });
  }

  // FUNCTION TO CLOSE VIEWRESULT MODAL
  function CloseViewResult({ resultstatus }: LogoutModaltinterface) {
    setshowviewResult({ resultstatus: false });
  }
  // FUNCTION TO TURN THE RESULTPAGE TRUE
  function OpenResultPage() {
    setShowrRsultPage({ isViewResultTrue: true, id: undefined });
  }
  // FUNCTION TO TURN THE RESULTPAGE False
  function CloseResultPage() {
    setShowrRsultPage({ isViewResultTrue: false, id: undefined });
  }

  // RETURNING THE REACT CHILDREN VLAUES TO BE CONSUMED
  return (
    <ViewResultContext.Provider
      value={{
        showviewResult,
        OpenViewResult,
        CloseViewResult,
        showResultPage,
        OpenResultPage,
        setShowrRsultPage,
        CloseResultPage,
      }}
    >
      {children}
    </ViewResultContext.Provider>
  );
}
