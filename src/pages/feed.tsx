import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Post } from "../components/Post";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { State } from "../redux/rootReducer";
import { Post as PostTypes } from "../actions/posts.types";
import { createPost, loadPosts } from "../actions/posts";

import { api } from "../service/api";

import { Container, Content, Form, PostList } from "../styles/pages/Feed/styles";

type InputFormData = {
  title: string;
  content: string;
}

export default function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector<State, PostTypes[]>(({ posts }) => posts.posts);
  const { register, handleSubmit, watch, reset } = useForm<InputFormData>();

  const { title, content } = watch();

  useEffect(() => {
    api.get('/')
      .then(res => dispatch(loadPosts(res.data.results)));
  }, [dispatch]);

  const handleAddPost = useCallback(async ({ content, title }: InputFormData) => {
    try {
      const username = sessionStorage.getItem('@CodeLeap:username');

      if (!username) {
        toast.error('You must be logged in to create a post.');
        return;
      }

      const data = {
        username,
        content,
        title,
      }

      const response = await api.post('/', data);

      dispatch(createPost(response.data));
    } catch {
      toast.error('Internal Error. Try again later.');
    }
    reset();
  }, [dispatch, reset]);

  return (
    <Container>
      <Content>
        <Header />
        <main>
          <Form onSubmit={handleSubmit(handleAddPost)}>
            <h2>What&apos;s on your mind?</h2>

            <label>
              Title
              <input type="text" placeholder="Hello World" {...register('title')} />
            </label>

            <label>
              Content
              <textarea placeholder="Content here" {...register('content')} />
            </label>

            <Button
              type="submit"
              disabled={!(title && content)}
            >
              CREATE
            </Button>
          </Form>

          <PostList>
            {posts.map(post =>
              <Post key={post.id} post={post} isOwner={sessionStorage.getItem('@CodeLeap:username') === post.username} />
            )}
          </PostList>
        </main>
      </Content>
    </Container>
  )
}