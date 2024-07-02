import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/favicon.png" alt="Burlington Electronics Repair logo" className={styles.logo} />
      </footer>
    </>
  )
}
