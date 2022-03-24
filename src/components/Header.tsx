import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Container } from "../styles/components/Header/styles";

type HeaderProps = {
  hasOptions?: boolean;
  children: string;
}

export function Header({ children, hasOptions = false }: HeaderProps) {
  return (
    <Container>
      <h1>{children}</h1>

      {hasOptions && (
        <div>
          <button type="button">
            <FiTrash2 />
          </button>
          <button type="button">
            <FiEdit />
          </button>
        </div>
      )}
    </Container>
  )
}