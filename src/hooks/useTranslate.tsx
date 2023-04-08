import { useTranslation } from "react-i18next";
import en from "../locales/en/translation.json";
import fa from "../locales/fa/translation.json";
import { useCallback } from "react";


const lang = { ...fa, ...en };
type trans = keyof typeof lang;

const useTranslate = () => {
  const {t} = useTranslation();

  const translate = useCallback(
    (translate: trans) => {
      return t(translate);
    },
    [t]
  );

  return translate;
};
export default useTranslate;
