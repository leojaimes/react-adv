
import { useFormik, Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components/MyTextInput';
 
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
                            <MyTextInput
                                label="firstName"
                                name="firstName"
                                type="text"
                                placeholder="firstName"
                            />
                            <MyTextInput
                                label="lastName"
                                name="lastName"
                                type="text"
                                placeholder="lastName"
                            />
                            <MyTextInput
                                label="email"
                                name="email"
                                type="email"
                                placeholder="lastName"
                            />




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
