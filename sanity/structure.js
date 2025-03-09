import { BookIcon } from '@sanity/icons'

export const structure = S =>
	S.list()
		.title('Content')
		.items([
			S.documentTypeListItem('posts').title('Manage posts').icon(BookIcon),
		])
