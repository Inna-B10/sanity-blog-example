import { urlFor } from '@/sanity/lib/image'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '..'
import styles from './index.module.scss'

export default function Post({ className, image, title, description, slug }) {
	return (
		<Link
			href={`/post/${encodeURIComponent(slug.current)}`}
			className={cn(className, styles.post, styles.postLink)}>
			<Title size='small' className={styles.postTitle}>
				{title}
			</Title>
			<div className={styles.postContent}>
				<div>
					<Image
						src={urlFor(image).url()}
						alt={image.caption}
						width={100}
						height={100}
					/>
				</div>
				<p className={styles.postDescription}>{description}</p>
			</div>
		</Link>
	)
}
