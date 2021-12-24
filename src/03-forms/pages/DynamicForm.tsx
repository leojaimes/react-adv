import formJson from '../data/custom-form.json'
import { Formik, Form, } from 'formik'

import * as Yup from 'yup'
import { MyTextInput } from '../components/MyTextInput';
import "../styles/styles.css";
import { MySelect } from '../components/MySelect';


export const DynamicForm = () => {

    const initialValues: {
        [x: string]: any
    } = {}


    const requiredFields: {
        [x: string]: any
    } = {}



    for (const input of formJson) {
        initialValues[input.name] = input.value
        if (!input.validations) continue
        if (input.validations?.length === 0) continue

        let schema = Yup.string()
        for (const rule of input.validations) {
            if (rule.type === "required") {
                schema = schema.required(rule.message)
            }

            if (rule.type === "email") {
                schema = schema.email(rule.message)
            }

        }

        requiredFields[input.name] = schema //agrega propiedad al objeto con el nombre input.name
    }



    const onSubmit = (values: any) => {
        console.log(values)
    }
    const validationSchema = Yup.object( requiredFields)


    return (
        <div>
            <h1>Dynamic Form!!</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    ({ values }) => (
                        <Form noValidate>
                            {
                                formJson.map
                                    (({ name, label, placeholder, type, options }) => {

                                        if (type === 'input' || type === "password" || type === "email")
                                            return <MyTextInput
                                                key={name + 'key'}
                                                label={label}
                                                name={name}
                                                placeholder={placeholder}
                                                type={type as any}

                                            />


                                        if (type === 'select')
                                            return <MySelect
                                                key={name + 'key'}
                                                label={label}
                                                name={name}
                                                placeholder={placeholder}
                                                type={type as any}

                                            >
                                                {
                                                    options?.map(({ value, name }) => (
                                                        <option key={value + ' game'} value={value}>{name}</option>
                                                    ))
                                                }
                                            </MySelect>

                                        return <h1>Control {type} not supported </h1>

                                    }


                                    )
                            }
                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
