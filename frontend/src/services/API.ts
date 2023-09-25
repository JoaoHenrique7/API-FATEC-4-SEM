export default abstract class API {

	/**
	 * Sends a POST request to the specified URL with an optional request body.
	 *
	 * @param {string} url - The URL to send the request to.
	 * @param {BodyInit | null} body - The request body, if any.
	 * @return {Promise<T>} A promise that resolves to the response data.
	 */
	public static async Post<T>(url: string, body?: BodyInit | null) {
		const response: Promise<T> = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: body
		})
			.then((response: Response) => response.json())
			.catch(() => {
				return {
					statusCode: "503",
					timestamp: new Date().toISOString(),
					path: url.slice(21)
				};
			});
		
		return response;
	}

	/**
	 * Sends an HTTP GET request to the specified URL and returns a Promise that resolves to the response data.
	 *
	 * @param {string} url - The URL to send the GET request to.
	 * @return {Promise<T>} A Promise that resolves to the response data.
	 */
	public static async Get<T>(url: string) {
		const response: Promise<T> = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response: Response) => response.json())
			.catch(() => {
				return {
					statusCode: "503",
					timestamp: new Date().toISOString(),
					path: url.slice(21)
				};
			});
		
		return response;
	}

	/**
	 * Deletes a resource from the specified URL.
	 *
	 * @param {string} url - The URL of the resource to delete.
	 * @return {Promise<T>} - A Promise that resolves to the deleted resource.
	 */
	public static async Delete<T>(url: string) {
		const response: Promise<T> = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response: Response) => response.json())
			.catch(() => {
				return {
					statusCode: "503",
					timestamp: new Date().toISOString(),
					path: url.slice(21)
				};
			});
		
		return response;
	}

	/**
	 * Sends a PATCH request to the specified URL with an optional request body.
	 *
	 * @param {string} url - The URL to send the PATCH request to.
	 * @param {BodyInit | null} body - (Optional) The body of the PATCH request.
	 * @returns {Promise<T>} - A Promise that resolves to the parsed JSON response.
	 */
	public static async Patch<T>(url: string, body?: BodyInit | null) {
		const response: Promise<T> = await fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: body
		})
			.then((response: Response) => response.json())
			.catch(() => {
				return {
					statusCode: "503",
					timestamp: new Date().toISOString(),
					path: url.slice(21)
				};
			});
		
		return response;
	}
}