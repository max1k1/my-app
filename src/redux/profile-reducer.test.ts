import profileReducer, { actions } from './profile-reducer';
import testImgIcon from '../assets/images/1post.png';
import { PhotosType, PostType } from '../types/types';

const state = {
  postsDate: [
    {
      id: 1,
      text: 'Kharkiv, 369 years of the city that survived under the yellow-blue flag 🇺🇦❤️',
      likeCount: 5,
      img: null as PhotosType | null, // fix it
    },
  ] as Array<PostType>,
  profile: null,
  status: '',
  newPostText: '',
};
it('length of posts should be incremented', () => {
  // 1. test data
  let action = actions.addPost('Ksksksksk', testImgIcon);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsDate.length).toBe(2);
});

it('length of post should be decrement', () => {
  let action = actions.deletePost(2);
  let newState = profileReducer(state, action);
  expect(newState.postsDate.length).toBe(1);
});

it('new post message should be correct', () => {
  let action = actions.addPost('Ksksksksk', testImgIcon);
  let newState = profileReducer(state, action);
  let wer = newState.postsDate.length - 1;
  expect(newState.postsDate[wer].text).toBe('Ksksksksk');
});
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = actions.deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsDate.length).toBe(1);
});
