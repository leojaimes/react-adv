
import { useFormik, Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
interface FormValues {
    firstName: string;
    email: string;
    lastName: string;
}
export const FormikComponents = () => {


    const initialValues = {
        firstName: '',
        email: '',
        lastName: ''
    }


    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().max(15, 'Must be less than 15 characters').required(),
        lastName: Yup.string().max(15, 'Must be less than 15 characters').required(),
        email: Yup.string().email('email is not valid').required()
    })






    return (
        <div>
            <h1>*Formik   Yup   Page</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    ({   }) => (
                        <Form>
                            <label htmlFor="firstName">firstName</label>

                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">lastName</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage   name="lastName" component="span" />



                            <label htmlFor="email">email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span" />

                            <button type="submit">Submit</button>


                        </Form>


                    )

                }


            </Formik>

        </div>
    )
}
