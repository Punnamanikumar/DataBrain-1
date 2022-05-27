import React, { useState } from "react";
import "./Form.css"

const Form = () => {
    const [formStep,setFromStep]=useState(-1);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const incrementStep=()=>{
      if(formStep===0){
        if(name==="") alert("Please Fill Name") 
        else setFromStep(cur => cur + 1)
      }else if(formStep===1){
        if(address==="") alert("Please Fill Address")
        else setFromStep(cur => cur + 1)
      }else if(formStep===2){
        if(mobile.length!==10) alert("Please Fill Proper Mobile Number")
        else setFromStep(cur => cur + 1)
      }else if(formStep===3){
        if(email === "") alert("Please Fill Email Number")
        else setFromStep(cur => cur + 1) 
      }else{
        setFromStep(cur => cur + 1)
      }
    }
    const renderButton=()=>{
        if(formStep > 3 && formStep!==4){
            return undefined
        }else if(formStep ===3){
            return (
                <button onClick={incrementStep} type="button">Create Account</button>
            )
        }else if(formStep ===4){
          return (
              <button onClick={incrementStep} type="button">View Details</button>
          )
        }else if(formStep < 0){
          return (
              <button onClick={incrementStep} type="button">Start Filling Form</button>
          )
        }else{
            return (
                <button onClick={incrementStep} type="button">Next Step</button>
            )
        }
    }
    const handelBack=(e)=>{
      e.preventDefault();
      setFromStep(cur=>cur-1)
    }
   
  return (
    <div className="formComp">
      <div className="h1">
        <h1 className="h11">Task - 1 Multiple Pages Form</h1>
        <p className="h12">Become a new member in 4 easy steps</p>
      </div>
      <div className="h2">
        <div className="h3">
          <form>
            <div onClick={(e)=>handelBack(e)} className="backbtn">{formStep > 0 ? "<":""}</div>
            {formStep ===0 && (
              <section>
                <h2 className="ftext">Personal Information</h2>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"  className="text-input" value={name} onChange={(e)=>setName(e.target.value)}/>
              </section>
            )}

            {formStep ===1 && (
              <section>
                 <h2 className="ftext">Billing Information</h2>
                 <label htmlFor="address">Address</label>
                 <input type="text" id="address" name="address" className="text-input" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </section>
            )}

            {formStep ===2 && (
              <section>
                 <h2 className="ftext">Personal Number</h2>
                 <label htmlFor="mobile">Mobile Number</label>
                 <input type="number" id="mobile" name="mobile" className="text-input" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
              </section>
            )}

            {formStep ===3 && (
              <section>
                 <h2 className="ftext">Billing Mail Address</h2>
                 <label htmlFor="email">Email Id</label>
                 <input type="email" id="email" name="email" className="text-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </section>
            )}<br/>

            {formStep === 4 && (
              <section>
                 <h2 className="cong">Congratulations!</h2>
                 <h3 style={{marginLeft:"50px",marginTop:"-10px"}}>Account Created Sucessfully :)</h3>
              </section>
            )}

            {formStep ===5 && (
              <section>
                 <h2 className="user">User Details</h2>
                 <div className="details">
                  <h3>UserName : {name}</h3>
                  <h3>Address : {address}</h3>
                  <h3>Mobile No: {mobile}</h3>
                  <h3>Email Id: {email}</h3>
                 </div>
              </section>
            )}

            {renderButton()}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;