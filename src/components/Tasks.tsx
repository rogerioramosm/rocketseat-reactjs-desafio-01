import { Circle, CheckCircle, Trash } from 'phosphor-react';
import { MouseEvent } from 'react';

import styles from './Tasks.module.css';

interface Message {
  message: string,
  status: boolean
}

export function Tasks({ message, status }: Message) {
  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>) {
    console.log(event)

    return true;
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

      <button
        onClick={handleDeleteTask}
        className={styles.trashButton}
        id={message}
      >
        <Trash />
      </button>
    </div>
  )
}