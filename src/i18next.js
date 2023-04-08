
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import fa from './locales/fa/translation.json';
import en from './locales/en/translation.json';


const resources = {
  en: {
    translation: en
  },
  fa:{
    translation:fa
  }
  
};


i18next
// .use(Backend)
  //مقدار initReactI18next بهش پاس میدیم
  .use(initReactI18next)
  .use(LanguageDetector)
  //چون که برنامه قراره بزرگ بشه و نمیتونیم تمام زبان ها
  // و ترجمه هارو تو این فایل بزاریم پس از این استفاده میکنیم
  // این ابزار به ما اجازه میده که زبانها و ترجمه هارو رو از هر منبعی که میخوایم بارگیری کنیم

  
  //با اجرای i18next مقداردهی اولیه میکنیم
  .init({
    debug:true,
    //اگه کاربرزبانیو انتخاب کرد که پشتیبانی نمیشد
    fallbackLng: "en",
    resources,

    //    backend: {
        
    //   //مسیری که فایل های جیسان قرارداره
    //   // loadPath: '/shared/locales/{{lng}}/translation.json',
      
    //   loadPath:"./locales/{{lng}}/translation.json",
    // },
    //زبان های که برنامه من پشتیبانی میکنه
    supportedLngs: ["en", "fa"],

    
    //زبان به انگلیسی تنظیم میکنه دفعه اول که صفحه لود میشه انگلیسیه
    //lng: document.querySelector("html").lang,
    //lng:"en",

    detection: {
      //اولویت بندی میکنه
      order: ["localStorage", "htmlTag", "cookie", "path", "subdomain"],
      caches: ["localStorage"],
      
    },     
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
 

    //رفرش صفحه زبان تغییرنکند
    // React:{useSuspense:false}
    //ابجکتی از تمام زبان هایی که داریم
    //   resources:{
    //     en:{
    //         translation:{
    //             Learn: 'Learn Is React',
    //             Description:'Edit src/App.tsx and save to reload.',
    //         },
    //     },
    //     fa: {
    //         translation: {
    //           Learn: "اموزش ریکت",
    //           Description: "آپدیت src/App.tsx ذخیره و اجرا",
    //         },
    //       },
    //   }
  });

//LanguageDetector 7
//این یک افزونه تشخیص زبان i18next
// است که برای شناسایی زبان کاربر در مرورگر با پشتیبانی از موارد زیر استفاده می‌شود:
//زبان را از تمام منابع زیر دریافت میکند
//cookie (set cookie i18next=LANGUAGE)
// sessionStorage (set key i18nextLng=LANGUAGE)
// localStorage (set key i18nextLng=LANGUAGE)
// navigator (set browser language)
// querystring (append ?lng=LANGUAGE to URL)
// htmlTag (add html language tag <html lang="LANGUAGE" ...)
// path (http://my.site.com/LANGUAGE/...)
// subdomain (http://LANGUAGE.site.com/...)
