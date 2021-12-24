
import {  Form,  Formik } from 'formik'
import * as Yup from 'yup'
import {   /*MyCheckbox,*/  MyCheck, MySelect, MyTextInput } from '../components'
interface FormValues {
    firstName: string;
    email: string;
    lastName: string;
    terms: boolean;
    jobType: string;
}
export const FormikAbstract = () => {


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
        jobType: Yup.string().required('Required')
    })






    return (
        <div>
            <h1>*Formik Abstract***</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    ({ values }) => (
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



                            <MySelect name="jobType" placeholder="jobType" label={'Select Job Type'} >
                                <option value=""></option>
                                <option value="react">React Dev</option>
                                <option value="flutter">Flutter Dev</option>
                                <option value="devops">Devops Dev</option>
                            </MySelect>







                          <MyCheck name="terms" label="Accept terms and conditions" /> 



                            <button type="submit">Submit</button>
                            {values.terms}

                        </Form>


                    )

                }


            </Formik>

        </div>
    )
}
