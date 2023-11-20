import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "./../../../../utils/validators/validators";
import { TextArea } from "../../../common/FormsControls/FormsControls";
import MainButton from './../../../common/Buttons/MainButton/ProfileButton';

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
        <MainButton name='New post'></MainButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: "profile-add-post-form" })(AddNewPostForm);
