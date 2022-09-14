import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <Footer className="bg-dark text-center text-white">
 
  <div className="container p-4 pb-0">
  
    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" Link="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" link="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" Link="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" Link="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" Link="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1" Link="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
   
  </div>

 <div className="text-center p-3" style={{background:"red"}}>
    © 2020 Copyright:
    <Link className="text-white" link="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
  
</Footer>
    </div>
  )
}

export default Footer