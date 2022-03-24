import { Container, Form } from "../styles/pages/Home/styles";

export default function Home() {
  return (
    <Container>
      <Form>
        <h1>Welcome to CodeLeap network!</h1>

        <label>
          Please enter your username
          <input type="text" placeholder="John doe" />
        </label>

        <button type="submit">ENTER</button>
      </Form>
    </Container>
  )
}
