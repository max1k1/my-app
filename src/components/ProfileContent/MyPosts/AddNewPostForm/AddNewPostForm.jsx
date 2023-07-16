import React from "react"
import { Field, reduxForm } from "redux-form"

const AddNewPostForm =(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} placeholder={"Enter your post message"} name="newPostText"></Field>
          </div>
          <div>
            <button>New post</button>
          </div>
    </form>
  }
export default reduxForm({form: "profile-add-post-form"})(AddNewPostForm)