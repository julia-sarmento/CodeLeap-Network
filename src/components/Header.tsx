import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { Container } from "../styles/components/Header/styles";

export function Header() {
  const router = useRouter();

  function handleSignOut() {
    sessionStorage.removeItem('@CodeLeap:username');
    router.push('/');
  }

  return (
    <Container>
      <h1>CodeLeap Network</h1>

      <button onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  )
}