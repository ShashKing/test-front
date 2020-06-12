import React, { useState, useEffect } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Box} from '@chakra-ui/core'
import axios from 'axios'
import config from '../../config.sample'

function Login() {
    const [login, setLogin] = useState(new Map())

    const initialValues = {
        email:'',
        password:''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Enter Email Address").email("Email address is not correct"),
        password: Yup.string().required("Enter Password")
    })
    const onSubmit = values => {
        console.log(values)
        axios.post(`${config.apiUrl}/auth_user`,values)
        .then(response => {
            setLogin(login.set('logged_in', true))
            localStorage.setItem('logged_in',login.get('logged_in'))
            localStorage.setItem('auth_token',JSON.stringify(response.data))
        })
        .catch(error => {
            console.log(error)

        })

    }
    return (
        <Box m ={2} maxW="40%" mx="auto" >

            <div className="row">
                <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                    <Form className="form-control">
                        <Box className="input-field" >
                                <Field type= "text" name="email" id= "email"></Field>
                                <label htmlFor="email">Email</label>
                                <ErrorMessage name ="email"></ErrorMessage>
                        </Box>
                        
                        <Box className ="input-field">
                            <Field type= "password" name="password" id= "password"></Field>
                            <label htmlFor="password">Password</label>
                            <ErrorMessage name ="password"></ErrorMessage>
                        </Box>
                        <button className="btn waves-effect waves-light" type="submit" style={{background:"#6200ee"}}>Login</button>
                    </Form>
                </Formik>
            </div>
        </Box>
)
}

export default Login
