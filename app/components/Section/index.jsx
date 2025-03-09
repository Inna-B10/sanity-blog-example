import cn from 'clsx'
import styles from './index.module.scss'

export default function Section({ className, children }) {
	return <section className={cn(className, styles.section)}>{children}</section>
}
