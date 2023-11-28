import React, { useState } from 'react';
import styles from './Paginator.module.css';

type PropsType = {
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalItemsCount: number;
  pageSize: number;
  pagesListSize?: number;
};
const Paginator: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalItemsCount,
  pageSize,
  pagesListSize=10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let itemsListsCount = Math.ceil(pagesCount / pagesListSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let [pagesListNumber, setPagesList] = useState(1);
  let leftPagesListNumber = (pagesListNumber - 1) * pagesListSize + 1;
  let rightPagesListNumber = pagesListNumber * pagesListSize;
  return (
    <div className={styles.paginator}>
      {1 < pagesListNumber && <div onClick={() => setPagesList(pagesListNumber - 1)}>Back</div>}
      <div className={styles.pages}>
        {pages
          .filter((p) => p >= leftPagesListNumber && p <= rightPagesListNumber)
          .map((p) => {
            return (
              <span
                key={p}
                className={p === currentPage ? styles.selectedPageNumber : undefined}
                onClick={(e) => {
                  onPageChanged(p);
                }}>
                {p}
              </span>
            );
          })}{' '}
      </div>
      <div
        className={styles.next}
        onClick={() => {
          onPageChanged(pagesListNumber * 10);
          setPagesList(pagesListNumber + 10);
        }}>
        ..{pagesListNumber === 1 ? pagesListNumber * 100 : (pagesListNumber + 10) * 10}
      </div>
      {itemsListsCount > pagesListNumber && (
        <div onClick={() => setPagesList(pagesListNumber + 1)}>Next</div>
      )}
    </div>
  );
};

export default Paginator;
