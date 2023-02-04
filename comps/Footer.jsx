import styles from '../styles/Footer.module.css';
import Link from 'next/link'

const Footer = ({ children }) => {
  return (
    <>
    { children }
    <footer className={styles.footer}>
          <Link href='https://twitter.com/iimyha'>
            <a className={styles.credit}>
              جميع الحقوق محفوظة لمحمد الحمود - 2023
            </a>
          </Link>
    </footer>
    </>
  )
}

export default Footer;