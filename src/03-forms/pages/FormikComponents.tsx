
import {   Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
 
interface FormValues {
    firstName: string;
    email: string;
    lastName: string;
    terms: boolean;
    jobType: string;
}
export const FormikComponents = () => {


    const initialValues = {
        firstName: '',
        email: '',
        lastName: '',
        terms: false,
        jobType: ''
    }


    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().max(15, 'Must be less than 15 characters').required(),
        lastName: Yup.string().max(15, 'Must be less than 15 characters').required(),
        email: Yup.string().email('email is not valid').required(),
        terms: Yup.bool().isTrue('Accept terms and conditions to continue'),
        jobType: Yup.string().required()
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
                    ({ values, }) => (
                        <Form>

                            <label htmlFor="firstName">firstName</label>

                            <Field name="firstName" type="text" placeholder="firstName" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">lastName</label>
                            <Field name="lastName" type="text" placeholder="lastName" />
                            <ErrorMessage name="lastName" component="span" />



                            <label htmlFor="email">email</label>
                            <Field name="email" type="text" placeholder="email" />
                            <ErrorMessage name="email" component="span" />


                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select" placeholder="jobType" >
                                <option value=""></option>
                                <option value="react">React Dev</option>
                                <option value="flutter">Flutter Dev</option>
                                <option value="devops">Devops Dev</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />




                            <label  >
                                <Field name="terms" type="checkbox" />
                                Accept terms and conditions</label>

                            <ErrorMessage name="terms" component="span" />




                            <button type="submit">Submit</button>
                            {values.terms}

                        </Form>


                    )

                }


            </Formik>

        </div>
    )
}
