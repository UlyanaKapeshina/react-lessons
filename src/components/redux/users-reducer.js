import { usersAPI } from "../api/api";

const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL = "SET_TOTAL";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING_USERS = "TOGGLE_IS_LOADING_USERS";
const TOGGLE_IS_LOADING_FOLLOW = "TOGGLE_IS_LOADING_FOLLOW";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 30,
  currentPage: 1,
  isLoadingUsers: false,
  isLoadingFollow: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case USER_UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_TOTAL:
      return {
        ...state,
        totalUsersCount: action.total
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_LOADING_USERS:
      return {
        ...state,
        isLoadingUsers: action.isLoadingUsers
      };

    case TOGGLE_IS_LOADING_FOLLOW:
      return {
        ...state,
        isLoadingFollow: action.isLoadingFollow
          ? [...state.isLoadingFollow, action.id]
          : state.isLoadingFollow.filter(id => id !== action.id)
      };

    default:
      return state;
  }
};

export const follow = id => ({
  type: USER_FOLLOW,
  id: id
});
export const unfollow = id => ({
  type: USER_UNFOLLOW,
  id: id
});
export const setUsers = users => ({
  type: SET_USERS,
  users: users
});
export const setTotal = total => ({
  type: SET_TOTAL,
  total: total
});
export const setCurrentPage = number => ({
  type: SET_CURRENT_PAGE,
  currentPage: number
});
export const toggleIsLoadingUsers = isLoadingUsers => ({
  type: TOGGLE_IS_LOADING_USERS,
  isLoadingUsers: isLoadingUsers
});
export const toggleIsLoadingFollow = (isLoadingFollow, id) => ({
  type: TOGGLE_IS_LOADING_FOLLOW,
  isLoadingFollow: isLoadingFollow,
  id: id
});

export const getUsersData = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsLoadingUsers(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsLoadingUsers(false));

      dispatch(setUsers(data.items));
      dispatch(setTotal(data.totalCount));
    });
  };
};
export const followUser = id => {
  return dispatch => {
    dispatch(toggleIsLoadingFollow(true, id));
    usersAPI.follow(id).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(follow(id));
        dispatch(toggleIsLoadingFollow(false, id));
      }
    });
  };
};
export const unfollowUser = id => {
  return dispatch => {
    dispatch(toggleIsLoadingFollow(true, id));
    usersAPI.unfollow(id).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(id));
        dispatch(toggleIsLoadingFollow(false, id));
      }
    });
  };
};

export default userReducer;
