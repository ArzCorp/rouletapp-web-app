import Image from "next/image";

import styles from "./Header.module.css";

export default function Header() {
  return(
    <header className={styles.header}>
      <section>
        <Image
          src="https://i.ibb.co/Zz4x9XpJ/rouletapp-logo-icon.png"
          width={30}
          height={30}
          alt="logo icon rouletapp"
        />
        <h2>Rouletapp</h2>
      </section>
    </header>
  )
}
