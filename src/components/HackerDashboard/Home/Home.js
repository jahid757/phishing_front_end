import React, { useEffect, useState } from "react";
import HackedDetail from './HackedDetail'

const Home = () => {
  const [validation, setValidation] = useState(false);

  const keyValue = localStorage.getItem("key");
  const key = JSON.parse(keyValue);
  const [name,setName] = useState('');
  // console.log(key);
  
  // const history = useHistory();
  useEffect(() => {
    fetch("https://ancient-garden-81797.herokuapp.com/userList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: key}),
    })
      .then((response) => response.json())
      .then((result) => {
        setName(result);
        // console.log(name[0]);
      });
  },[key,name]);

  useEffect(() => {
    fetch("https://ancient-garden-81797.herokuapp.com/userVerification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: key}),
    })
      .then((response) => response.json())
      .then((result) => {
        setValidation(result);
        // console.log(result);
      });
  }, [key]);

  

  return (
    <div className="container">
      {
        validation ? 
        <div>
          <h3 className="text-center py-3">
            <small><span>Creator:</span> <a href="https://www.facebook.com/jahid757"><span className="name">Jahid Hasan</span></a></small>
          </h3>
          
          <h4 className="text-center">
            <span>Login Id:</span> <span className="name">{key}</span>
          </h4>
          <h4 className="text-center">
            <span>Login Name:</span> <span className="name">{name[0].name}</span>
            </h4>
          {
            <HackedDetail keyValue={key}/>
          }
        </div>
        :
        // history.push('/login')
        <h2 className="text-center">You Need To Login</h2>
      }
    </div>
  );
};

export default Home;
