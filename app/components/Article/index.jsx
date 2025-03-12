import cn from 'clsx'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './index.module.scss'

export default function Article({ className, children, backUrl }) {
	return (
		<article className={cn(className, styles.article)}>
			<Link href={backUrl} className={styles.articleBack}>
				<AiOutlineArrowLeft />
			</Link>
			<div className={styles.articleContent}>{children}</div>
		</article>
	)
}
