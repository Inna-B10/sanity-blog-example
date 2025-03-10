import { loadPosts } from './api/posts'
import {
	BuyMeCoffee,
	Cover,
	PostGrid,
	PostsClient,
	Section,
	SocialNetworks,
	Title,
} from './components'

const LOAD_MORE_STEP = 4

export default async function Home() {
	const { posts: initialPosts, total } = await loadPosts(0, LOAD_MORE_STEP)

	return (
		<>
			<main>
				<Section>
					<Cover title='Elena <br /> Litvinova'></Cover>
					<SocialNetworks />
					<BuyMeCoffee />
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
