import produce from 'immer';
import { Reducer } from 'redux';

import { PostActionTypes, PostState } from '../../actions/posts.types';

const INITAL_STATE: PostState = {
  posts: [],
};

export const posts: Reducer<PostState> = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PostActionTypes.loadPosts: {
        const { posts } = action.payload;

        draft.posts = posts;

        break;
      }

      case PostActionTypes.createPosts: {
        const { post } = action.payload;

        draft.posts.pop();
        draft.posts.unshift(post);

        break;
      }

      case PostActionTypes.updatePosts: {
        const { post } = action.payload;

        const updatedPosts = draft.posts.map(existent_post => existent_post.id === post.id ? ({
          ...existent_post,
          content: post.content,
          title: post.title,
        }) : existent_post);

        draft.posts = updatedPosts;

        break;
      }

      case PostActionTypes.deletePosts: {
        const { post_id } = action.payload;

        const filteredPosts = draft.posts.filter(post => post.id !== post_id);

        draft.posts = filteredPosts;

        break;
      }

      default:
        return draft;
    }
  });
};