import { BUTTON_TYPES } from "@/app/utils/constants"
import styles from "./Button.module.css"

export default function Button({ children, type = BUTTON_TYPES.SUCCESS, ...props }) {
  const buttonTypeClass = styles[type]

  return (
    <button className={`${buttonTypeClass} ${styles.button}`} {...props}>{children}</button>
  )
}