import { React, useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ currentPage, onPageChanged, totalItemsCount, pageSize, pagesListSize }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let itemsListsCount = Math.ceil(pagesCount / pagesListSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let [pagesListNumber, setPagesList] = useState(1);
  let leftPagesListNumber = (pagesListNumber - 1) * pagesListSize + 1;
  let rightPagesListNumber = pagesListNumber * pagesListSize;
  return (
    <div className={styles.paginator}>
      {1 < pagesListNumber && <div onClick={() => setPagesList(pagesListNumber - 1)}>back</div>}
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
          })}
      </div>
      {itemsListsCount > pagesListNumber && (
        <div onClick={() => setPagesList(pagesListNumber + 1)}>next</div>
      )}
    </div>
  );
};

export default Paginator;
