// pages/index.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"


const ComingSoon = () => {
  const [email, setEmail] = useState('');

  
  async function onSubmit(e) {
    e.preventDefault();
    if(!email){
      toast.info("Please Enter Yor Email")
      return
    }
    try {
      const res = await axios.post('https://momina.onrender.com/api/subscribe', { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.status === 200) {
        setEmail('');
        toast.success('Thank you for subscribing!');
      }
    } catch (error) {
      console.log('Error>>', error);
    }
  } 
  return (
    <>
      <div className="template-password">
        <div className="container">
          <div id="container" className="text-center">
            <div>
              <div id="login">
                <div>
                  <div className="logo mb-4">
                    <a href="#">
                      <img src="../assets/logo.png" alt="Momina_Designer_fashion" className="img-fluid" height={200} width={200} />
                    </a>
                  </div>
                  <h2 className="mb-3">Momina Designer Launching On 1<sup style={{fontSize:"12px",position:"relative" , top:-16}}>st</sup> August with Mega Sale</h2>
                 
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <form onSubmit={onSubmit} className="theme-form">
                      <div className="col-md-12 mt-2">
                        <h3>Enter Your Email: </h3>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12">
                          <input
                          style={{backgroundColor:"white",color:"black"}}
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email To Get Notified"
                          />
                        </div>
                        <div className="col-md-12">
                          <div className="actions">
                            <button type="submit" className="btn btn-solid">Notify me</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div id="powered">
                  <p>© 2024, Powered by Momina Designer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ComingSoon;
