import { createSelector } from "reselect";

export const getUsers = state => {
  return state.usersPage.users;
};
const getUsersSuper = createSelector(() => {});

export const getPageSize = state => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};
export const getIsLoadingUsers = state => {
  return state.usersPage.isLoadingUsers;
};
export const getIsLoadingFollow = state => {
  return state.usersPage.isLoadingFollow;
};
