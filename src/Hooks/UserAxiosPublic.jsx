import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const UserAxiosPublic = () => {
  return axiosPublic;
};

export default UserAxiosPublic;
