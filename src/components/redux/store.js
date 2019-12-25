import profileReducer from "./profile-reduser";
import dialogReducer from "./dialogs-reduser";
import sideBarReducer from "./side-bar-reduser copy";

export const store = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Olya" },
        { id: 2, name: "Ulya" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Vasya" }
      ],
      messageData: [
        { id: 1, text: "loloo" },
        { id: 2, text: "Bye" },
        { id: 3, text: "Hi" }
      ],
      newMessageText: " ткест "
    },
    profilePage: {
      posts: [
        {
          id: 1,
          message:
            "Привет, Ульяна! Резюмирую, о чём договорились: Сотрудничаем примерно 2 месяца (может и больше, в том числе и после твоего устройства в офис); в основном вёрстка, погружение в PHP глубокое не нужно, только основные моменты и изучение нюансов разных движков сайтов; загрузка примерно до 10 часов в неделю (может меньше или больше при вёрстке полного сайта с нуля); оплата для начала 200 рублей в час, отслеживание времени в СРМ; время реакции по возможности максимально быстрое. Если задача большая, просьба отписываться в самой задаче, что приступила, нужно примерно столько-то времени.",
          likeCount: 5
        },
        { id: 2, message: "ololo", likeCount: 1 },
        { id: 3, message: "ololo", likeCount: 3 }
      ],
      newPostText: "ololo"
    },
    sideBar: {}
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber();
  }
};

window.store = store;
