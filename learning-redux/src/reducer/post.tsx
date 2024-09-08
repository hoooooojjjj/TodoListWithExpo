import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostAction = {
  type: "ADD_POST";
  data: Post[];
};

const post = (state: Post[] = [] as Post[], action: PostAction) => {
  switch (action.type) {
    case "ADD_POST": {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
};

export const fetchPost =
  () => async (dispatch: (PostAction: PostAction) => void) => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: "ADD_POST", data: posts.data });
  };

export default post;
