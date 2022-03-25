import { combineReducers } from 'redux';

import { posts } from './reducers/posts';

import { PostState } from '../actions/posts.types';

export type State = {
  posts: PostState;
};

export default combineReducers({
  posts,
});