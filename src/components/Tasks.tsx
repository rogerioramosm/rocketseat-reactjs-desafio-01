import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

interface Props {
  id: string
  message: string,
  status: number,
  onChangeStatusTask: (id: string) => void,
  onDeleteTask: (id: string) => void;
}

export function Tasks({ id, message, status, onChangeStatusTask, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function changeStatusTask() {
    onChangeStatusTask(id);
  }

  return (
    <div className={styles.task}>
      {status === 0
        ?
        <button onClick={changeStatusTask} className={styles.toCheckButton}>
          <Circle />
        </button>
        :
        <button onClick={changeStatusTask} className={styles.checkedButton}>
          <CheckCircle />
        </button>
      }

      {status === 0
        ?
        <p className={styles.messageToCheck}>
          {message}
        </p>
        :
        <p className={styles.messageChecked}>
          {message}
        </p>
      }

      <button onClick={handleDeleteTask} className={styles.trashButton}>
        <Trash />
      </button>
    </div>
  )
}