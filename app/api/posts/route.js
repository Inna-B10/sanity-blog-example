import { NextResponse } from 'next/server'
import { fetchAllPosts } from '../fetchAllPosts'

export async function GET(request) {
	const { searchParams } = new URL(request.url)

	const start = parseInt(searchParams.get('start')) || 0
	const end = parseInt(searchParams.get('end')) || 4

	const { posts, total } = await fetchAllPosts(start, end)

	return NextResponse.json({ posts, total })
}
