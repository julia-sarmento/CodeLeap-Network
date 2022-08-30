import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Post } from "../components/Post";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { State } from "../redux/rootReducer";
import { Post as PostTypes } from "../actions/posts.types";
import { createPost, loadPosts } from "../actions/posts";

import { api } from "../service/api";

import { Container, Content, Form, PostList } from "../styles/pages/Feed/styles";
import Head from "next/head";
import { Pagination } from "../components/Pagination";
import { useRouter } from "next/router";

type InputFormData = {
  title: string;
  content: string;
}

export default function Feed() {
  const router = useRouter();

  useEffect(() => {
    const username = sessionStorage.getItem('@CodeLeap:username');
  
    if (!username) router.push('/');
  }, []);
  
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  
  const dispatch = useDispatch();

  const posts = useSelector<State, PostTypes[]>(({ posts }) => posts.posts);
  const { register, handleSubmit, watch, reset } = useForm<InputFormData>();

  const { title, content } = watch();

  useEffect(() => {
    api.get(`/?offset=${10 * page}`)
      .then(res => {
        dispatch(loadPosts(res.data.results));
        setTotalResults(res.data.count);
      });
  }, [dispatch, page]);

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
    <>
      <Head>
        <title>Feed | CodeLeap Network</title>
      </Head>
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
            {posts.length > 0 && (
              <Pagination
                onPageChange={setPage}
                currentPage={page + 1}
                totalCountOfRegisters={totalResults}
              />
            )}
          </main>
        </Content>
      </Container>
    </>
  )
}