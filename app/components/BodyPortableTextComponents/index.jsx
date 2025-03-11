import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const BodyPortableTextComponents = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}

			const imageUrl = urlFor(value).width(800).url()

			return (
				<div style={{ margin: '1rem 0' }}>
					<Image
						src={imageUrl}
						alt={value.alt || ' '}
						width={800}
						height={600}
						style={{
							borderRadius: '0.5rem',
							objectFit: 'cover',
						}}
					/>
				</div>
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
