import IRecoveryPass from "../../model/interfaces/IRecoveryPass";
import DataServiceAPI from "../DataServiceAPI";


export default class UserService {

public static async recoveryPass(email: string): Promise<boolean> {

    const credentials: IRecoveryPass = {
      email: email,
    };

    try {
      const response = await DataServiceAPI.post('http://localhost:3000/auth/recovery', credentials);

      if (response.ok) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public static async updatePassword(email: string, newPassword: string): Promise<boolean> {

    const requestBody = {
      email: email,
      newPassword: newPassword
    };

    try {
      const response = await DataServiceAPI.post('http://localhost:3000/auth/updatePassword', requestBody);

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}

