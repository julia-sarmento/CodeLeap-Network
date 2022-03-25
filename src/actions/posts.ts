import { Post, PostActionTypes } from './posts.types';

export function loadPosts(posts: Post[]) {
  return {
    type: PostActionTypes.loadPosts,
    payload: {
      posts,
    }
  }
}

export function createPost(post: Post) {
  return {
    type: PostActionTypes.createPosts,
    payload: {
      post,
    }
  }
}

export function updatePost(post: Omit<Post, 'username' | 'created_datetime'>) {
  return {
    type: PostActionTypes.updatePosts,
    payload: {
      post,
    }
  }
}

export function deletePost(post_id: number) {
  return {
    type: PostActionTypes.deletePosts,
    payload: {
      post_id,
    }
  }
}