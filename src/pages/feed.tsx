import { Header } from "../components/Header";
import { Post } from "../components/Post";

import { Container, Content, Form, PostList } from "../styles/pages/Feed/styles";

export default function Feed() {
  return (
    <Container>
      <Content>
        <Header>
          CodeLeap Network
        </Header>
        <main>
          <Form>
            <h2>What&apos;s on your mind?</h2>

            <label>
              Title
              <input type="text" placeholder="Hello World" />
            </label>

            <label>
              Content
              <textarea placeholder="Content here" />
            </label>

            <button type="submit">Create</button>
          </Form>

          <PostList>
            <Post />
            <Post />
            <Post />
            <Post />
          </PostList>
        </main>
      </Content>
    </Container>
  )
}