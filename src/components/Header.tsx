import styles from './Header.module.css';

import todoLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Rocketseat - Todo List - Desafio ReactJS - 01" />
    </header>
  )
}