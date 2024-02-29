export function getName (type) {
	if (type === 'training') {
		return 'Capacitación'
	}
	if (type === 'certificate') {
		return 'Certificación'
	}
	if (type === 'training-certificate') {
		return 'Capacitación y certificación'
	}
}
