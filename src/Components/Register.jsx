import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthProvider/AuthProvider';
import swal from 'sweetalert';


const Register = () => {
  const [error,setError]=useState(null)
  
        const location=useLocation()

  
  const {createUser,}=useContext(AuthContext)
  console.log(createUser);
  const navigate=useNavigate()
 
   const handleRegister=e=>{
    
       e.preventDefault()
       const name=e.target.name.value
       const photoUrl=e.target.photoUrl.value;
       const email=e.target.email.value;
       const password=e.target.password.value;
       if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Z\d@$!%*#?&]{6,}$/.test(password)){
        return setError('Password Need one capital letter, one number and one special character')
       }
       setError('')
       
      

       console.log(name,photoUrl,email,password);

      //  create user
       createUser(email,password)
       .then(result=>{
           console.log('create usr',result.user);
           swal("Account created successfull", "Now Login Our Webside", "success");

           navigate('/')

       })
       .catch(error=>{
        swal("warning", "This Email Already Used", "warning");

       })
      }

     
      

    return (
        <div>
           <div className=" h-[80vh] bg-base-200">
           
  <div className="hero-content ">
  
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
    <h1 className="text-4xl bg-slate-700 text-white  text-center rounded-md font-bold">Register now</h1>
    <p className='text-3xl font-semibold text-red-600 text-center'>
     {
    error
     }
    </p>
      <form onSubmit={handleRegister} className="card-body"> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo Url</span>
          </label>
          <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className='pb-4 text-center'>Don't Have an account?<Link className='ml-2 text-blue-600 font-bold ' to={'/login'}>Login</Link></p>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Register