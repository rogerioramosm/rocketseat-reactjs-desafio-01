import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

interface Props {
  id: number
  message: string,
  status: boolean,
  onDeleteTask: (id: number) => void;
}

export function Tasks({ id, message, status, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
      {status === true
        ?
        <div className={styles.toCheckButton}>
          <Circle />
        </div>
        :
        <div className={styles.checkedButton}>
          <CheckCircle />
        </div>
      }

      <p>
        {message}
      </p>

      <button onClick={handleDeleteTask} className={styles.trashButton}>
        <Trash />
      </button>
    </div>
  )
}