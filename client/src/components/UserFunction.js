import axios from "axios";

export const register = async (newUser) => {
  await axios
    .post("users/register", {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log("Registered", res.data);
      window.alert("Registered");
    });
};

export const login = async (user) => {
  return await axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
