import { lazy, LazyExoticComponent } from 'react';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikAbstract } from '../03-forms/pages/FormikAbstract';

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



    
     
];
