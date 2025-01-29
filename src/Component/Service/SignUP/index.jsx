import { BaseUrl2 } from "../../Config";
import axios from "axios";
import { ApiUrl } from "../../Config/APIurl";

export const SignUP = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl2 + ApiUrl.signUp, req, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
