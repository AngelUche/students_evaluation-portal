import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Children,
} from "react";

interface StudentModalContext {
  ismodalOpen: boolean;
  handleModal: () => void;
  CloseModal: () => void;
}

interface StudentModalProps {
  children: ReactNode;
}

const StudentcontextProvider = createContext<StudentModalContext | null>(null);

// Context to toggle a modal
function StudentResultcontext({ children }: StudentModalProps) {
  const [ismodalOpen, setIsModalOpen] = useState<boolean>(false);

  // toogling a modal
  function handleModal() {
    setIsModalOpen(!ismodalOpen);
  }
  function CloseModal() {
    setIsModalOpen(false);
  }
  return (
    <StudentcontextProvider.Provider
      value={{ ismodalOpen, handleModal, CloseModal }}
    >
      {children}
    </StudentcontextProvider.Provider>
  );
}
// custom Hook Setup
function useGlobalContext() {
  return useContext(StudentcontextProvider);
}

export { StudentResultcontext, StudentcontextProvider, useGlobalContext };
