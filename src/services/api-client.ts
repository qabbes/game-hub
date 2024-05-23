import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27e443533d8c449ba356f6fca517fe68",
  },
});
