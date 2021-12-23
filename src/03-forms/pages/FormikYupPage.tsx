
import { useFormik } from 'formik'
import * as Yup from 'yup'
interface FormValues {
    firstName: string;
    email: string;
    lastName: string;
}
export const FormikYupPage = () => {



    const onSubmit = (values: FormValues) => {
        console.log(values)
    }



    const {
        errors,
        touched,
        getFieldProps, //reemplaza onChange, onBlur, name en los fields
        handleSubmit,
          } = useFormik<FormValues>({
            initialValues: {
                firstName: '',
                email: '',
                lastName: ''
            },
            onSubmit: onSubmit,
            validationSchema: Yup.object({
                firstName: Yup.string().max(15, 'Must be less than 15 characters').required(),
                lastName: Yup.string().max(15, 'Must be less than 15 characters').required(),
                email: Yup.string().email('email is not valid').required()
            })

        })
 



    return (
        <div>
            <h1>*Formik   Yup   Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">firstName</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}


                <label htmlFor="lastName">lastName</label>
                <input

                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}



                <label htmlFor="email">email</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />

                {touched.email && errors.email && <span>{errors.email}</span>}
 
                <button type="submit">Submit</button>


            </form>
        </div>
    )
}
