import Navigation from "./component/navigation.js";
import Menulist from "./component/menulist.js";
import styles from "./css/global.module.scss";
import { SideMenuProvider } from "./component/function/sideMenuContext.js";
import { LanguageProvider } from "./component/function/languageContext.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import UCB from "./pages/innerPage/UCB.js";
import HR from "./pages/innerPage/HR.js";
import XDC from "./pages/innerPage/XDC.js";

function App() {
  return (
    <SideMenuProvider>
      <LanguageProvider>
        <Menulist />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} className={styles.app}></Route>
          <Route path="/works/UCB" element={<UCB />} ></Route>
          <Route path="/works/HR" element={<HR />} ></Route>
          <Route path="/works/XDC" element={<XDC />} ></Route>
        </Routes>
      </LanguageProvider>
    </SideMenuProvider>
  );
}

export default App;
