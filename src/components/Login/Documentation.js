import React from "react";

const Documentation = () => {
  return (
    <div className="container py-5">
      <h2><span>আসসালামু আলাইকুম সবাই কেমন আছেন ?</span></h2>

      <p>
        আমি প্রফেশনাল কোনও হ্যাকার না তাই আমার টুল এ ভুল থাকতে পারে। তবে আমি
        ওয়েব ডেভেলপার হিসেবে যততুকু বুঝতে পারছি তা দিয়েই বানানো হয়েছে এই টুল।
      </p>
      <p>
        আমি MERN Stack ডেভেলপার তাই আমার জাভাস্ক্রিপ্ট খুব ভালো লাগে আর তাই আমি
        চেষ্টা করি জাভাস্ক্রিপ্ট দিয়ে অল্প অল্প হ্যাকিং টুল বানানোর। যদিও
        হ্যাকিং এর জন্য জাভাস্ক্রিপ্ট বেস্ট কোনো ল্যাঙ্গুয়েজে না। আমার টুলস ভালো
        লাগলে আমাকে গিটহাব ফলো করতে পারেন ।{" "}
        <a href="https://github.com/jahid757">
          <span className="name">Github</span>
        </a>
      </p>

      <h4><span>টুল সম্পর্কিত কিছু কথা :</span></h4>
      <p>
        টুলটা যেহেতু অনেক user এর কথা মাথায় রেখে বানানো হয়েছে তাই এখানে
        লগইন/রেজিস্টার সিস্টেম অ্যাড করা হয়েছে। লগইন সিস্টেম টা সম্পূর্ন্ন নিজের
        তৈরী তাই যথা সম্ভব সিম্পল করা হয়েছে।{" "}
      </p>

      <h5><span>লগইন :::</span></h5>
      <p>
        {" "}
        আপনি রেজিস্টার করতে চাইলে সিম্পলি create an account এ একটা ক্লিক করে নাম
        আর পাসওয়ার্ড দিয়ে রেজিস্টার করে ফেলুন। রেজিস্টার হওয়ার পর যদি আপনাকে
        ড্যাশবোর্ড অটো নিয়ে যায় তাহলে তো গেলোই আর না গেলে আপনি চেকবক্স টা
        uncheck করে রেজিস্টার করা পাসোওয়ার্ড দিয়ে লগইন এ ক্লিক করুন। তাহলে আশা
        করি আপনাকে ড্যাশবোর্ড এ নিয়ে যাবে। তারপরও কোনো সমস্যা হলে আমাকে জানতে
        পারেন।{" "}
      </p>

      <h5><span>ড্যাশবোর্ড পরিচিতিঃ</span></h5>

      <p>
        লগইন হওয়ার পর ড্যাশবোর্ড আসতে যদি একটু বেশি সময় নিলে পেজ রিফ্রেশ করে
        ফেলুন। আর ওয়েবসাইট এ একটু সিকিউরিটি ইসু আছে যা ক্রিয়েটিভ কেউ ছাড়া ধরতে
        পারবো না আমি এই ইসু তা খুব তাড়াতাড়ি ফিক্স করে ফেলবো। তার পর আপনি কিছু
        ইনফরমেশন দেখতে পারবেন। তার নিচে একটা বাটন দেখতে পারবেন Generate ঐটাতে
        ক্লিক করলে আপনার জন্য ফিশিং লিংক ক্রিট হয়ে যাবে। তার পর আপনার এই লিংক এ
        যে লগইন করবে তার ইনফো আপনি আপনার ড্যাশবোর্ডে দেখতে পারবেন। তার পর দেখতে
        পারবেন আপনি কত গুলো ফিশ করতে পারছেন। এবং তার নিচে আপনি দেখতে পারবেন ফিশ
        করা ডাটা।
      </p>

      <p>আগে একাউন্ট ক্রিট করুন তার পর লগইন করুন।</p>

      <p>
        টুল লগইন লিংক :
        <a href="https://phishing-3ea7d.web.app/login">
          <span className="name"> https://phishing-3ea7d.web.app/login</span>
        </a>
      </p>

      <p>
        টুল লিংক :{" "}
        <a href="https://phishing-3ea7d.web.app/">
          <span className="name"> https://phishing-3ea7d.web.app/</span>
        </a>
      </p>

      <p>
        গিটহাব লিংক :{" "}
        <a href="https://github.com/jahid757">
          <span className="name"> https://github.com/jahid757</span>
        </a>
      </p>

      <p>
        <span>
          টুল সম্পর্কে কোনো ফিডব্যাক থাকলে অবশ্যই জানাবেন। কি কি অ্যাড করলে ভালো
          হয় কোন বিষয় ইম্প্রোভ করতে হবে বা ইম্প্রোভ করলে আপনাদের ভালো হবে তাও
          জানাতে পারেন। ধন্যবাদ সবাইকে।
        </span>
      </p>
    </div>
  );
};

export default Documentation;