import Form from "../components/Form";
import Toaster from "../components/Toaster";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLettters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
const testObj = [
  { id: 1, password: upperCaseLetters },
  { id: 2, password: lowerCaseLettters },
  { id: 3, password: numbers },
  { id: 4, password: specialCharacters },
];
function CardContainer() {
  const [result, setResult] = useState("");
  const [checkStatus, setStatus] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();
    let passLength = e.target.name.value;
    if (checkStatus.length === 0) {
      return toast("Please choose one of options below");
    } else if (e.target.name.value === "") {
      return toast("Please input password length");
    } else {
      let passArr = [];
      for (let i = 0; i < checkStatus.length; i++) {
        let test = testObj.filter((e) => {
          return e.id === Number(checkStatus[i]);
        });
        passArr.push(test[0].password);
      }
      console.log(passArr);
      let temp = [];
      while (temp.length < passLength) {
        passArr.map((e) => {
          return temp.push(
            e.charAt(Math.floor(Math.random() * (e.length - 1)))
          );
        });
      }
      temp.length = passLength;
      console.log(temp.join(""));
      setResult(temp.join(""));
      return toast("Create Succesfully");
    }
  };
  let handleChange = (e) => {
    if (e.target.checked) {
      if (!checkStatus.includes(e.target.id)) {
        setStatus([...checkStatus, e.target.id]);
      }
    } else {
      if (checkStatus.includes(e.target.id)) {
        let index = checkStatus.indexOf(e.target.id);
        checkStatus.splice(index, 1);
        setStatus(checkStatus);
      }
    }
  };
  let handleClick = (e) => {
    e.preventDefault();
    if (result === "") {
      return toast("There is nothing to copy");
    } else {
      navigator.clipboard.writeText(result);
      return toast("Password copied to clipboard");
    }
  };
  console.log(checkStatus);
  return (
    <>
      <Toaster />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleClick={handleClick}
        result={result}
      />
    </>
  );
}

export default CardContainer;
