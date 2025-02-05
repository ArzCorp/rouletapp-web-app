import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BUTTON_TYPES } from "@/app/utils/constants";

import styles from "./Pill.module.css";

export default function Pill({ children, showActions = false, onClick, ...props }) {
  const toggleActions = showActions ? styles.showActions : styles.hideActions;

  return (
    <span className={styles.pill}>
      <p>{children}</p>
      <section className={toggleActions}>
        <button {...props} onClick={(ev) => onClick({ actionType: BUTTON_TYPES.EDIT, ...ev })}>
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button {...props} onClick={(ev) => onClick({ actionType: BUTTON_TYPES.REMOVE, ...ev })}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    </span>
  )
}