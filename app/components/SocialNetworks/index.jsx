import cn from 'clsx'
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiFillYoutube,
} from 'react-icons/ai'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

const socialNetworks = [
	{
		id: 1,
		href: 'https://github.com/liveldi',
		icon: AiFillGithub,
	},
	{
		id: 2,
		href: 'https://youtube.com/webelart',
		icon: AiFillYoutube,
	},
	{
		id: 3,
		href: 'https://twitter.com/webelart',
		icon: AiFillTwitterSquare,
	},
	{
		id: 4,
		href: 'https://www.linkedin.com/in/elena-litvinova-574424216/',
		icon: AiFillLinkedin,
	},
]
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
