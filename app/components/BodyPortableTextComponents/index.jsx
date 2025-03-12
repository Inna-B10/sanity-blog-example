import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const BodyPortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}

			const imageUrl = urlFor(value).auto('format').fit('max').url()

			return (
				<div style={{ margin: '1rem 0' }}>
					<Image
						src={imageUrl}
						alt={value.alt || ''}
						width={800}
						height={600}
						quality={85}
						priority={false}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							display: 'inline',
							// maxWidth: '300px',
							// height: 'auto',
						}}
					/>
				</div>
			)
		},
		inlineImage: ({ value }) => {
			return (
				<span
					style={{
						float: 'right',
						display: 'inline-block',
						maxWidth: '40%',
						width: '100%',
					}}>
					<img
						src={urlFor(value.image.asset).width(500).url()}
						alt={value.alt || ''}
						style={{
							display: 'block',
							width: '100%',
							height: 'auto',
						}}
					/>
				</span>
			)
		},
	},
	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined

			return (
				<a
					href={value.href}
					rel={rel}
					style={{
						color: '#3b82f6', // Tailwind text-blue-500
						textDecoration: 'underline',
					}}>
					{children}
				</a>
			)
		},
	},
}

export default BodyPortableTextComponents
