import en from "../locales/en/translation.json";

function compareFileJson(...theArgs) {
  //قراردادن فایل انگلیسی به عنوان فایل مرجع
  let english = en;
  //گرفتن کلید ها و مرتب کردن
  var aKeys = Object.keys(english).sort();
  let compare = false;

  //هرفایل دیگه ای هم گرفت کلید هاشو بگیره و مرتب کنه
  for (const arg of theArgs) {
    var argKeys = Object.keys(arg).sort();

    compare = JSON.stringify(aKeys) === JSON.stringify(argKeys);
  }

  if (!compare) throw new Error("Please check your translation files!!! ");
  // return console.log("Please check your translation files!!!")
}

export default compareFileJson;

//   var aKeys = Object.keys(a).sort();
// var bKeys = Object.keys(b).sort();
// return JSON.stringify(aKeys) === JSON.stringify(bKeys);
