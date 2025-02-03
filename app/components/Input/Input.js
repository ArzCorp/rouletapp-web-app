import styles from "./input.module.css"

export default function Input({ label="", type="text", ...props }) {
  return (
    <label className={styles.input}>
      <input type={type} placeholder={label} {...props} />
    </label>
  )
}