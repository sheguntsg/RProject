import React from 'react';
import './SignIn.css'
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function SignIn() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        sessionStorage.setItem('SignIn',JSON.stringify(data))
        document.querySelector('form').className = 'none'
        
      };
      
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}/>
          {errors?.email?.type === "pattern" && <p>Please enter your email</p>}
          <input
          type="password"
          placeholder="Password"
          {...register("password", { minLength: 8, maxLength: 15 })}
        />
        {errors?.password?.type === "minLength" && <p>Minimum 8 </p>}
        {errors?.password?.type === "maxLength" && <p>Maximum 15</p>}
        <input type='submit'/>
        
    </form>
    <NavLink to='/' className={({isActive})=>(isActive?'Active':'De')}><button>Go Home</button></NavLink>
    </>
  )
}

export default SignIn