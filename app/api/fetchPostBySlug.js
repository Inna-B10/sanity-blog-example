import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'

export async function fetchPostBySlug(slug) {
	const post = await client.fetch(POST_QUERY, { slug })

	return post
}
