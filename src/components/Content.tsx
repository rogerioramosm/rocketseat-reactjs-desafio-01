/** Componentes react e externos */
import { FormEvent, useState } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';

/** Componentes próprios */
import { Tasks } from './Tasks';
import { TaskEmpty } from './TaskEmpty';

/** Estilo CSS */
import styles from './Content.module.css';

interface TasksList {
  id: number,
  message: string
}

const taskList: TasksList[] = [
  {
    id: 1,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  }, {
    id: 2,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dignissimos magnam et vel iste similique doloremque minus quam magni quidem. Reiciendis, accusamus odit laborum amet earum commodi aspernatur iure ab."
  }
]

export function Content() {
  const [tasks, setTasks] = useState(taskList);

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
            <span>0</span>
          </div>
          <div>
            Concluídas
            <span>0</span>
          </div>
        </div>

        {tasks.length === 0
          ? <TaskEmpty />
          : tasks.map(task => <Tasks key={task.id} message={task.message} />)
        }
      </section>
    </main>

  )
}