import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button";

import { Container, Form } from "../styles/pages/Home/styles";

type InputFormData = {
  username: string;
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const username = sessionStorage.getItem('@CodeLeap:username');
  
    if (username) router.push('/feed');
  }, []);

  const { register, handleSubmit, watch } = useForm<InputFormData>();

  const { username } = watch();

  function handleSignIn({ username }: InputFormData) {
    sessionStorage.setItem('@CodeLeap:username', username);

    router.push('/feed');
  }

  return (
    <>
      <Head>
        <title>Sign Up | CodeLeap Network</title>
      </Head>
      <Container>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <h1>Welcome to CodeLeap network!</h1>

          <label>
            Please enter your username
            <input type="text" placeholder="John doe" {...register('username')} />
          </label>

          <Button type="submit" disabled={!(!!username)}>ENTER</Button>
        </Form>
      </Container>
    </>
  )
}
