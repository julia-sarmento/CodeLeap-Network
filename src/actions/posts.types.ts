export enum PostActionTypes {
  loadPosts = 'LOAD_POSTS',
  createPosts = 'CREATE_POSTS',
  updatePosts = 'UPDATE_POSTS',
  deletePosts = 'DELETE_POSTS',
}

export type Post = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type PostState = {
  posts: Post[];
};