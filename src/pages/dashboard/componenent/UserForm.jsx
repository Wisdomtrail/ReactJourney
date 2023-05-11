import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function UserForm(){
    return(
        <div>
            <Formik
             initialValues={{firstName: initialData.firstName, lastName: initialData.lastName, email: initialData.email,
             password: initialData.password, confirmPassword: initialData.confirmPassword}}
             validate={(values) =>{
                const errors = {};
                ! values.lastName ? errors.lastName = 'Required'
                : values.lastName.length < 2 ? errors.lastName = 'Invalid LastName'
                : values.password ? errors.password = 'Required'
                : values.password.length < 8 ? errors.password = 'unsafe Password'
                : values.password !== values.confirmPassword ? 'passwords Not Compatible'
                : !values.firstName ? errors.firstName = 'Required'
                : values.firstName.length < 2 ? errors.firstName = 'Invalid First Name'
                : values.email ? errors.email = 'Required'

             }}>

            </Formik>
        </div>
    )
}