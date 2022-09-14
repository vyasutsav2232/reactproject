

import './Contact.css';

function Contact() {
  return (
    <div>
    <div className="cont">
     
      <form >
        <div className="rows">
          <div className="col-25">
            <label for="fname">First Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          </div>
        </div>
        <div className="rows">
          <div className="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          </div>
        </div>
        <div className="rows">
          <div className="col-25">
            <label for="country">Country</label>
          </div>
          <div className="col-75">
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="rows">
          <div className="col-25">
            <label for="subject">Subject</label>
          </div>
          <div className="col-75">

          </div>
        </div>
        <div className="rows">
          <div className="box">
         <button className='btns'>submit</button>
          </div>
        </div>
      </form>
   
    </div>

   </div>

  );
}

export default Contact