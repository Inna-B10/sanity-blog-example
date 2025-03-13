import { client } from '@/sanity/lib/client'
import styles from './styles.module.scss'

import { fetchPostBySlug } from '@/app/api/fetchPostBySlug'
import { Article, Content, Title } from '@/app/components'
import { revalidate } from '@/app/constants/constants'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

revalidate

export async function generateStaticParams() {
	const query = `*[_type=="posts"]{slug{current}}`

	const posts = await client.fetch(query)

	return posts.map(post => ({
		slug: post.slug.current,
	}))
}

export async function generateMetadata({ params }) {
	const { slug } = await params

	const post = await fetchPostBySlug(slug)

	if (!post) {
		return {
			title: 'Not found',
		}
	}
	return {
		title: post.meta_title || post.slug,
		description: post.description || '',
	}
}

export default async function PostPage({ params }) {
	const { slug } = await params

	const post = await fetchPostBySlug(slug)

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
