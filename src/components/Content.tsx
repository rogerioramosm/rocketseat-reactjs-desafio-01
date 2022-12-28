import styles from './Content.module.css';

export function Content() {
  return (
    <main className={styles.content}>
      <form action="">
        <input type="search" placeholder='Adicione uma nova tarefa' />
        <button>Criar</button>
      </form>

      <div className={styles.taskList}>
        <h1>Conteudo</h1>
      </div>
    </main>

  )
}