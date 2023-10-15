export default interface TransactionResponse {
	ok: boolean;
	message: string;
	data: any;
	token?: string;
}