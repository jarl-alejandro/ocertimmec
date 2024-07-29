import { BASE_URL } from './config'

function notify(data) {
	let message = `${data.type} - ${data.nameCurso}: \n  ${data.name}`
	let object = {
		body: message,
		icon: `${BASE_URL}/logo/occertimm`,
		badge: `${BASE_URL}/logo/occertimm`,
	}

	if (!("Notification" in window)) {
		alert("This browser does not support system notifications");
	}
	else if (Notification.permission === "granted") {
		if (typeof message === 'string' || message instanceof String) {
			new Notification('Occertimm', object);
		}
		else {
			new Notification('Occertimm', object)
		}
	}
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				new Notification('Occertimm', object)
			}
		});
	}
}

export default notify
