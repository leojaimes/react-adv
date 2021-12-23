import { useState } from "react"


export const useForm = <T>(initState: T) => {

    const [dataForm, setDataForm] = useState<T>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm(previousRegisterValues => {
            return {
                ...previousRegisterValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(dataForm)
    }
    const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }


     const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>)=>  {
        console.log(e.target.name)
        console.log(e.target.value)
       
     }



    const reset = () => {
        setDataForm({
            ...initState
        })
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...dataForm,
        dataForm,
        handleChange,
        handledSubmit,
        onClickSubmit,
        onBlur,
        reset,
        isValidEmail
    }

}
