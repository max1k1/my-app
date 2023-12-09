import { actions } from '../../../redux/profile-reducer.ts';
import { AppStateType } from '../../../redux/store.ts';
import MyPosts from './MyPosts.tsx';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppStateType) => {
  return {
    postsDate: state.profilePage.postsDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText, img) => {
      dispatch(actions.addPost(newPostText, img));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
