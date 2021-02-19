import axios from "axios";

const API_URL = "http://localhost:3000/";

const register = (name, username, email, phoneNumber, password) => {
  return axios.post(API_URL + "signup", {
    name,
    username,
    email,
    phoneNumber,
    password,
  });
  // .then((data) => {
  // console.log(data);
  // if (data.token) {
  //   console.log(data);
  //   // const { user, token } = data;
  // } else {
  //   alert(data);
  // }
  // });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
