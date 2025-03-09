import { set, useFormValue } from 'sanity'

export default function CaptionInput(props) {
	const { value, onChange, renderDefault, path } = props
	const parent = useFormValue(path.slice(0, -1)) // Получаем родительский объект (image)

	// Если нет изображения, сбрасываем caption
	if (!parent?.asset && value) {
		onChange(set('')) // Очищаем caption
	}

	return renderDefault(props)
}
