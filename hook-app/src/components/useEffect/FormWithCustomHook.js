// import React, { useState, } from 'react'
import './effects.css'
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';

export const FormWithCustomHook = () => {

     const [formValues, handleInputChange] = useForm({
          name: '',
          email: '',
          password: '',
     })

     const { name, email, password} = formValues

     useEffect(()=>{
          console.log('email cambio')
     }, [email])

     const handleSubmit = (e)=>{
          e.preventDefault()
     }

     console.log(formValues)

  return (
     <form onSubmit={handleSubmit}>
          <div className='titulo'>FormWithCustomHook</div>
          <hr/>

          <div className='form-group'>
               <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                    />
          </div>
          <div className='form-group'>
               <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                    />       
          </div>
          <div className='form-group'>
               <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*******'
                    value={ password }
                    onChange={ handleInputChange }
                    />
          </div>

          <button type="submit" className="btn btn-primary button"> 
               guardar
          </button>

     </form>
     
  )
}
