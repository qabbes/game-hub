import apiClient from "./api-client";

interface Game {
  name: string;
  slug: string;
  platforms: string[];
  releaseDate: Date;
  image: string;
  ratings: [{}];
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<Game>() {
    const controller = new AbortController();
    const request = apiClient.get<Game[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
