const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
  dialogsData: [
    { id: 1, name: "Olya" },
    { id: 2, name: "Ulya" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Vasya" }
  ],

  messageData: [
    {
      id: 1,
      text:
        "Aliquam atque hic a dolorum praesentium, recusandae similique corporis aspernatur mollitia, rem saepe, obcaecati nostrum laboriosam non unde labore quasi itaque fugiat."
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque hic a dolorum praesentium, recusandae similique corporis aspernatur mollitia, rem saepe, obcaecati nostrum laboriosam non unde labore quasi itaque fugiat."
    }
  ]
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 10,
        text: action.data
      };

      return {
        ...state,
        messageData: [...state.messageData, newMessage]
      };

    default:
      return state;
  }
};
export const addMessage = data => ({ type: ADD_MESSAGE, data: data });

export default dialogReducer;
