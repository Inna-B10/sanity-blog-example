import './styles/global.scss'
import './styles/reset.scss'

export const metadata = {
	title: 'Example blog',
	description: 'Using Next,js 15 and Sanity',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
