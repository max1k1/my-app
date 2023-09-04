import { React } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({ currentPage, onPageChanged, totalUserCount, pageSize}) => {
  let pagesCount = Math.ceil(totalUserCount / pageSize);
  let pageNumber = pagesCount-10
  let pages =[1,2,3,4,5,6,7,8,9,10]
      if(pageNumber===0){
        pageNumber=1;
      }   
    // {pageNumber?0:1} 
    // const nextPageList =(pagesCount)=>{
    //   pagesCount=pagesCount+10;
    // }
      for (; pageNumber <= pagesCount; pageNumber++) {
        pages.push(pageNumber)
      }
  return (
    <div className={styles.paginator}>
      <div>back</div>
      <div className={styles.pages}>
        {pages.map((p) => {
          return (
            <span 
              className={p === currentPage && styles.selectedPageNumber }
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>next</div>
      {/* onClick={nextPageList} */}
    </div>
  );
};

export default Paginator;
