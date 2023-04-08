import useTranslate from "../hooks/useTranslate";

const List = () => {
  const t = useTranslate();
  return (
    <>
      <div className="max-w-md text-gray-900 divide-y divide-gray-200 2xl: relative right-40 left-40">
        <div className="flex flex-col pb-3 ">
          <dt className="mb-1 text-orange-900 md:text-lg ">
            <h2 className="text-l">{t("article")}</h2>
            {/* <p>{t("Hello")}</p> */}
          </dt>
        </div>
        <div className="flex flex-col py-3 ">
          <dt className="mb-1 text-sm text-gray-500 "></dt>
          <dd className="text-sm font-semibold  hover:text-teal-500">
            <a href="#">{t("Construction")}</a>
          </dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg "></dt>
          <dd className="text-sm font-semibold hover:text-teal-500">
            <a href="#">{t("Discovery")}</a>
          </dd>
        </div>
      </div>
    </>
  );
};

export default List;
