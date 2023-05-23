import React from 'react'
import Studentsearch from './Studentsearch';
import image from "../images/imagebg.jpeg"
import NavigationBar from './Nav'
const Home=()=>{
    
    return (
        <div className='container-fluid' style={{backgroundImage: `url(${image}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center'}}>
           <NavigationBar/>
            <div className='d-flex'>
                <h1 className=' p-4 mx-auto' style={{ color: "#6a5acd",textAlign:"justify"}}>Welcome to the Student Portal.</h1>
            </div>
            <div className='d-flex'>
            <p className='p-0 mx-auto fs-5' style={{textAlign:"justify"}}>Education Assistants can login above to Update Student Details and Process Scholarships.</p><br></br>
            </div>
            <div className='d-flex'>
            <p className='p-0 mx-auto fs-5' style={{textAlign:"justify"}}>Students can check their details uploaded in this Portal and Know the status of their Scholarships by providing the Aadhar Number and Date of Birth Below.</p>
            </div>
            <Studentsearch />

        </div>
    )
}
export default Home;