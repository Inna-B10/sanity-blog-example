import { set, useFormValue } from 'sanity'

export default function AltInput(props) {
	const { value, onChange, renderDefault, path } = props
	const parent = useFormValue(path.slice(0, -1)) // get parent object (image)

	// if there is no image, reset text
	if (!parent?.asset && value) {
		onChange(set(''))
	}

	return renderDefault(props)
}
