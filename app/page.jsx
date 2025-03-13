import { fetchAllPosts } from './api/fetchAllPosts'
import {
	Cover,
	PostGrid,
	PostsClient,
	Section,
	SocialNetworks,
	Subscribe,
	Title,
} from './components'
import { LOAD_MORE_STEP } from './constants/constants'

export default async function Home() {
	const { posts: initialPosts, total } = await fetchAllPosts(0, LOAD_MORE_STEP)

	return (
		<>
			<main>
				<Section>
					<Cover title='Elena <br /> Litvinova'></Cover>
					<SocialNetworks />
					<Subscribe />
				</Section>
				<Section>
					<Title>New Posts</Title>
					<PostGrid>
						<PostsClient initialPosts={initialPosts} total={total} />
					</PostGrid>
				</Section>
			</main>
			<footer></footer>
		</>
	)
}
