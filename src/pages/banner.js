import styles from "../css/banner.module.scss";
import DraggablePoint from "../component/function/draggable";
import DraggablePoint2 from "../component/function/draggable2";
import useScreenWidth from "../component/function/screenwidth";

const Banner = () => {
  const width = useScreenWidth();
  return (
    <div id="homePage" className={width > 500 ? styles.aboutOuter : styles.aboutOuterPhone}>
      <div className={styles.draggableouter}>
        {width > 500 && <DraggablePoint />}
        {width <= 500 && <DraggablePoint2 />}
      </div>

      {/* <div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.open}>Open to New Opportunities</div>
      <div className={styles.about}>
        Combining creative thinking with technical execution to craft meaningful
        experiences for every user.
      </div> */}

      <span></span>
    </div>
  );
};

export default Banner;
