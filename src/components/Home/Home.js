import React,{useState, useEffect} from 'react'
import axios from 'axios'
import config from '../../config.sample'

function Home() {
    const [student, setStudent] = useState([])
    const url = config.apiUrl
    
    // useEffect(()=> {
    //     const myHeader = new Headers();
    //     myHeader.append("content-type","application/json")

    //     const options = {
    //         method: "get",
    //         myHeader
    //     }
    //     fetch(`${url}/students`, options,{ mode: 'no-cors'})
    //     .then(response =>{
    //         console.log("Success", response)
    //     })
    //     .catch(error => {
    //         console.log("Error in submitting", error)
    //     })
    // })

    useEffect(()=>{
        axios.get(`${url}/students`,{
            "headers" : {
                "Authorization": JSON.parse(localStorage.getItem('auth_token')).auth_token

            }
        }
        )
        .then(response => {
            setStudent(response.data)
        })
        .catch(error=> {
            console.log(error)
        })
    },[])
    
    return (
        <div className="col s12">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>   
                        <th>Roll Number</th>
                    </tr>
                        {student.map(st => 
                        <tr key ={st.id}>
                            <td>{st.name}</td>
                            <td>{st.rollno}</td>
                        </tr>)}
                </tbody>
            </table>
            
        </div>
    )
}

export default Home
