import { AxiosResponse } from "axios";
import { $api } from "../lib/api";
import { IExample } from "../lib/types";

export default class ExampleService {
  static async fetchMyTasks(): Promise<AxiosResponse<IExample[]>> {
    return await $api.get<IExample[]>("/examples");
  }
}
