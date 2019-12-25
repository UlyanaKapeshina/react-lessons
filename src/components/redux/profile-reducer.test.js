import profileReducer, { addPost } from "./profile-reducer";

it("new post should be added", () => {
  let action = addPost("ololo");
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
    ]
  };
  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(4);
  expect(newState.posts[4].message).toBe("ololo");
});
