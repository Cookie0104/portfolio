import { useEffect, useRef, useState } from "react";
import styles from "../css/menulist.module.scss";
import useScreenWidth from "./function/screenwidth";
import { useContext } from "react";
import { SideMenuContext } from "./function/sideMenuContext";
import ChooseLanguage2 from "../component/function/language2";
import { useLanguage } from "./function/languageContext";

const Menulist = () => {
  const { language } = useLanguage();
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(SideMenuContext);
  const width = useScreenWidth();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlayBackground)) {
      setIsSideMenuOpen(false);
    }
  };

  const [languageList, setLanguageList] = useState(false);
  const toggleLanguageList = () => {
    setLanguageList((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    setLanguageList(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsSideMenuOpen(false);
      setActiveSection(id);
    }
  };

  const [activeSection, setActiveSection] = useState("page1");

  useEffect(() => {
    const sections = ["page1", "page2", "page3"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 調整這裡來控制觸發時機
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
      onClick={handleOverlayClick}
      className={`${styles.overlayBackground} ${
        isSideMenuOpen ? styles["is-active"] : styles["is-inactive"]
      }`}
    >
      <div className={styles.menulist}>
        <div className={styles.flex}>
          <div>
            <a
              onClick={() => scrollToSection("page1")}
              className={activeSection === "page1" ? styles.active : ""}
            >
              {language === "English" ? "About" : "關於我"}
            </a>
          </div>
          <div>
            <a
              onClick={() => scrollToSection("page2")}
              className={activeSection === "page2" ? styles.active : ""}
            >
              {language === "English" ? "Works" : "參與專案"}
            </a>
          </div>
          <div>
            <a
              onClick={() => scrollToSection("page3")}
              className={activeSection === "page3" ? styles.active : ""}
            >
              {language === "English" ? "Contact" : "留個言吧"}
            </a>
          </div>
        </div>
        {width <= 500 && (
          <>
            <div onClick={toggleLanguageList}>{language === "English" ? "Language" : "語言選擇"}</div>
            {languageList && (
              <ChooseLanguage2
                onClick={handleClickOutside}
                setLanguageList={setLanguageList}
                isActive={languageList}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Menulist;
