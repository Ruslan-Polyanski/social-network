import { Formik, Form, Field } from "formik";
// import * as yap from "yap";

const ProfileForm = (props) => {

    const submitForm = (values, {setSubmitting}) => {
        setTimeout(() => {
            props.addPostCreateThunk(values.dataTextArea);
            setSubmitting(false);
          }, 400);
    }

    return (
        <div>
            <Formik initialValues={{ dataTextArea: ''}} onSubmit={submitForm}>
                {({isSubmitting}) => (                    
                    <Form>
                        <Field as="textarea" type="text" name="dataTextArea" placeholder="Write something!" /><br/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileForm;