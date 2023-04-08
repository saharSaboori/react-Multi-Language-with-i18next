const changeDoc = (language: string) => {
  if (language === "en") {
    document.body.dir = "ltr";
  } else {
    document.body.dir = "rtl";
  }
};

export default changeDoc;
