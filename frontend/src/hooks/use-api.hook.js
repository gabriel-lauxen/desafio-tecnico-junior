import { useCallback } from "react";
import { useAxios } from "./axios.hook";

export const useApi = () => {
  const { axiosInstance } = useAxios("http://localhost:5000");

  const getMessages = useCallback(async () => {
    const response = await axiosInstance.get(`/messages`);
    return response.data;
  }, [axiosInstance]);

  const sendMessage = useCallback(
    async (request) => {
      const response = await axiosInstance.post(`/messages`, request);
      return response.data;
    },
    [axiosInstance]
  );

  return {
    getMessages,
    sendMessage,
  };
};
