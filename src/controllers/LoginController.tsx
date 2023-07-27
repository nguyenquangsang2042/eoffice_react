import LoginResponse from '../models/LoginResponse';
import { performSOAPAuthentication } from '../utils/SoapUtils'
export const loginUser = async (username: string, password: string) => {
  return new Promise<LoginResponse>(async (resolve, reject) => {
    if (await performSOAPAuthentication(username, password)) {
      resolve({ success: true, message: 'Login successful!' });
    } else {
      reject({ success: false, message: 'Invalid credentials. Please try again.' });
    }
  });
};
