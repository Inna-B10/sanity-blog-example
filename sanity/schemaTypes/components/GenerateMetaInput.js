import { Box, Button, Flex } from '@sanity/ui'
import { PatchEvent, set, unset, useFormValue } from 'sanity'

export default function GenerateMetaInput(props) {
	// console.log(props)
	const { onChange, renderDefault } = props

	// Достаём весь документ (корень формы)
	const doc = useFormValue([])

	// Достаём контекст из props
	const context = props.schemaType?.options?.context || {}

	const generateValue = () => {
		const dataset = context.dataset || 'development'
		const newValue =
			dataset === 'production'
				? `${doc?.title || ''} | ${doc?._type}`
				: doc?.title || ''
		onChange(PatchEvent.from(newValue ? set(newValue) : unset()))
	}

	return (
		<Flex gap={2} align='flex-end'>
			{/* Поле ввода */}
			<Box flex={1}>{renderDefault(props)}</Box>

			{/* Кнопка генерации */}
			<Button
				text='Generate'
				tone='default' // Серый цвет
				mode='ghost' // Без заливки (как у slug)
				onClick={generateValue}
			/>
		</Flex>
	)
}
