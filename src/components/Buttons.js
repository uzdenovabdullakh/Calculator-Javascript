import React, { useRef } from 'react';

function Buttons(props) {
  const {handleValue, handleErase, handlePlusMinus, handleEqualSign} = props;
  
  const numbersRef = useRef()
  const eraseRef = useRef()
  const plusMinusRef = useRef()
  const percantageRef = useRef()
  const divideRef = useRef()
  const multiplicationRef = useRef()
  const subtractionRef = useRef()
  const plusRef = useRef()
  const dotRef = useRef()
  const equalSignRef = useRef()

  function handleClickNumber(e){
    e.preventDefault();
    handleValue(e.target.innerHTML);
    //console.log(document.querySelectorAll('.number'));
  }

  function plus (e){
    e.preventDefault();
    handleValue('+');
  }

  function subtraction(e) {
    e.preventDefault();
    handleValue('-')
  }

  function multiplication (e) {
    e.preventDefault();
    handleValue('*')
  }

  function divide (e) {
    e.preventDefault();
    handleValue('/')
  }

  function dot (e) {
    e.preventDefault();
    handleValue('.')
  }

  function percantage (e)  {
    e.preventDefault();
    handleValue('%')
  }

  function erase(e){
    e.preventDefault();
    handleErase();
  }

  function plusMinus(e){
    e.preventDefault();
    handlePlusMinus();
  }

  function equalSign(e){
    e.preventDefault();
    handleEqualSign();
  }

  return (
    <div className="buttons-container">
        <div className="buttons">
                <div className="erase" type="button" ref={eraseRef} onClick={erase}>C</div>
                <div className="plus-minus" type="button" ref={plusMinusRef} onClick={plusMinus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <rect x="4.72354" y="20.4208" width="21.841" height="2" transform="rotate(-65.5093 4.72354 20.4208)" fill="#898989"/>
                        <path d="M2.50048 6.18232H0.108307V4.79771H2.50048V2.28024H4.10088V4.79771H6.5436V6.18232H4.10088V8.71553H2.50048V6.18232Z" fill="#898989"/>
                        <path d="M14.9785 14.0786H21.4138V16.0786H14.9785V14.0786Z" fill="#898989"/>
                    </svg>
                </div>
                <div className="percantage" type="button" ref={percantageRef} onClick={percantage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                        <path d="M3.03716 8.40781C2.12257 8.40781 1.42553 8.197 0.946043 7.77538C0.466552 7.35375 0.226807 6.79049 0.226807 6.08559V2.53803C0.226807 1.80678 0.457673 1.23363 0.919405 0.818598C1.38114 0.403562 2.08705 0.196045 3.03716 0.196045C3.9695 0.196045 4.67098 0.406856 5.14159 0.828479C5.6122 1.24351 5.84751 1.81336 5.84751 2.53803V6.08559C5.84751 6.79049 5.60776 7.35375 5.12827 7.77538C4.64878 8.197 3.95174 8.40781 3.03716 8.40781ZM3.03716 7.23188C3.6676 7.23188 3.98282 6.84319 3.98282 6.06583V2.55779C3.98282 2.20864 3.91622 1.92536 3.78303 1.70796C3.65872 1.48397 3.4101 1.37198 3.03716 1.37198C2.65534 1.37198 2.40228 1.48397 2.27796 1.70796C2.15365 1.92536 2.09149 2.20864 2.09149 2.55779V6.06583C2.09149 6.38863 2.15809 6.66532 2.29128 6.8959C2.43335 7.11988 2.68198 7.23188 3.03716 7.23188Z" fill="#898989"/>
                        <path d="M12.1408 18.8548C11.2262 18.8548 10.5291 18.644 10.0497 18.2224C9.57016 17.8008 9.33041 17.2375 9.33041 16.5326V12.9851C9.33041 12.2538 9.56128 11.6807 10.023 11.2656C10.4847 10.8506 11.1907 10.6431 12.1408 10.6431C13.0731 10.6431 13.7746 10.8539 14.2452 11.2755C14.7158 11.6905 14.9511 12.2604 14.9511 12.9851V16.5326C14.9511 17.2375 14.7114 17.8008 14.2319 18.2224C13.7524 18.644 13.0553 18.8548 12.1408 18.8548ZM12.1408 17.6789C12.7712 17.6789 13.0864 17.2902 13.0864 16.5129V13.0048C13.0864 12.6557 13.0198 12.3724 12.8866 12.155C12.7623 11.931 12.5137 11.819 12.1408 11.819C11.7589 11.819 11.5059 11.931 11.3816 12.155C11.2573 12.3724 11.1951 12.6557 11.1951 13.0048V16.5129C11.1951 16.8357 11.2617 17.1124 11.3949 17.3429C11.537 17.5669 11.7856 17.6789 12.1408 17.6789Z" fill="#898989"/>
                        <rect x="0.226807" y="17.6529" width="21.841" height="2" transform="rotate(-53.0606 0.226807 17.6529)" fill="#898989"/>
                    </svg>
                </div>
                <div className="divide" type="button" ref={divideRef} onClick={divide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M0.283142 9.41522V8.37967C0.283142 7.76112 0.740253 7.25965 1.30417 7.25965H15.2621C15.826 7.25965 16.2831 7.76108 16.2831 8.37967V9.41522C16.2831 10.0338 15.826 10.5352 15.2621 10.5352H1.30417C0.740286 10.5352 0.283142 10.0338 0.283142 9.41522Z" fill="#745FF2"/>
                        <path d="M8.28315 4.95147C9.40264 4.95147 10.3102 4.04394 10.3102 2.92445C10.3102 1.80496 9.40264 0.89743 8.28315 0.89743C7.16366 0.89743 6.25613 1.80496 6.25613 2.92445C6.25613 4.04394 7.16366 4.95147 8.28315 4.95147Z" fill="#745FF2"/>
                        <path d="M8.28315 16.8974C9.40264 16.8974 10.3102 15.9899 10.3102 14.8704C10.3102 13.7509 9.40264 12.8434 8.28315 12.8434C7.16366 12.8434 6.25613 13.7509 6.25613 14.8704C6.25613 15.9899 7.16366 16.8974 8.28315 16.8974Z" fill="#745FF2"/>
                    </svg>
                </div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>7</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>8</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>9</div>
                <div className="multiplication" type="button" ref={multiplicationRef} onClick={multiplication}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M10.1616 8.89632L15.8902 3.18103C16.1411 2.93017 16.282 2.58992 16.282 2.23515C16.282 1.88037 16.1411 1.54013 15.8902 1.28926C15.6393 1.0384 15.2991 0.897461 14.9443 0.897461C14.5895 0.897461 14.2493 1.0384 13.9984 1.28926L8.28315 7.01787L2.56786 1.28926C2.317 1.0384 1.97675 0.897461 1.62197 0.897461C1.2672 0.897461 0.926951 1.0384 0.676086 1.28926C0.425221 1.54013 0.284287 1.88037 0.284287 2.23515C0.284287 2.58992 0.425221 2.93017 0.676086 3.18103L6.4047 8.89632L0.676086 14.6116C0.551218 14.7355 0.452107 14.8828 0.384471 15.0452C0.316836 15.2075 0.282013 15.3816 0.282013 15.5575C0.282013 15.7334 0.316836 15.9075 0.384471 16.0698C0.452107 16.2322 0.551218 16.3795 0.676086 16.5034C0.799934 16.6283 0.947281 16.7274 1.10963 16.795C1.27197 16.8626 1.4461 16.8975 1.62197 16.8975C1.79784 16.8975 1.97197 16.8626 2.13432 16.795C2.29666 16.7274 2.44401 16.6283 2.56786 16.5034L8.28315 10.7748L13.9984 16.5034C14.1223 16.6283 14.2696 16.7274 14.432 16.795C14.5943 16.8626 14.7685 16.8975 14.9443 16.8975C15.1202 16.8975 15.2943 16.8626 15.4567 16.795C15.619 16.7274 15.7664 16.6283 15.8902 16.5034C16.0151 16.3795 16.1142 16.2322 16.1818 16.0698C16.2495 15.9075 16.2843 15.7334 16.2843 15.5575C16.2843 15.3816 16.2495 15.2075 16.1818 15.0452C16.1142 14.8828 16.0151 14.7355 15.8902 14.6116L10.1616 8.89632Z" fill="#745FF2"/>
                    </svg>
                </div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>4</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>5</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>6</div>
                <div className="subtraction" type="button" ref={subtractionRef} onClick={subtraction}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none">
                        <path d="M0.283142 0.223419H16.2831V3.57142H0.283142V0.223419Z" fill="#745FF2"/>
                    </svg>
                </div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>1</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>2</div>
                <div className="number" type="button" ref={numbersRef} onClick={handleClickNumber}>3</div>
                <div className="plus" type="button" ref={plusRef} onClick={plus}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M6.23079 10.5991H0.283142V7.1566H6.23079V0.89743H10.2098V7.1566H16.2831V10.5991H10.2098V16.8974H6.23079V10.5991Z" fill="#745FF2"/>
                    </svg>
                </div>
                <div className="zero number" type="button" ref={numbersRef} onClick={handleClickNumber}>0</div>
                <div className="dot" type="button" ref={dotRef} onClick={dot}>.</div>
                <div className="equal-sign" type="button" ref={equalSignRef} onClick={equalSign}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M0.283142 0.965424H16.2831V4.24142H0.283142V0.965424ZM0.283142 7.58942H16.2831V10.8294H0.283142V7.58942Z" fill="#F0F0F3"/>
                    </svg>
                </div>
        </div>
    </div>
  );
}

export default Buttons;