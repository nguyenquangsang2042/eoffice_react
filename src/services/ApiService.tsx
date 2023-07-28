import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import ApiConfig from './ApiConfig';
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
  async getCookie(): Promise<string | null> {
    try {
      const cookie = await AsyncStorage.getItem('set-cookie'); // Replace with your actual cookie key
      return cookie;
    } catch (error) {
      console.error('Error getting cookie from async storage:', error);
      return null;
    }
  }

  // Function to call the API GET method
  async get<T>(endpoint: string, params: object = {}): Promise<T> {
    try {
      const cookie = await this.getCookie();

      if (cookie) {
        if (!this.headers) {
          this.headers = {};
        }
        this.headers['Cookie'] = cookie;
      }

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
      const cookie = await this.getCookie();

      if (cookie) {
        if (!this.headers) {
          this.headers = {};
        }
        this.headers['Cookie'] = cookie;
      }

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