import cn from 'clsx'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function Subscribe({ className }) {
	return (
		<ScreenEgg type='right'>
			<div className={cn(className, styles.subscribe)}>
				<a className={styles.subscribeButton}>Subscribe...</a>
			</div>
		</ScreenEgg>
	)
}
