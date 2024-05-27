import { Trash, Check } from '@phosphor-icons/react'

import styles from './Item.module.css'

export function Item() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" id="checkbox" />
          <span className={`${styles.checkbox} ${styles['checkbox-checked']}`}>
            <Check size={12} />
          </span>
          <p className={`${styles.paragraph} ${styles['paragraph-checked']}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quia sequi adipisci vel maiores facere magni minima! Mollitia
            aspernatur rerum iure facere quisquam accusantium, reiciendis iusto,
            corporis consequatur, blanditiis modi.
          </p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
