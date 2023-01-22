import axios from "axios";

const API_URL = "http://localhost:4000/api/students/";

// Signup a student
const signup = async (studentData) => {
  const response = await axios.post(API_URL + "signup", studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

// Login a student
const login = async (studentData) => {
  const response = await axios.post(API_URL + "login", studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  signup,
  login,
};

export default authService;