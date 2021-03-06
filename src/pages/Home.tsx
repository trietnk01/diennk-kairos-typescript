import { getProfileById } from "apis/profile.api";
import IProfile from "models/IProfile";
import React, { useEffect } from "react";
function Home() {
  const foo = () => {
    console.log("foo");
  };
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1");
    }, 300);
  });
  const bar = () => {
    setTimeout(() => {
      console.log("bar");
    }, 10);
  };
  bar();
  promise1.then((val) => console.log(val));
  foo();
  return <div>Home</div>;
}

export default Home;
