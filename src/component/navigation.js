import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/navigation.module.scss";
import Button from "./button";
import DropdownIcon from "../img/ic-dropdown.svg";
import LinkIcon from "../img/ic-link.svg";
import Ham from "./ham";
import ChooseLanguage from "../component/function/language";
import useScreenWidth from "./function/screenwidth";
import { useLanguage } from "./function/languageContext";

const Navigation = () => {
  const { language } = useLanguage();
  const width = useScreenWidth();

  const [languageList, setLanguageList] = useState(false);
  const toggleLanguageList = () => {
    setLanguageList((prev) => !prev);
  };

  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0); // 保證 DOM 渲染完後才執行
      }
    }
  }, [location]);

  return (
    <div className={styles.header}>
      <div className={styles.navigationBar}>
        <div>
          {width <= 500 && <Ham />}
          <Link
            to="/"
            onClick={() => scrollToSection("homePage")}
            className={styles.homeLinkArea}
          >
            <div className={styles.name}>Emily</div>
            <div className={styles.title}>UI/UX Designer</div>
          </Link>
        </div>
        {width > 800 && (
          <div className={styles.menu}>
            <div>
              <Link
                to="/#page1"
                onClick={() => scrollToSection("page1")}
                className={activeSection === "page1" ? styles.active : ""}
              >
                {language === "English" ? "About" : "關於我"}
              </Link>
            </div>
            <div>
              <Link
                to="/#page2"
                onClick={() => scrollToSection("page2")}
                className={activeSection === "page2" ? styles.active : ""}
              >
                {language === "English" ? "Works" : "參與專案"}
              </Link>
            </div>
            <div>
              <Link
                to="/#page3"
                onClick={() => scrollToSection("page3")}
                className={activeSection === "page3" ? styles.active : ""}
              >
                {language === "English" ? "Contact" : "留個言吧"}
              </Link>
            </div>
          </div>
        )}
        <div className={styles.buttonArea}>
          <a
            href="https://www.figma.com/proto/XiqAYoPOW2PVXNA5CFdUTU/MinAn-Resume?page-id=0%3A1&node-id=1-92&viewport=45%2C111%2C0.71&t=Vd4UEisHR111tcAy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name={language === "English" ? "Résumé" : "我的履歷"}
              color="primary"
              size="small"
              icon={LinkIcon}
              iconPosition="left"
            />
          </a>
          {width > 500 && (
            <div className={styles.languageBtnAndListOuter} ref={languageRef}>
              <Button
                onClick={toggleLanguageList}
                name={language === "English" ? "Language" : "語言選擇"}
                color="secondary"
                size="small"
                icon={DropdownIcon}
                iconPosition="right"
              />
              <ChooseLanguage
                setLanguageList={setLanguageList}
                isActive={languageList}
              />
            </div>
          )}
        </div>
      </div>
      {width <= 800 && width >= 500 && (
        <div className={styles.secondMenu}>
          <div className={styles.menu}>
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
        </div>
      )}
    </div>
  );
};

export default Navigation;
