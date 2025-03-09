import cn from 'clsx'
import styles from './index.module.scss'

export default function Title({ className, children }) {
	return <h2 className={cn(className, styles.title)}>{children}</h2>
}
