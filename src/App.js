import React, { useState, useRef } from "react";
import Buttons from "./components/Buttons";
import "./scss/style.scss";

function App() {
  const currentOperationRef = useRef();
  const previousOperationRef = useRef();
  const previousOperationResultRef = useRef();
  const resultRef = useRef();

  function handleInput (e) {
    e.preventDefault();
    const notValid = /(?=[!@#$^&_=?,`~"';:\\])|(?=[a-zA-z])/g; //проверка на неправильные символы
    notValid.test(currentOperationRef.current.value)
      ? (resultRef.current.innerHTML = "Неправильно!")
      : result();
  };

  const handleValue = (value) => {
    currentOperationRef.current.value += value;
  };

  const handleErase = () => {
    previousOperationRef.current.innerHTML = currentOperationRef.current.value;
    previousOperationResultRef.current.innerHTML = resultRef.current.innerHTML;
    currentOperationRef.current.value="";
    resultRef.current.innerHTML="";
  };

  const handlePlusMinus = () => {
    if (Math.sign(currentOperationRef.current.value)===1){
        currentOperationRef.current.value = '-' + currentOperationRef.current.value;
    }
    else{
        currentOperationRef.current.value=Math.abs(Number(currentOperationRef.current.value))
    }
  };

  const handleEqualSign = () => {
    resultRef.current.innerHTML = result();
    previousOperationRef.current.innerHTML = currentOperationRef.current.value;
    previousOperationResultRef.current.innerHTML = resultRef.current.innerHTML;
    currentOperationRef.current.value="";
    resultRef.current.innerHTML="";
  }

  function result(){
    const reg = /^([-]\d+)|([0-9]*[.])?[0-9]+|[\+-\\\*\(\)\%]/g; //для создания массива операций строка 2+3-5 превращается в массив [2,+,3,-,5]
    let operationList = currentOperationRef.current.value.match(reg)
    function foo(array){
        let temp;
        let current;
        if (array.includes('(')){
            //удаляем операнды в скобках и заменяем результатом их вычисления с помощью вызова исходной функции
            array.splice(array.indexOf('('),array.indexOf(')')-array.indexOf('(')+1,foo(array.slice(array.indexOf('(')+1,array.indexOf(')'))))
        }
        for (let i=0;i<array.length;i++){
          current=0;
          temp=0;
          if (array.includes('/')){
            current=Number(array[array.indexOf('/')-1])/Number(array[array.indexOf('/')+1]);
            temp=current;
            array.splice(array.indexOf('/')-1,3, String(current))//замена элементов(операции) массива вычсилением например [12,/,2,+,2] заменится на [6,+,2]
            
          }
          if (array.includes('*')){
            current=Number(array[array.indexOf('*')-1])*Number(array[array.indexOf('*')+1]);
            temp=current;
            array.splice(array.indexOf('*')-1,3, String(current))
          }
          if (array.includes('%')){
            current=Number(array[array.indexOf('%')-1])%Number(array[array.indexOf('%')+1]);
            temp=current;
            array.splice(array.indexOf('%')-1,3, String(current))
          }
          if (array[i]==='+'){
            current=Number(array[i-1])+Number(array[i+1]);
            temp+=current;
            array.splice(0,i+2)
            array.unshift(String(current))
            i=0
          }
          if (array[i]==='-'){
            current=Number(array[i-1])-Number(array[i+1]);
            temp+=current;
            array.splice(0,i+2)//удаление элементов(операции) массива вычсилением например [2,+,2,+,2] заменится на [+,2]
            array.unshift(String(current))//добавление вычисленного значения в начало [4,+,2]
            i=0
          }
          
        }
        if (array.length===1){
          temp=array.join()
        }
        //array.length===1?temp=array.join():false;
        return temp;
      }
    return resultRef.current.innerHTML = String(foo(operationList));
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <div className="previous-operation" ref={previousOperationRef}></div>
          <div
            className="previous-operation-result"
            ref={previousOperationResultRef}
          ></div>
          <input
            type="text"
            className="current-operation"
            autoFocus
            ref={currentOperationRef}
            onInput={handleInput}
          />
          <div className="current-operation-result" ref={resultRef}></div>
        </div>
        <Buttons handleValue={handleValue} handleErase={handleErase} handlePlusMinus={handlePlusMinus} handleEqualSign={handleEqualSign} />
      </div>
    </div>
  );
}

export default App;
