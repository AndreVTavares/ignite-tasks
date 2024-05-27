import styles from './ListHeader.module.css'

interface ListHeaderProps {
  taskCounter: number
  checkedTaskCounter: number
}

export function ListHeader({
  taskCounter,
  checkedTaskCounter,
}: ListHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>
      <aside>
        <p>Concluidas</p>
        <span>{checkedTaskCounter}</span>
      </aside>
    </header>
  )
}
