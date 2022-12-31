import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

interface Props {
  id: number
  message: string,
  status: boolean,
  onChangeStatusTask: (id: number) => void,
  onDeleteTask: (id: number) => void;
}

export function Tasks(
  { id,
    message,
    status,
    onChangeStatusTask,
    onDeleteTask }: Props) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function changeStatusTask() {
    onChangeStatusTask(id);
  }

  return (
    <div className={styles.task}>
      {status === false
        ?
        <button onClick={changeStatusTask} className={styles.toCheckButton}>
          <Circle />
        </button>
        :
        <button onClick={changeStatusTask} className={styles.checkedButton}>
          <CheckCircle />
        </button>
      }

      {status === false
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