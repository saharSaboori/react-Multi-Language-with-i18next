import MainMenu from "./components/MainMenu";
import Content from "./components/Content";
import List from "./components/List";
import { useEffect, useState } from "react";
import changeDoc from "./utility/languages/ChangeDoc";
import compareFileJson from "./utility/compareJson";
import fa from './locales/fa/translation.json'
import useChangeLocalStroge from "./hooks/useChangeLocalStorage";



function App() {
  
 
  const languageStoredInLocalStorage = localStorage.getItem("language");

  const [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "en"
  );

  //ست کردن زبان در لوکال استورج
  const lan = useChangeLocalStroge();
  lan(language);

  //تغییر داکیومنت
  changeDoc(language);

  //مقایسه فایل های json
  useEffect(() => {
    compareFileJson(fa);
  }, []);

  return (
    <>
      <div className="grid gap-2">
        <header className="col-span-4 ">
          <MainMenu
            handleSetLanguage={(language: string) => {
              setLanguage(language);
            }}
          />
        </header>
        <aside className="2xl:col-span-1 xl:col-span-1 lg:col-span-2 md:grid-rows-2  sm:text-7xl">
          <List />
        </aside>
        <section className="2xl:col-span-3 xl:col-span-3 l:col-span-2 md:grid-rows-2 sm:col-span-2">
          <Content />
        </section>
      </div>
    </>
  );
}

export default App;
