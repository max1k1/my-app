// import { usersAPI } from "../api/api";

// const NEXT = "NEXT";
// const BACK = "BACK";
// const SET_PAGES_LIST = "SET_PAGES_LIST";
// const initialState = {
//   pages: [],
//   pagesCount: 10,
//   pageNumber: 1
// };
// const paginatorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case SET_PAGES_LIST:
//     //   state.pageNumber = state.pagesCount-10
//     //   if(state.pageNumber===0){
//     //     state.pageNumber=1;
//     //   }   
//     // {pageNumber?0:1} 
//     //   for (; state.pageNumber <= state.pagesCount; state.pageNumber++) {
//     //     state.pages.push(state.pageNumber)
//     //   }
//     //   return{
//     //     ...state,
//     //     pages: [1,2,3,4,5,6,7,8,9,10]
//     //   }
//     // case NEXT:
//     //   return {
//     //     ...state,
//     //   };
//     // case BACK:
//     //   return {
//     //     ...state
//     //   };
//     default:
//       return state;
//   }
// };
// // export const setPageList = () => ({ type: SET_PAGES_LIST });
// // export const nextPagesList = () => ({ type: NEXT });
// // export const backPagesList = () => ({ type: BACK });

// // export const requestUsers = (pageSize, pageNumber) => {
// //   return async (dispatch) => {
// //     dispatch(toggleIsFatching(true));
// //     const data = await usersAPI.getUsers(pageSize, pageNumber);
// //     dispatch(toggleIsFatching(false));
// //     dispatch(setUsers(data.items));
// //     dispatch(setPage(pageNumber));
// //     dispatch(setTotalUsersCount(data.totalCount));
// //   };
// // };

// export default paginatorReducer;
