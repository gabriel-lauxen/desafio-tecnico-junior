import axios from "axios";
import { useMemo } from "react";

export const useAxios = (baseUrl) => {
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const errorMessage =
          error.response?.data?.message || error.message || "Erro desconhecido";
        alert(errorMessage);
        return Promise.reject(error);
      }
    );

    return instance;
  }, [baseUrl]);

  return {
    axiosInstance,
  };
};
