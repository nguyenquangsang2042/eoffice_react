import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import ApiConfig from './AppConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

class APIService {
  private baseURL: string;
  private headers: AxiosRequestConfig['headers'];
  constructor() {
    this.baseURL = ApiConfig.getBaseUrl();
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Function to get the cookie from async storage
  private getCookie(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('set-cookie')
        .then(cookie => resolve(cookie))
        .catch(error => {
          console.error('Error getting cookie from async storage:', error);
          reject(error);
        });
    });
  }

  // Function to call the API GET method
  get<T>(endpoint: string, params: object = {}): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        const cookie = await this.getCookie();
        console.log(decodeURI(`url :${this.baseURL}${endpoint}`));

        if (cookie) {
          if (!this.headers) {
            this.headers = {};
          }
          this.headers.Cookie = cookie;
        }

        const response: AxiosResponse<T> = await axios.get(
          `${this.baseURL}${endpoint}`,
          {
            headers: this.headers,
            params,
          },
        );
        console.log(response.data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  // Function to call the API POST method
  post<T>(endpoint: string, data: object = {}): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        const cookie = await this.getCookie();

        if (cookie) {
          if (!this.headers) {
            this.headers = {};
          }
          this.headers.Cookie = cookie;
        }

        const response: AxiosResponse<T> = await axios.post(
          `${this.baseURL}${endpoint}`,
          data,
          {
            headers: this.headers,
          },
        );
        console.log(decodeURI(`url: ${this.baseURL}${endpoint}`));
        console.log(`data: ${data}`);
        console.log(response.data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new APIService();
