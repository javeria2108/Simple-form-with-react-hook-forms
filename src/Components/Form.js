import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css"
import { computeHeadingLevel } from "@testing-library/react";
export default function Form(){
    const{register,handleSubmit,formState:{errors}}=useForm({defaultValues:{firstname:"",lastname:"",subject:""}});
console.log(errors)

return(

   <div className="container">
  <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
  <div className="row">
    <div className="col-25">
      <label htmlFor="fname">First Name</label>
    </div>
    <div className="col-75">
      <input {...register("firstname", 
      {required:"this is required",
      minLength:{value:4,message:"Min length is 3"}})}
      type="text" id="fname" placeholder="Your name.."/>
    
    </div>
    <p style={{color:"red"}}>{errors.firstname?.message}</p>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">Last Name</label>
    </div>
    <div className="col-75">
      <input {...register("lastname", {required:"this is required",
      minLength:{value:4,message:"Min length is 3"}})}
      type="text" id="lname" placeholder="Your last name.."/>
    </div>
    <p style={{color:"red"}}>{errors.lastname?.message}</p>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="country">Country</label>
    </div>
    <div className="col-75">
      <select {...register("country")} id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="subject">Subject</label>
    </div>
    <div className="col-75">
      <textarea {...register("subject",
      {maxLength:{value:500,message:"Max Length is 200"}})}
      type="text" placeholder="Write a message.." ></textarea>
    </div>
    <p style={{color:"red"}}>{errors.subject?.message}</p>
  </div>
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>

)
}