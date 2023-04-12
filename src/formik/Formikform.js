import React from 'react'
import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues={
    name:'',
    email:'',
    channel:'',
    date:'',
   
}
// const onSubmit=values=>{
//     console.log('formvalues',values)
//     list.push(values)
//     console.log(list)
// }
const validate=values=>{
    let errors={}

            if(!values.name){
                errors.name='required'
            }
            if(!values.email){
                errors.email='required'
            }
            if(!values.channel){
                errors.channel='required'
            }
            
           return errors; 
}

const validationSchema=Yup.object({
    name:Yup.string().matches(/^[A-Za-z ]*$/, 'only letters no number').required('required').max(10).min(3),
    email:Yup.string().email('invalid email').required('required'),
    channel:Yup.string().required('required'),
    date:Yup.string().required('req'),
   


})


const Formikform = () => {
    //  const [state, setstate] = useState(initialValues)
     const [list, setList] = useState([])
    const formik= useFormik({
        initialValues,
        onSubmit:values=>{
            // console.log('formvalues',values)
            list.push(values)
            console.log(list);
            console.log(new Date().toDateString())
           
        },
       validationSchema,
    })
    

  return (
    <div>
    <form action="" onSubmit={formik.handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
    {formik.errors.name? <div>{formik.errors.name}</div> :null} <br />
    <label htmlFor="email">Email</label>
    <input type="email" name='email' id='email' onChange={formik.handleChange} value={formik.values.email} /> 
    {formik.errors.email? <div>{formik.errors.email}</div> :null}<br />
    <label htmlFor="channel">Chhanle</label>
    <input type="text" name='channel' id='channel' onChange={formik.handleChange} value={formik.values.channel} /> 
    {formik.errors.channel? <div>{formik.errors.channel}</div> :null}<br />
    <label htmlFor="date">Date</label>
    <input type="date" name='date' id='date' onChange={formik.handleChange} value={formik.values.date} /> 
    {formik.errors.date? <div>{formik.errors.date}</div> :null}<br />
    
    <button type='submit'>submit</button>
    </form>
    <div>
    {list.map((index)=>{
        const{name,email,channel,date}=index;
        return(
            <div className="dibbya" key={index}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h3>{channel}</h3>
            <h4>{date}</h4>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default Formikform