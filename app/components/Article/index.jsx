import cn from 'clsx'
import styles from './index.module.scss'

export default function Article({ className, children }) {
	return <article className={cn(className, styles.article)}>{children}</article>
}
