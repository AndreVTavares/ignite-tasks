import styles from './ListHeader.module.css'

export function ListHeader() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>5</span>
      </aside>
      <aside>
        <p>Concluidas</p>
        <span>2</span>
      </aside>
    </header>
  )
}
