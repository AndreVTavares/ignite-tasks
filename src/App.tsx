import { ChangeEvent, useState } from 'react'

import { v4 as uuid } from 'uuid'

import { Header } from './components/Header'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'
import { Item } from './components/List/Item'

import plus from './assets/plus.svg'

import styles from './App.module.css'

export interface Task {
  id: string
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleNewTask() {
    if (!inputValue) {
      return
    }

    const newTask: Task = {
      id: uuid(),
      text: inputValue,
      isChecked: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value

    setInputValue(input)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.newTask}>
          <Input onChange={handleInputChange} />
          <Button onClick={handleNewTask}>
            Criar
            <img src={plus} alt="" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />
          {/*<Empty />*/}
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <Item key={task.id} data={task} />
            })
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
