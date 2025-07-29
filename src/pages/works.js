import Work1 from "./works/works1";
import Work2 from "./works/works2";
import Work3 from "./works/works3";
import styles from "../css/work.module.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../component/function/languageContext";

const Works = ({ id }) => {
  const { language } = useLanguage();
  
  return (
    <div id={id} className={styles.worksOuter}>
      <div className={styles.title}>{language === "English" ? "My Recent Works" : "近期參與專案"}</div>
      <div className={styles.workFlexArea}>
        <Link to="/works/UCB">
          <Work1 />
        </Link>
        <Link to="/works/HR">
          <Work2 />
        </Link>
        <Link to="/works/XDC">
          <Work3 />
        </Link>
      </div>
    </div>
  );
};

export default Works;
