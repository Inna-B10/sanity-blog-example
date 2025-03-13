'use client'
import { LOAD_MORE_STEP } from '@/app/constants/constants'
import { useState } from 'react'
import { Button, Post } from '..'

export default function PostsClient({ initialPosts, total }) {
	const [posts, setPosts] = useState(initialPosts)
	const [loading, setLoading] = useState(false)

	const handleLoadMore = async () => {
		setLoading(true)
		try {
			const res = await fetch(
				`/api/posts?start=${posts.length}&end=${posts.length + LOAD_MORE_STEP}`
			)
			const data = await res.json()

			setPosts(prev => [...prev, ...data.posts])
		} catch (error) {
			console.error('Ошибка загрузки постов:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{posts.map(post => (
				<Post
					key={post.slug.current}
					icon={post.icon}
					description={post.description}
					slug={post.slug}
					title={post.title}
				/>
			))}
			{posts.length < total && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						onClick={() => {
							handleLoadMore()
						}}
						disabled={loading}>
						{loading ? 'Loading...' : 'Load More'}
					</Button>
				</div>
			)}
		</>
	)
}
