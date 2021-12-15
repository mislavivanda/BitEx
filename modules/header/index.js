import styles from "./header.module.css";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>LOGO DIO</div>
        <div className={styles.navbar}>
          {["Crypto offer", "Trade", "Blog"].map((item, index) =>
            index < 2 ? (
              <div key={item} className={styles.navItem}>
                {item}
              </div>
            ) : (
              <div
                key={item}
                className={`${styles.navItem} ${styles.lastItem}`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <div className={styles.loginRegisterContainer}>
        {["Login", "Register"].map((item, index) => (
          <div
            className={styles.item}
            style={{
              marginRight: index === 0 ? "1rem" : 0,
              marginLeft: index === 1 ? "1rem" : 0,
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
