class UnprocessableEntityError extends Error {
	status: number;

	constructor(message: string) {
		super(message);
		this.name = "UnprocessableEntityError";
		this.status = 422;
	}
}

export { UnprocessableEntityError };
