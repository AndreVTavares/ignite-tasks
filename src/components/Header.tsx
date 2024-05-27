import styles from './Header.module.css'
import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Logo} alt="Logo da aplicação" />
    </div>
  )
}
