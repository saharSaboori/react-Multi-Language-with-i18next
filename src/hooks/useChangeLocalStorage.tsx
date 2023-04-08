import { useCallback } from "react";

const useChangeLocalStroge = () => {
  const changeLocalStroge = useCallback((language: string) => {
    return localStorage.setItem("language", language);
  }, []);

  return changeLocalStroge;
};
export default useChangeLocalStroge;
