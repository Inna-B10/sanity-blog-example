import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export async function fetchAllPosts(start, end) {
	const params = { start, end }

	const { posts, total } = await client.fetch(POSTS_QUERY, params)

	return { posts, total }
}
