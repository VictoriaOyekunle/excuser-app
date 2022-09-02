import axios from 'axios'
import { useState, useEffect } from 'react'
import spinner from '../images/please-wait.gif'

const Excuser = () => {

    const [excuses, setexcuses] = useState([])
    const [isloading, setisloading] = useState(true)
    const endpoint = "https://excuser.herokuapp.com/v1/excuse/family/"
    const endpoint2 = "https://excuser.herokuapp.com/v1/excuse/office/"
    const endpoint3 = "https://excuser.herokuapp.com/v1/excuse/children/"
    const endpoint4 = "https://excuser.herokuapp.com/v1/excuse/college/"
    const endpoint5 = "https://excuser.herokuapp.com/v1/excuse/party/"

    useEffect(()=> {
        
    }, [excuses])

    const getFamily = () => {
        axios.get(endpoint).then((result) => {
            setisloading(false)
            setexcuses(result.data)
        })
    }
    const getOffice = () => {
        axios.get(endpoint2).then((result) => {
            setisloading(false)
            setexcuses(result.data)
        })
    }
    const getChildren = () => {
        axios.get(endpoint3).then((result) => {
            setisloading(false)
            setexcuses(result.data)
        })
    }
    const getCollege = () => {
        axios.get(endpoint4).then((result) => {
            setisloading(false)
            setexcuses(result.data)
        })
    }
    const getParty = () => {
        axios.get(endpoint5).then((result) => {
            setisloading(false)
            setexcuses(result.data)
        })
    }
    
  return (
    <>
    <div className="container-fluid bg-dark">
        <div className="row p-0">
           <center>
           <div className="col-md-6">
            <h2 className='text-white mt-3'>My Excuser App</h2>
            <p className='h5 bg-secondary text-dark rounded-pill'>One spot to find all excuses !</p>
            <h5 className='text-light mt-5 w-75'>Click on any of the buttton below to generate any excuse for yourself and have fun!</h5>
            <div className='p-5 bg-light mt-5 rounded text-dark'>
                {isloading?<img src={spinner} alt="" />:excuses.map((item, index)=> (
                
                    <p className='text-dark' key={index}><b>{item.excuse}</b></p>
                
                ))}
            </div>
            <section className='mt-5'>
            <button className='btn btn-danger w-50' onClick={getFamily}>Family</button> <br />
            <button className='btn btn-secondary w-50 mt-2' onClick={getOffice}>Office</button> <br />
            <button className='btn btn-warning w-50 mt-2' onClick={getChildren}>Children</button> <br />
            <button className='btn btn-light w-50 mt-2' onClick={getCollege}>College</button> <br />
            <button className='btn btn-primary w-50 mt-2 mb-3' onClick={getParty}>Party</button>
            </section>
           </div>
           </center>
        </div>
    </div>
    </>
  )
}

export default Excuser