const initState = {
  posts: [
    {
      id: "1",
      title: "explicabo et eos deleniti nostrum ab id repellendus",
      body:
        "animi esse sit aut sit nesciunt assumenda eum voluptas quia voluptatibus provident quia necessitatibus ea rerum repudiandae quia voluptatem delectus fugit aut id quia ratione optio eos iusto veniam iure",
    },
    {
      id: "2",
      title: "eos dolorem iste accusantium est eaque quam",
      body:
        "corporis rerum ducimus vel eum accusantium maxime aspernatur a porro possimus iste omnis est in deleniti asperiores fuga aut voluptas sapiente vel dolore minus voluptatem incidunt ex",
    },
    {
      id: "3",
      title: "enim quo cumque",
      body:
        "ut voluptatum aliquid illo tenetur nemo sequi quo facilis ipsum rem optio mollitia quas voluptatem eum voluptas qui unde omnis voluptatem iure quasi maxime voluptas nam",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPosts = state.posts.filter((post) => {
        return action.id !== post.id;
      });
      return {
        ...state,
        posts: newPosts,
      };
  }

  return state;
};

export default rootReducer;
