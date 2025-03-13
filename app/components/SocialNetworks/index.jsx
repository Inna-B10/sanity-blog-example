import { socialNetworks } from '@/app/constants/constants'
import cn from 'clsx'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function SocialNetworks({ className, children }) {
	return (
		<ScreenEgg>
			<ul className={cn(className, styles.list)}>
				{socialNetworks.map(item => (
					<li key={item.id} className={styles.listItem}>
						<a href={item.href} target='_blank' className={styles.listLink}>
							<item.icon size={50} color='black' />
						</a>
					</li>
				))}
			</ul>
		</ScreenEgg>
	)
}
