import { client } from '@/sanity/lib/client'

export async function loadPosts(start, end) {
	const query = `{
  "posts": *[_type=='posts'] | order(publishedDate desc)[${start}...${end}] {_id, publishedDate,title,slug,description,icon},
  "total": count(*[_type=='posts'])
  }`
	const { posts, total } = await client.fetch(query)
	return { posts, total }
}
