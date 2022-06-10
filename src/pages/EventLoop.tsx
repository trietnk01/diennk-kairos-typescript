import React from "react";

function EventLoop() {
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
    }, 300);
  };
  bar();
  promise1.then((val) => console.log(val));
  foo();
  return <div>EventLoop</div>;
}

export default EventLoop;
