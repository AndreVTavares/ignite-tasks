import { Header } from './components/Header'

import styles from './App.module.css'
import plus from './assets/plus.svg'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'
import { Item } from './components/List/Item'

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.newTask}>
          <Input />
          <Button>
            Criar
            <img src={plus} alt="" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />
          {/*<Empty />*/}
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </main>
  )
}
