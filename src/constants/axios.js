import axios from "axios";
import { baseurl } from "./constants";
const instance = axios.create({
  baseURL: baseurl,
});
export default instance;
