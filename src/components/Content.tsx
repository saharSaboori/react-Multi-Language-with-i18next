import useTranslate from "../hooks/useTranslate";

const Content = () => {
  const t = useTranslate();
  return (
    <>
      <a className="flex flex-col items-center bg-white border  border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 relative left-72 right-72">
        <img
          className="object-cover  w-80 rounded-t-lg  h-96 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg mr-3 ml-3"
          src="/img/images.jpg"
        />
        <div className="flex flex-col  justify-between p-3 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Noteworthy")}
          </h5>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {t("technology")}
          </p>
        </div>
      </a>
      <a className="flex flex-col items-center bg-white border  border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 relative left-72 right-72 mt-10">
        <img
          className="object-cover  w-80 rounded-t-lg  h-96 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg mr-3 ml-3"
          src="/img/images.jpg"
        />
        <div className="flex flex-col  justify-between p-3 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Noteworthy")}
          </h5>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {t("technology")}
          </p>
        </div>
      </a>
      <a className="flex flex-col items-center bg-white border  border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 relative left-72 right-72 mt-10">
        <img
          className="object-cover  w-80 rounded-t-lg  h-96 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg mr-3 ml-3"
          src="/img/images.jpg"
        />
        <div className="flex flex-col  justify-between p-3 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Noteworthy")}
          </h5>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {t("technology")}
          </p>
        </div>
      </a>
      <a className="flex flex-col items-center bg-white border  border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 relative left-72 right-72 mt-10">
        <img
          className="object-cover  w-80 rounded-t-lg  h-96 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg mr-3 ml-3"
          src="/img/images.jpg"
        />
        <div className="flex flex-col  justify-between p-3 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Noteworthy")}
          </h5>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {t("technology")}
          </p>
        </div>
      </a>
    </>
  );
};

export default Content;
