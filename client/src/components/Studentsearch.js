import React,{useState} from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Studentsearch = () => {

    const[data,setData] = useState({
        aadharnumber: "",
    })
    const [result,setResult] = useState("")
    const {aadharnumber} = data;
    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:5000/userlogin', data).then(
            res => {
                if (res.data.status === 'Active') {
                  toast.warn('Profile is in verification');
                } else if (res.data.status === 'Approved') {
                  toast.success('Profile verified');
                } else if (res.data.status === 'Disapproved') {
                  toast.error('Profile Disapproved');
                }
                setResult(res.data);
              }).catch(error => console.log(error))
          
    }

    return (
        <>
            <div className='container-sm'>
                <div className='text-center'>
                    <h3>Get Your details Below</h3>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form onSubmit={submitHandler}>
                            <label htmlFor='aadharno' className="form-label">Aadhar No</label>
                            <input  type="number" className="form-control" value={aadharnumber} id="aadharno" placeholder='Aadhar Number' name="aadharnumber" onChange={changeHandler}/>
                            <br></br>
                            <br />
                            <div className='mb-4 text-center'>
                                <button className="btn btn-primary" type='submit'>Search</button>
                            </div>
                        </form>
                    </div>
                    <h3 className='text-center'>{result.fullname}<br/>{result.status}</h3>
                </div>
                <ToastContainer position="top-center" autoClose={2000} theme="colored" />
            </div>
        </>
    )
}
export default Studentsearch;
