//پیدا کردن زبان جاری با کوکی ها
import cookies from "js-cookie";
import { lang } from "./enumLanguage";

//cookies => پکیجی که به کوکی ها دسترسی داره

export const currentLanguageCode = cookies.get("i18next") || "en";

export const currentLanguage = lang.find((m) => m.code === currentLanguageCode);
