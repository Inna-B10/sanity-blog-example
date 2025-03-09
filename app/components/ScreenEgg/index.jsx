import cn from 'clsx'
import styles from './index.module.scss'

export default function ScreenEgg({ className, children, type }) {
	return (
		<div
			className={cn(
				className,
				styles.screenEgg,
				type === 'right' ? styles.screenEggRight : styles.screenEggLeft
			)}>
			{children}
		</div>
	)
}
