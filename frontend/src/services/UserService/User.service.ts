import API from "../API";
import URLs from "../URLs";

export default abstract class User {
	public static async All() {
		return await API.Get<object>(URLs.UserRoutes.All);
	}
}