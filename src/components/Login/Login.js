import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory,Link } from "react-router-dom";
import hacker from "../../images/hacker.jpg";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isAuth, setIsAuth] = useState(false);
  const [key, setKey] = useState(null);
  const history = useHistory();
  const [newAccount, setNewAccount] = useState(false);
  const [url, setUrl] = useState("userVerification");

  console.log(newAccount);

  if (isAuth === true && key !== null) {
    localStorage.setItem("key", JSON.stringify(key.key));
    history.push("/");
    // console.log(key);
  }

  const onSubmit = (data) => {
    //   console.log(data);
    newAccount === false ? setUrl('userVerification'): setUrl('addUser');

    fetch(`https://ancient-garden-81797.herokuapp.com/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      
      .then((res) => res.json())
      .then((result) => {
        /*newAccount === false ?*/ setIsAuth(result)// : setIsAuth(true);
        setKey(data)
        // console.log(result);
      })
  };


  return (
    <div className="container text-center login">
      <img className="hacker_avatar" src={hacker} alt="" />
      <h2>Admin Login</h2>
      <div className="">
      <input
        onChange={() => setNewAccount(!newAccount)}
        type="checkbox"
        name="check"
        id="check"
        className="me-2"
      />
      <label htmlFor="check">Create An Account</label>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {newAccount === true ? (
          <>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
            />
            {errors.exampleRequired && <span>Name is required</span>}

            <input
              {...register("key", { required: true })}
              placeholder="Enter Your Key"
            />
            {errors.exampleRequired && <span>Key is required</span>}
          </>
        ) : (
          <>
            <input
              {...register("key", { required: true })}
              placeholder="Login Key"
            />
            {errors.exampleRequired && <span>Key is required</span>}
          </>
        )}

        <input type="submit" value="Log In" />
        <Link to="/doc"><span className="name">Documentation</span></Link>
      </form>
    </div>
  );
};

export default Login;
