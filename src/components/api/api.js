import * as Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d25f4c9d-ed0a-4eec-99d0-f83a7ce92713"
  }
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(id) {
    return axiosInstance.post(`follow/${id}`);
  },
  unfollow(id) {
    return axiosInstance.delete(`follow/${id}`);
  }
};
export const authAPI = {
  getAuth() {
    return axiosInstance.get(`auth/me`);
  },
  login(formData) {
    return axiosInstance
      .post(`auth/login`, {
        email: formData.login,
        password: formData.password,
        rememberMe: formData.remember
      })
      .then(response => {
        console.log(response);
        return response;
      });
  },
  logout(formData) {
    // debugger;
    return axiosInstance.delete(`auth/login`);
  }
};
export const profileAPI = {
  getProfile(userID) {
    return axiosInstance
      .get(`profile/${userID}`)
      .then(response => response.data);
  },
  getStatus(userID) {
    return axiosInstance.get(`profile/status/${userID}`);
  },
  setStatus(a) {
    return axiosInstance
      .put(`profile/status`, { status: a }, {})
      .then(response => {
        return response;
      });
  }
};
