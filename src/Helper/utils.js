import axios from "axios";

async function serviceCallGet(url) {
  let resp = await axios.get(url);
  return resp;
}

export { serviceCallGet };
