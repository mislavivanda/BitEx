import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.aboutContactContainer}>
        {["About Us", "Contact"].map((item, index) =>
          index < 1 ? (
            <React.Fragment key={item}>
              <div className={styles.footerItem}>{item}</div>
              <div className={styles.dotSeparator}></div>
            </React.Fragment>
          ) : (
            <div key={item} className={styles.footerItem}>
              {item}
            </div>
          )
        )}
      </div>
      <div className={styles.footerItem}>BitEx 2021. All rights reserved.</div>
    </section>
  );
};

export default Footer;
