import cn from 'clsx'
import styles from './index.module.scss'

export default function Title({ className, children, size }) {
	if (size === 'small') {
		return (
			<h3 className={cn(className, styles.title, styles.titleSmall)}>
				{children}
			</h3>
		)
	}
	return (
		<h2 className={cn(className, styles.title, styles.titleMedium)}>
			{children}
		</h2>
	)
}
