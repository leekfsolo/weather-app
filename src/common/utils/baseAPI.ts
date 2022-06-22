import axios, { AxiosPromise } from "axios";

export const doGet = (url: string, params?: Object): AxiosPromise<any> => {
  return axios({
    url,
    params,
    method: "GET",
  });
};
