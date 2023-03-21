import { useState, useContext, createContext, ReactNode } from "react";

// INTERFACE FOR CONTEXT BASED ON THE ID AND STATUS OF THE STUDENT
interface ViewResultContextinterface {
  // id: string;
  showviewResult: { resultstatus: boolean };
  // OpenViewResult: ({} )=> void;
  OpenViewResult: (openresult: showStudentResultinterface) => void;
  CloseViewResult: (closeresult: showStudentResultinterface) => void;
}

// interface FOR THE state values (useState)
interface showStudentResultinterface {
  resultstatus: boolean;
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
  const [showviewResult, setshowviewResult] =
    useState<showStudentResultinterface>({ resultstatus: false });

  // FUNCTION TO OPEN VIEWRESULT MODAL
  function OpenViewResult({ resultstatus }: showStudentResultinterface) {
    setshowviewResult({ resultstatus: true });
  }

  // FUNCTION TO CLOSE VIEWRESULT MODAL
  function CloseViewResult({ resultstatus }: showStudentResultinterface) {
    setshowviewResult({ resultstatus: false });
  }

  // RETURNING THE REACT CHILDREN VLAUES TO BE CONSUMED
  return (
    <ViewResultContext.Provider
      value={{ showviewResult, OpenViewResult, CloseViewResult }}
    >
      {children}
    </ViewResultContext.Provider>
  );
}

// custom Hook Setup
// export function useGlobalContext() {
//   return useContext(viewResultContext);
// }
