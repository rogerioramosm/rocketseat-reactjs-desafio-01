import { ClipboardText } from 'phosphor-react';

import styles from './TaskEmpty.module.css';

export function TaskEmpty() {
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