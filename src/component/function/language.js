import { useLanguage } from "../function/languageContext";
import styles from "../../css/language.module.scss";

const ChooseLanguage = ({ setLanguageList , isActive}) => {
  const { setLanguage } = useLanguage();
  const changeLanguage = (e) =>{
    const targetLanguage = e.currentTarget.dataset.value;
    setLanguage(targetLanguage);
    setLanguageList(false);
  }

  return (
    <div className={`${styles.languageListOuter} ${isActive ? styles.active : ""}`}>
      <div onClick={changeLanguage} data-value="Chinese">中文</div>
      <div onClick={changeLanguage} data-value="English">English</div>
    </div>
  );
};

export default ChooseLanguage;
