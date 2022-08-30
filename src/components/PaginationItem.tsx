import { Container } from "../styles/components/Pagination/Button/styles";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  number, 
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return <Container disabled>{number}</Container>;
  }

  return <Container onClick={() => onPageChange(number - 1)}>{number}</Container>;
}