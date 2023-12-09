import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators.ts';
import { TextArea } from '../../../common/FormsControls/FormsControls.tsx';
import MainButton from '../../../common/Buttons/MainButton/MainButton.tsx';
import { AddPostFormType } from '../MyPosts.tsx';

type PropsType = {};

const maxLength10 = maxLengthCreator(300);
const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType, PropsType> & PropsType> = (
  props,
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={TextArea}
          placeholder={'Enter your post message'}
          validate={[required, maxLength10]}></Field>
      </div>
      <div>
        <MainButton name="New post"></MainButton>
      </div>
    </form>
  );
};
export default reduxForm<AddPostFormType, PropsType>({ form: 'profile-add-post-form' })(
  AddNewPostForm,
);
