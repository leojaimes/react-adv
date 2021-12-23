import { useForm } from '../hooks/useForm';
import { useFormik, FormikErrors } from 'formik'
import reportWebVitals from '../../reportWebVitals';
interface FormValues {
    firstName: string;
    email: string;
    lastName: string;
}
export const FormikBasicPage = () => {



    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    const validate = ( { email, firstName, lastName }: FormValues) => {

        const errors: FormikErrors<FormValues> = {

        }

        const isValidEmail = (email: string) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }


        if (!firstName){
            errors.firstName = "firstName is required"
              
        }  if(!lastName){
            errors.lastName = "lastName is required"
         }  
         
         
         if (!email){
            errors.email = "email is required"
             
        }  else if(!isValidEmail(email)){
            errors.email= "email no valid"
             
        }




        return  errors
    }

    const { values, handleChange, handleSubmit, errors, validateOnBlur } = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            email: '',
            lastName: ''
        },
        onSubmit: onSubmit,
        validate: validate

    })
    const { email, firstName, lastName } = values

    

    return (
        <div>
            <h1>*FormikBasicPage</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">firstName</label>
                <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                />
                {validateOnBlur && errors.firstName && <span>{errors.firstName}</span>}


                <label htmlFor="lastName">lastName</label>
                <input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleChange}
                />
                 {validateOnBlur && errors.lastName && <span>{errors.lastName}</span>}



                <label htmlFor="email">email</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                />

                {validateOnBlur && errors.email && <span>{errors.email}</span>}


                {/*!isValidEmail(email) && <span>name is invalid</span>*/}


                <button type="submit">Submit</button>


            </form>
        </div>
    )
}
