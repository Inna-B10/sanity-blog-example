import { defineType } from 'sanity'

export const inlineImage = defineType({
	type: 'object',
	name: 'inlineImage',
	title: 'Inline Image',
	fields: [
		{
			name: 'image',
			type: 'image',
			options: { hotspot: true },
		},
		{
			name: 'alt',
			type: 'string',
		},
	],
	options: {
		isInline: true,
	},
})
