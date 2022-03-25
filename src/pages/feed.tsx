import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, loadPosts } from "../actions/posts";
import { Post as PostTypes } from "../actions/posts.types";
import { Button } from "../components/Button";

import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { State } from "../redux/rootReducer";
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
    const username = sessionStorage.getItem('@CodeLeap:username');

    if (!username) alert('Você não esta logado!');

    const data = {
      username,
      content,
      title,
    }

    const response = await api.post('/', data);

    dispatch(createPost(response.data));

    reset();
  }, [dispatch, reset]);

  return (
    <Container>
      <Content>
        <Header>
          CodeLeap Network
        </Header>
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