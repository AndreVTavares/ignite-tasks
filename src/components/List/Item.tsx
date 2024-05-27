import { Trash, Check } from '@phosphor-icons/react'

import { Task } from '../../App'

import styles from './Item.module.css'

interface ItemProps {
  data: Task
}

export function Item({ data }: ItemProps) {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" id="checkbox" />
          <span className={`${styles.checkbox} ${styles['checkbox-checked']}`}>
            <Check size={12} />
          </span>
          <p className={`${styles.paragraph} ${styles['paragraph-checked']}`}>
            {data.text}
          </p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
