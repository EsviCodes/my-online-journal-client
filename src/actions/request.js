import request from "superagent";

export const authRequest = () => {
  const token = localStorage.getItem("jwt");
  request.set("Authorization", `Bearer ${token}`);
};

// this one works
export const apiUrl = path => `http://localhost:4000${path}`;
