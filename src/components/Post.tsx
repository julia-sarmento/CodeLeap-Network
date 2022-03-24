import { Header } from "./Header";

import { Container, Info } from "../styles/components/Post/styles";

export function Post() {
  return (
    <Container>
      <Header hasOptions>
        My First Post at CodeLeap Network!
      </Header>
      <section>
        <Info>
          <strong>@Victor</strong>
          <span>25 minutes ago</span>
        </Info>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </section>
    </Container>
  )
}