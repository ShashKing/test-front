import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import config from '../config.sample'

function NewStudentDetails() {
    const initialValues ={
        name:'',
        rollno:''
    }

    // const onSubmit = values => {
    //     const myHeader = new Headers();
    //     myHeader.append("content-type","application/json")

    //     const options = {
    //         method: "POST",
    //         body: JSON.stringify(values),
    //         myHeader
    //     }
    //     console.log("Submitting Form", values)
    //     fetch("http://127.0.0.1:4000/students", options)
    //     .then(response =>{
    //         console.log("Success", response)
    //     })
    //     .catch(error => {
    //         console.log("Error in submitting", error)
    //     })
    // }
    let history = useHistory();
    const onSubmit = values => {
    const url = config.apiUrl
        console.log("Submitting Form", values)
        axios.post(`${url}/students`, values)
        .then(response =>{
            console.log("Success", response)
        })
        .catch(error => {
            console.log("Error in submitting", error)
        })
        
        history.push("/")
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Enter Name"),
        rollno: Yup.string().required("Enter Roll Number").max(2, "No more than 2 digit")
    })
    return (
        <div className="row">
            <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>

                <Form className="form-control col s12">
                    <div className='input-field col s6'>
                        <Field type="text" name="name" id="name"/>
                        <label htmlFor="name">Enter Student Name</label>
                        <ErrorMessage name="name"/>
                    </div>
                    <div className='input-field col s6'>
                        <Field type="text" name="rollno" id="rollno"/>
                        <label htmlFor="rollno">Enter Student Roll Number</label>
                        <ErrorMessage name="rollno"/>
                    </div>
                    
                        <button className="btn waves-effect waves-light" type="submit" style={{background:"#6200ee"}}>Submit
                            <i className="material-icons right"></i>
                        </button>
                </Form>
            </Formik>
        </div>
    )
}

export default NewStudentDetails
