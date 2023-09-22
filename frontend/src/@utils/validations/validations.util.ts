/**
 * Validates the given email address.
 *
 * @param {string} email - The email address to validate.
 * @return {boolean} Returns true if the email address is valid, false otherwise.
 */
export default function emailValidation(email: string) {
	const regex = /^[A-za-z0-9][A-Za-z0-9._+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g;
	return regex.test(email);
}
