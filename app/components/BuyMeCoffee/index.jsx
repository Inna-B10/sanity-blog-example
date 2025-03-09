import cn from 'clsx'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function BuyMeCoffee({ className }) {
	return (
		<ScreenEgg type='right'>
			<div className={cn(className, styles.buyCoffee)}>
				<a
					href='https://buy.stripe.com'
					target='_blank'
					rel='noreferrer'
					className={styles.buyCoffeeButton}>
					Buy me a coffee...
				</a>
			</div>
		</ScreenEgg>
	)
}
