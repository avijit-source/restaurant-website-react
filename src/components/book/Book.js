import React, { useState } from 'react'
import FormInput from './FormInput'
import './book.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Book() {
   const [submitted,setSubmitted] = useState(false);
   const [values,setValues] = useState({
        fullname:"",
        email:"",
        mobile:"",
        confirmmobile: "",
        date:new Date(),
        numberofpeople: 1
   })
   

   let minDate = () =>{
     let currDate = new Date();
     let dateString = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000 ))
     .toISOString()
     .split("T")[0];
     return dateString;
   }

   let maxDate = () =>{
     let currDate = new Date();
     currDate.setDate(currDate.getDate() + 10);
     let dateString = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
     return dateString;
   }


   const inputs = [
     { 
       id:1,
       name: "fullname",
       type: "text",
       placeholder: "Full name",
       errorMessage:"name should be 3-20 characters no special characters or numbers allowed",
       label: "Full name",
       pattern: "^[A-Za-z ]{3,20}$",
       required: true,
       min:null,
       max:null,
     },
     {
       id:2,
       name:"mobile",
       type: "Text",
       placeholder: "mobile number",
       errorMessage: "enter valid mobile number",
       label: "mobile number",
       pattern: "[6-9]{1}[0-9]{9}",
       required: true,
       min:null,
       max:null
     },
     {
       id: 3,
       name: "confirmmobile",
       type: "text",
       placeholder: "Comfirm Mobile",
       errorMessage: "mobile number does not match!",
       label: "Confirm Mobile",
       pattern: values.mobile,
       required: true,
       min:null,
       max:null
    },
    {
      id:4,
      name:"email",
      type:"email",
      placeholder: "your email",
      errorMessage: "enter valid email",
      label:"email",
      pattern:"^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$",
      required: true,
    },
     {
       id: 5,
       name: "date",
       type: "date",
       placeholder: "Date",
       label: "Pick Date",
       required: true,
       errorMessage: "please choose a date",
       min: minDate(),
       max: maxDate()
      },
     {
       id:6,
       name:"numberofpeople",
       type:"number",
       placeholder: "How many guests are we expecting",
       label:"choose number of people",
       required: true,
       errorMessage: "max number of people between 1-10",
       min:1,
       max:10,
      }
   ]
   

    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const res =  await fetch(process.env.REACT_APP_FIREBASE_DB
        ,{
           method:"POST",
           headers:{
             "Content-Type":"application/jspn"
           },
           body: JSON.stringify(values)
        })
        if(res){
          toast.success("booking placed successfully 🎉");
          setValues({
            fullname:"",
            email:"",
            mobile:"",
            confirmmobile: "",
            date:new Date(),
            numberofpeople: 1
          })
          setSubmitted(true)
        }
      }catch(e){
         toast.error(e.message)
      }
    };

    

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    
   
    return(
      <section className="form-section">
      <div className="book">
        <form onSubmit={handleSubmit} className="booking-form" method="POST">
          <h1 className="form-header">Place Your Booking</h1>
          {inputs.map((input) => (
             <FormInput
             key={input.id}
             {...input}
              value={values[input.name]}
              onChange={onChange}
              submitted= {submitted}
             />
          ))} 
          <button className="form-btn">Submit</button>
          <ToastContainer position="top-left" />
        </form>
      </div>
      </section>
    
    )
  }

export default Book
