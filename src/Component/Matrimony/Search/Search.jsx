import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Get_Search } from "../../Service/Get_pref";
import HeaderDash from "../Dash_Board/HeaderDash";

const Search = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      age: "",
      location: "",
      height: "",
      address: "",
      income: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await Get_Search(values);
        if (response?.status === 200) {                   
          console.log("Fetched Data:", response?.data?.data);
          navigate("/result", { state: { data: response?.data || [] } });
        } else {
          alert("Something Went Wrong");
        }

        setData(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });

  return (
    <div className=" h-screen bg-orange-400">
      <HeaderDash />
      <div className="w-[55%] mt-[5%] border rounded-md border-black shadow-lg mx-auto bg-white">
        <div className="m-5">
          <div className="text-xl font-semibold text-center">
            Search Profiles
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-3 mt-10"
          >
            <div className="flex justify-start gap-x-7">
              <label className="text-lg font-semibold w-[20%]">Age:</label>
              <input
                className="w-[70%] outline-none border-2 pl-3"
                type="number"
                name="age"
                placeholder="Enter age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-start gap-x-7">
              <label className="text-lg font-semibold w-[20%]">Location:</label>
              <input
                className="w-[70%] outline-none border-2 pl-3"
                type="text"
                name="location"
                placeholder="Enter age"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-start gap-x-7">
              <label className="text-lg font-semibold w-[20%]">Height:</label>
              <input
                className="w-[70%] outline-none border-2 pl-3"
                type="number"
                name="height"
                placeholder="Enter age"
                value={formik.values.height}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-start gap-x-7">
              <label className="text-lg font-semibold w-[20%]">Income:</label>
              <input
                className="w-[70%] outline-none border-2 pl-3"
                type="number"
                name="income"
                placeholder="Enter age"
                value={formik.values.income}
                onChange={formik.handleChange}
              />
            </div>

            <button
              type="submit"
              className="hover:bg-orange-500 rounded-md mt-5 bg-orange-400 border p-1 w-[20%] font-bold mx-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
