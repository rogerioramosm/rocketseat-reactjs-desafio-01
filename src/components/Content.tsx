import { FormEvent } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';

import styles from './Content.module.css';
import { Tasks } from './Tasks';

const tasksToDo = [
  {
    id: 1,
    content: "Primeira tarefa"
  },
  {
    id: 2,
    content: "Segunta tarefa"
  }
]

export function Content() {
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    console.log('Clicou em criar!')
  }

  return (
    <main className={styles.content}>
      <form onSubmit={handleCreateTask}>
        <input type="search" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <section className={styles.taskBox}>
        <div className={styles.taskInfo}>
          <div>
            Tarefas criadas
            <span>{tasksToDo.length}</span>
          </div>
          <div>
            Concluídas
            <span>0</span>
          </div>
        </div>

        {tasksToDo.map(task => {
          if (!task.content) {
            return (
              <Tasks key={task.id} />
            )
          } else {
            return (
              <div className={styles.taskEmpty}>
                <ClipboardText />
                <p>
                  Você ainda não tem tarefas cadastradas
                </p>
                <span>
                  Crie tarefas e organize seus itens a fazer
                </span>
              </div>
            )
          }
        })}

      </section>
    </main>

  )
}