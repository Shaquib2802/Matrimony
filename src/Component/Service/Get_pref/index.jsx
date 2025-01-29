import axios from "axios";
import { BaseUrl2 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const Get_Pref = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl2 + ApiUrl.pref,{
      headers: {
        "Content-Type": "application/json",
        /*Authorization: "Token 08c47b9e031405a269957a3411278495a5f66eb8"*/
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
