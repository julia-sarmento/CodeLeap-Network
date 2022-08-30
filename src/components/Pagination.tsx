import { Container, PaginationInfo, PaginationItems } from "../styles/components/Pagination/styles";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({ 
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <Container>
      <PaginationInfo>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegisters}</strong>
      </PaginationInfo>
      
      <PaginationItems>
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && (
              <span>...</span>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} key={currentPage} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <span>...</span>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </PaginationItems>
    </Container>
  )
}