import {
	BuyMeCoffee,
	Cover,
	Section,
	SocialNetworks,
	Title,
} from './components'

export default function Home() {
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
				</Section>
			</main>
			<footer></footer>
		</>
	)
}
