import axios from "axios";
import { BaseUrl1 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const Get_Pref = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.pref, {
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

export const Get_Matched_Pref = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.matched, {
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

export const Get_Edit_Prof = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.edit, {
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
export const Get_F_and_Q = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.f_q, {
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
export const Get_Blog = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.blog, {
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
