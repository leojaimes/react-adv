import {  LazyExoticComponent } from 'react';
import { FormikAbstract, FormikComponents, FormikYupPage, RegisterPage, FormikBasicPage  } from './index'
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


 



export const routes: Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register Page'
    },  
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Component: FormikBasicPage,
        name: 'formik-basic'
    },

    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: FormikYupPage,
        name: 'formik-yup'
    }, 
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: FormikComponents,
        name: 'formik-components'
    },

    {
        to: '/formik-abstract',
        path: 'formik-abstract',
        Component: FormikAbstract,
        name: 'formik-abstract'
    },

    {
        to: '/formik-formik-page',
        path: 'formik-formik-page',
        Component: RegisterFormikPage,
        name: 'Register Formik'
    },


    
     
];
