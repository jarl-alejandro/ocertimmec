function parser (payload) {
	let data = {}

	payload.map(item => {
		let type = item.type.toUpperCase() === 'CERTIFICATE' ? 'certificateId' : 'trainingId'
		let typeName = item.type.toUpperCase() === 'CERTIFICATE' ? 'Certificación' : 'Capacitación'
		let category = item[type]

		data[category._id] = {
			category: {
				id: category._id,
				name: `${typeName}: ${category.name}`
			},
			payload: !!data[category._id]
				? [...data[category._id].payload, item]
				: [item]
		}

		return category
	})

	return data
}

export default parser
