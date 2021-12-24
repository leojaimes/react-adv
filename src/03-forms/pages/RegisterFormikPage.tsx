import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';
import "../styles/styles.css";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterFormikPage = () => {


  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',

  }
  const onSubmit = (values: RegisterForm) => {
    console.log(values)
  }


  const onReset = (values: RegisterForm) => {
    console.log('reseteado!!!!')
  }


  const validationSchema = Yup.object({
    name: Yup.string().max(15, 'Must be max 15 characters').min(2, 'Must be min 2 characters').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().max(15, 'Must be max 15 characters').min(2, 'Must be min 2 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Required')
    /*confirmPassword: Yup.string().when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')], 'Passwords do not match') : field
    ),*/
  })

  return (
    <div>
      <h1>Register Page</h1>

      <Formik onSubmit={onSubmit}
        initialValues={
          initialValues
        }
        validationSchema={validationSchema}
        onReset={onReset}
      >

        {
          ({ isValid, resetForm }) => (

            <Form >

              <MyTextInput
                label="Name"
                name="name"
                placeholder="Name"
              />



              <MyTextInput
                label="email"
                name="email"
                placeholder="email"
                type="email"
              />



              <MyTextInput
                label="password"
                name="password"
                placeholder="password"
                type="password"
              />





              <MyTextInput
                label="Repeat Password"
                name="confirmPassword"
                placeholder="Repeat pass"
                type="password"
              />

              <button disabled={!isValid} type="submit" >
                Submit
              </button>

              <button type="submit" onClick={() => {
                resetForm()
              }} >
                Reset
              </button>
            </Form>
          )
        }

      </Formik>
    </div>
  );
};
