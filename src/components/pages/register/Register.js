import React, { useEffect } from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { json, NavLink } from "react-router-dom";


function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    document.querySelector('form').className = 'none'
    localStorage.setItem(data.email, JSON.stringify(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="FirstName"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input
          placeholder="LastName"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors?.email?.type === "pattern" && <p>Please enter your email</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { minLength: 8, maxLength: 15 })}
        />
        {errors?.password?.type === "minLength" && <p>Minimum 8 </p>}
        {errors?.password?.type === "maxLength" && <p>Maximum 15</p>}
        <input type="submit" />
      </form>
      
      <NavLink to='/Contact' className={({isActive})=>(isActive?'Active':'De')}><button>SignIn</button></NavLink>
    </>
  );
}

export default Register;
