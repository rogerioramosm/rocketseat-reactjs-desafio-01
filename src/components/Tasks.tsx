import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

interface Message {
  message: string
}

export function Tasks({ message }: Message) {
  return (
    <div className={styles.task}>
      <div className={styles.toCheckButton}>
        <Circle />
      </div>

      {/* <div className={styles.checkedButton}>
            <CheckCircle />
          </div> */}

      <p>
        {message}
      </p>

      <div className={styles.trashButton}>
        <Trash />
      </div>
    </div>
  )
}