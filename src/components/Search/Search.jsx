import { useTranslation } from "react-i18next";
import "./Search.css";
const Search = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <>
      <div className="searchContainer">
        <div className="d-flex justify-content-center">
          <h3 className="text-center title">
            {t("search.title")}
            <span style={{ color: "#C4253B" }}>.</span>
          </h3>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder={t("search.placeholder")}
            name=""
            id=""
          />
          <button>{t("search.submit")}</button>
        </div>
      </div>
    </>
  );
};
export default Search;
