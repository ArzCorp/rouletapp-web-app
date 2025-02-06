import styles from './Modal.module.css';

export default function Modal({ children, isOpen = false }) {
  const isOpenStyle = isOpen ? 'grid' : 'none';

  return(
    <section className={styles.modal} style={{ display: isOpenStyle }}>
      <main>
        {children}
      </main>
    </section>
  )
}