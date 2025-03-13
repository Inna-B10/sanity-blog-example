import cn from 'clsx'
import { PortableText } from 'next-sanity'
import { BodyPortableTextComponents } from '..'
import styles from './index.module.scss'

export default function Content({ className, body }) {
	return (
		<div className={cn(className, styles.content)}>
			<PortableText value={body} components={BodyPortableTextComponents} />
		</div>
	)
}
