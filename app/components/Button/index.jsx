import cn from 'clsx'
import styles from './index.module.scss'

export default function Button({ className, children, onClick, disabled }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cn(className, styles.button)}>
			{children}
		</button>
	)
}
