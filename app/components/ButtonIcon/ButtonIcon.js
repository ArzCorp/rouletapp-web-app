import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons"

import styles from "./ButtonIcon.module.css";

export default function ButtonIcon({ children, icon = faDice, ...props }) {
  return (
    <button {...props} className={styles.button}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {children}
    </button>
  )
}