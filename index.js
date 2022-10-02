import axios from "axios";

const getUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    resolve(user);
  });
};

const getPosts = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${postId}`
    );
    resolve(postId);
  });
};

async function getData(userId) {
  try {
    const users = getUsers(userId);
    const posts = getUsers(userId);

    users.posts = posts;
    return users;
  } catch (e) {
    clg(e);
  }
}

export default getData;
