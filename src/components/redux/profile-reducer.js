import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
let initialState = {
  posts: [
    {
      id: 1,
      message:
        "Itaque autem, aspernatur voluptate quo ipsum sapiente architecto nostrum tempore id! Eveniet quam vitae nam cumque deserunt voluptate fugit libero doloremque rerum!In ducimus tempora tenetur inventore repudiandae iure eligendi culpa id quo, pariatur repellendus reiciendis fugit maxime ad vero nisi. Voluptates, atque! Consequuntur repellendus, tempora dolor quia inventore incidunt dolorem alias!",
      likeCount: 5
    },
    {
      id: 2,
      message:
        "Esse unde temporibus natus veritatis quo doloribus voluptatibus eius accusamus quia quis? Mollitia molestiae voluptatibus reiciendis ex quo a, omnis dolor doloremque harum dolore tempore. Illo tenetur incidunt quidem rerum!Vitae minima quas ea explicabo autem tempora fugiat animi, eveniet optio quibusdam aperiam, quis alias voluptatibus natus assumenda eius magnam, inventore pariatur id sit in eligendi. Veniam accusamus soluta sint?",
      likeCount: 1
    },
    {
      id: 3,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque hic a dolorum praesentium, recusandae similique corporis aspernatur mollitia, rem saepe, obcaecati nostrum laboriosam non unde labore quasi itaque fugiat.",
      likeCount: 3
    }
  ],
  newPostText: "",
  profile: null,
  status: null,
  isLoading: false
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.data,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...action.profile }
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
export const addPost = data => ({ type: ADD_POST, data });

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status
});
export const toggleIsLoading = isLoading => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading: isLoading
  };
};
export const getProfileData = id => {
  return dispatch => {
    dispatch(toggleIsLoading(true));

    profileAPI.getProfile(id).then(data => dispatch(setUserProfile(data)));
    profileAPI
      .getStatus(id)
      .then(status => dispatch(setUserStatus(status.data)));
    dispatch(toggleIsLoading(false));
  };
};
export const getUserStatus = id => {
  return dispatch => {
    profileAPI
      .getStatus(id)
      .then(status => dispatch(setUserStatus(status.data)));
  };
};
export const changeUserStatus = a => {
  return dispatch => {
    profileAPI.setStatus(a).then(response => {
      if (response.data.resultCode === 0) return dispatch(setUserStatus(a));
    });
  };
};

export default profileReducer;
