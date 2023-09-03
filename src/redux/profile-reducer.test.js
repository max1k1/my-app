import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
  postsDate: [
    { id: 1, text: "Some text", likeCount: 5 },
    { id: 2, text: "Dvi", likeCount: 3 },
  ]
}
it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPost("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.postsDate.length).toBe(3);
});

it("length of post should be decrement", ()=>{
  let action = deletePost(2)
  let newState = profileReducer(state, action)
  expect(newState.postsDate.length).toBe(1)
})

it("new post message should be correct", ()=>{
  let action = addPost("it-kamasutra.com")
  let newState = profileReducer(state, action)
  let wer = (newState.postsDate.length-1)
  expect(newState.postsDate[wer].text).toBe("it-kamasutra.com")
})
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsDate.length).toBe(2);
});