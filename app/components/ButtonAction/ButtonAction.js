import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.css";

export default function ButtonAction({ children, ...props }) {
  return(
    <button className={styles.button} {...props}>
      <FontAwesomeIcon icon={faCirclePlus} />
      <span>{children}</span>
    </button>
  )
}