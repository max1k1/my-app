import { actions } from '../../../redux/profile-reducer.ts';
import { AppStateType } from '../../../redux/store.ts';
import { PhotosType, PostType } from '../../../types/types.ts';
import MyPosts from './MyPosts.tsx';
import { connect } from 'react-redux';

export type MapPropsType = {
  postsDate: Array<PostType>;
};
export type DispatchPropsType = {
  addPost: (newPostText: string, img: PhotosType) => void;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    postsDate: state.profilePage.postsDate,
  };
};
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
  mapStateToProps,
  { addPost: actions.addPost },
)(MyPosts);

export default MyPostsContainer;
