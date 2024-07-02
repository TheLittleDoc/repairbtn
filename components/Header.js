import styles from './Header.module.css'

export function Spacer({ width }) {
  return (<li className={`${styles.navItem} ${styles.spacer}`} style={{"width": {width}}}></li>);
}
export default function Header({ title }) {
  return (
    <>
    <a className={styles.logo} href="/"><img alt="Logo. Click to go home." className={styles.logo} src="/repairbtn3.png" /></a>
    
    <nav className={styles.nav}>
      <ul className={styles.navul}>
        <li>
          <a className={`${styles.navItem} ${styles.home}`} href="/">Home</a>
        </li>
        <li>
          <a className={styles.navItem} href="/services">Services</a>
        </li>
        <li>
          <a className={styles.navItem} href="/contact">Contact</a>
        </li>

        <li>
          <a className={styles.navItem} href="/about">About</a>
        </li>
        <Spacer width={100} />
        <li>
          <a className={styles.navItem} href="https://venmo.com/u/repairbtn">Pay</a>
        </li>

      </ul>
    </nav>
    </>

  );
}
