import styles from './Empty.module.css'

import clipboard from '../../assets/Clipboard.png'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
