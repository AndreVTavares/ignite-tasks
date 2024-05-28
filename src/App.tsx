import { ChangeEvent, FormEvent, useState } from 'react'

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

  const checkedTaskTotal = tasks.reduce((accumulator, task) => {
    if (task.isChecked) {
      return accumulator + 1
    }

    return accumulator
  }, 0)

  function handleNewTask(event: FormEvent) {
    event?.preventDefault()
    if (!inputValue) {
      return
    }

    const newTask: Task = {
      id: uuid(),
      text: inputValue,
      isChecked: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value

    setInputValue(input)
  }

  function handleRemoveTask(id: string) {
    const filtredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo deletar essa Task?')) {
      return
    }

    setTasks(filtredTasks)
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const toggledTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(toggledTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <form onSubmit={handleNewTask}>
          <div className={styles.newTask}>
            <Input value={inputValue} onChange={handleInputChange} />
            <Button type="submit">
              Criar
              <img src={plus} alt="" />
            </Button>
          </div>
        </form>

        <div className={styles.tasksList}>
          <ListHeader
            taskCounter={tasks.length}
            checkedTaskCounter={checkedTaskTotal}
          />
          {/*<Empty />*/}
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              )
            })
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
