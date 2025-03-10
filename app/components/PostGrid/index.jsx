import cn from 'clsx'
import styles from './index.module.scss'

export default function PostGrid({ className, children }) {
	return <div className={cn(className, styles.postGrid)}>{children}</div>
}
