import RegExpValidation from "./validations.enum";

/**
 * Validates the given email address.
 *
 * @param {string} email - The email address to validate.
 * @return {boolean} Returns true if the email address is valid, false otherwise.
 */
export function emailValidation(email: string): boolean {
	return RegExpValidation.Email.test(email);
}

/**
 * Validates a password based on the following criteria:
 * - Minimum 8 characters,
 * - at least 1 uppercase letter,
 * - 1 lowercase letter,
 * - 1 number and one special character
 *
 * @param {string} password - The password to be validated.
 * @return {boolean} Returns true if the password is valid, otherwise false.
 */
export function passwordValidation(password: string): boolean {
	return RegExpValidation.Password.test(password);
}