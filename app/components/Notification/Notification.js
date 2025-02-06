import { NOTIFICATION_TYPES } from '@/app/utils/constants';
import styles from './Notification.module.css';

export default function Notification({ children, type = NOTIFICATION_TYPES.SUCCESS }) {
  const notificationStyles = styles[type];

  return (
    <article className={`${notificationStyles} ${styles.notification}`}>
      {children}
    </article>
  )
}