import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import asyncStorage from "@react-native-async-storage/async-storage";
const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  });
}

export const baseURL = getBaseURL();
export class marketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing: boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(async (config) => {
      const useData = await asyncStorage.getItem("marketplace-auth")
      if (useData) {
        const { state: { token } } = JSON.parse(useData);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    }, (error) => Promise.reject(error))
  }

}

export const marketPlaceApiCliente = new marketPlaceApiClient().getInstance();