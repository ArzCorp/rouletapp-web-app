import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faPen } from "@fortawesome/free-solid-svg-icons";

import styles from "./RouletteCard.module.css"

import Pill from "../Pill/Pill";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export default function RouletteCard({ title, options = [] }) {
  return(
    <article className={styles.rouletteCard}>
      <header>
        <h3>{title}</h3>
        <button>
          <FontAwesomeIcon icon={faPen} />
        </button>
      </header>
      <main>
        {options.map((option) => {
          return (
            <Pill key={option.id}>{option.name}</Pill>
          )
        })}
      </main>
      <footer>
        <ButtonIcon icon={faRotate}>Girar</ButtonIcon>
      </footer>
    </article>
  )
}