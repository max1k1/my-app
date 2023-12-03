import { actions } from '../../../redux/profile-reducer.ts';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(actions.addPost(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
