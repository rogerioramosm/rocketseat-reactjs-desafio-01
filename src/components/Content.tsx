/** Componentes react e externos */
import { ChangeEvent, InvalidEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

/** Componentes próprios */
import { Tasks } from './Tasks';
import { TaskEmpty } from './TaskEmpty';

/** Estilo CSS */
import styles from './Content.module.css';

interface TaskList {
  id: string,
  message: string,
  status: boolean
}

export function Content() {
  const [tasks, setTasks] = useState<TaskList[]>([]);
  const [taskMessage, setTaskMessage] = useState('');
  const [countTasks, setCountTasks] = useState(0);

  /** Cadastra novas tarefas */
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: uuidv4(),
      message: taskMessage,
      status: false
    }]);

    /** Reset de texto */
    setTaskMessage('');

    /** Counta tasks */
    setCountTasks((count) => count + 1);
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

  /** Para deletar task */
  function deleteTask(id: string) {
    const newTaskWithoutIdDeleted = tasks.filter(task => task.id !== id);

    setTasks(newTaskWithoutIdDeleted);
    setCountTasks(newTaskWithoutIdDeleted.length);
  }

  /** Para alterar status da task */
  function changeStatusTask(id: string) {
    const newTasksChangedStatus = tasks.reduce((allTasks, task) => {
      if (task.id === id) {
        if (!task.status) {
          task.status = true;
        } else {
          task.status = false;
        }
      }
      allTasks.push(task);

      return allTasks;
    }, []);

    setTasks(newTasksChangedStatus);
  }

  /** Contar Tasks concluídas */
  const taskIsComplete = tasks.reduce((allTasks, task) => {
    if (task.status) {
      allTasks++;
    }

    return allTasks;
  }, 0);

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
            <span>
              {countTasks > 0
                ? `${taskIsComplete} de ${countTasks}`
                : countTasks}
            </span>
          </div>
        </div>

        {countTasks === 0
          ? <TaskEmpty />
          : tasks.map(task =>
            <Tasks
              key={task.id}
              id={task.id}
              message={task.message}
              status={task.status}
              onChangeStatusTask={changeStatusTask}
              onDeleteTask={deleteTask}
            />
          )
        }
      </section>
    </main>

  )
}