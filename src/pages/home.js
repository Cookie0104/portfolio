import styles from "../css/global.module.scss";
import Banner from "../pages/banner.js";
import About from "../pages/about.js";
import Works from "../pages/works.js";
import Contact from "../pages/contact.js";
import Footer from "../pages/footer.js";

function Home() {
  return (
    <div className={styles.app}>
      <Banner />
      <div className={styles.contentOuter}>
        <About id="page1" />
        <Works id="page2" />
      </div>
      <Contact id="page3" />
      <Footer />
    </div>
  );
}

export default Home;
