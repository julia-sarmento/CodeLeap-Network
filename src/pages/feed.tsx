import { Header } from "../components/Header";

import { Container, Content, Form } from "../styles/pages/Feed/styles";

export default function Feed() {
  return (
    <Container>
      <Content>
        <Header />
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
        </main>
      </Content>
    </Container>
  )
}