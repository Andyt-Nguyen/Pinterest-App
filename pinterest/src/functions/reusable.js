export function parsedEmail(email) {
	if(email !== undefined) {
		let parsedEmail = email.split('@')[0];
		return parsedEmail;
	} else {
		return '';
	}
}
