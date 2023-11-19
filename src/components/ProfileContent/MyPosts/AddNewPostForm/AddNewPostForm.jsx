import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "./../../../../utils/validators/validators";
import { TextArea } from "../../../common/FormsControls/FormsControls";
import ProfileButton from './../../../common/Buttons/ProfileButton/ProfileButton';

const maxLength10 = maxLengthCreator(300);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={TextArea}
          placeholder={"Enter your post message"}
          validate={[required, maxLength10]}
        ></Field>
      </div>
      <div>
        <ProfileButton name='New post'></ProfileButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: "profile-add-post-form" })(AddNewPostForm);
