import cn from 'clsx'
import styles from './index.module.scss'

export default function Cover({ className, title }) {
	return (
		<div className={cn(className, styles.cover)}>
			<h1
				className={styles.coverTitle}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</div>
	)
}
