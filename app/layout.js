// import { Geist, Geist_Mono } from 'next/font/google'
import './styles/global.scss'
import './styles/reset.scss'
//
// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// })
//
// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// })

export const metadata = {
	title: 'Mint & Sun',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
