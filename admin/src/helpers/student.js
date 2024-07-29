function parser(payload) {
	const data = {};

	payload.forEach(item => {
		const type = item.type.toUpperCase();
		const typeName = type === 'CERTIFICATE' ? 'Certificación' : 'Capacitación';
		const key = type === 'CERTIFICATE' ? 'certificateId' : 'trainingId';
		const category = item[key];

		if (!!category) {
			if (!data[category?._id]) {
				data[category._id] = {
					category: {
						id: category._id,
						name: `${typeName}: ${category.name}`
					},
					payload: []
				};
			}

			data[category._id].payload.push(item);
		}

	});

	return data;
}

export default parser;
