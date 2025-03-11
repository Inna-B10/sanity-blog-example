import { client } from '@/sanity/lib/client'
import styles from './styles.module.scss'

import { Article, Content, Title } from '@/app/components'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
	return {
		title: params.slug,
	}
}

export async function generateStaticParams() {
	const query = `*[_type=="posts"]{slug{current}}`

	const posts = await client.fetch(query)

	return posts.map(post => ({
		slug: post.slug.current,
	}))
}

export default async function PostPage({ params }) {
	const { slug } = params
	const query = `*[_type=="posts" && slug.current =='${slug}'][0]`

	const post = await client.fetch(query)

	if (!post) {
		notFound()
	}

	const date = format(new Date(post.publishedDate), 'dd MMM yyyy')

	return (
		<Article backUrl='/' className={styles.post}>
			<Title className={styles.postTitle}>{post.title}</Title>
			<p className={styles.postDate}>{date}</p>
			<Content body={post.body} />
		</Article>
	)
}
