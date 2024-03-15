import styles from './Header.module.css'

export function Spacer({ width }) {
  return (<li className={`${styles.navItem} ${styles.spacer}`} style={{"width": {width}}}></li>);
}
export default function Header({ title }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navul}>
        <li className={`${styles.navItem}`}>
          <img className={styles.logo} src="/logo.png" alt="Burlington Electronics Repair logo" />
        </li>
        <li className={styles.navItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/services">Services</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact">Contact</a>
        </li>

        <li className={styles.navItem}>
          <a href="/about">About</a>
        </li>
        <Spacer width={100} />
        <li className={styles.navItem}>
          <a href="https://venmo.com/u/repairbtn">Pay</a>
        </li>

      </ul>
    </nav>

  );
}
