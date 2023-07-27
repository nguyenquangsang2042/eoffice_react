import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import ApiConfig from './ApiConfig';

class APIService {
  private baseURL: string;
  private headers: AxiosRequestConfig['headers'];

  constructor() {
    this.baseURL = ApiConfig.getBaseUrl(); 
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Function to call the API GET method
  async get<T>(endpoint: string, params: object = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(`${this.baseURL}${endpoint}`, {
        headers: this.headers,
        params,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Function to call the API POST method
  async post<T>(endpoint: string, data: object = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(`${this.baseURL}${endpoint}`, data, {
        headers: this.headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new APIService();
