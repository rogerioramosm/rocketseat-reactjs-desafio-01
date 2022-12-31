/** Componentes react e externos */
import { ChangeEvent, InvalidEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

/** Componentes próprios */
import { Tasks } from './Tasks';
import { TaskEmpty } from './TaskEmpty';

/** Estilo CSS */
import styles from './Content.module.css';

interface TaskList {
  id: number,
  message: string,
  status: boolean
}

export function Content() {
  const taskList: TaskList[] = [];

  const [tasks, setTasks] = useState(taskList);
  const [taskMessage, setTaskMessage] = useState('');
  const [countTasks, setCountTasks] = useState(0);

  /** Cadastra novas tarefas */
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: countTasks,
      message: taskMessage,
      status: true
    }]);

    /** Reset de texto */
    setTaskMessage('');

    /** Counta tasks */
    setCountTasks((tasks) => tasks + 1)
  }

  /** Personaliza mensagem do required do input */
  function handleNewTaskEmpty(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity(
      'Este campo é obrigatório. Preencha para cadastrar nova tarefea!'
    );
  }

  /** Ao pressionar as letras no input, adiciona as mesmas no estado */
  function handleNewTaskMessage(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskMessage(event.target.value);
  }

  return (
    <main className={styles.content}>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          value={taskMessage}
          onChange={handleNewTaskMessage}
          onInvalid={handleNewTaskEmpty}
          placeholder='Adicione uma nova tarefa'
          autoFocus
          required
        />
        <button>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <section className={styles.taskBox}>
        <div className={styles.taskInfo}>
          <div>
            Tarefas criadas
            <span>{countTasks}</span>
          </div>
          <div>
            Concluídas
            {/* 2 de 5 */}
            <span>0</span>
          </div>
        </div>

        {countTasks === 0
          ? <TaskEmpty />
          : tasks.map(task =>
            <Tasks
              key={task.id}
              message={task.message}
              status={task.status}
            />
          )
        }
      </section>
    </main>

  )
}