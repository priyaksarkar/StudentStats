import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", 
    "6bca3f37-7fe7-456d-88f2-5959982c3ccb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success",response);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contactus" className='contacts'>
        <div className="contact-col">
            <h3>Send us a message <img src="../src/assets/icons8-messages-48.png" alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below.
            Your feedback, questions, and suggestions are important to us as we strive to
            provide exceptional service to our university community.</p>
            <ul>
                <li><img src="../src/assets/icons8-gmail-48.png" alt="" />studentstats.contact@gmail.com</li>
                <li><img src="../src/assets/icons8-phone-48.png" alt="" />+91 8927572687</li>
                <li><img src="../src/assets/icons8-location-48.png" alt="" />Bhavani Nagar, near Christ University back gate <br /> 
                Suddaguntepalya, Bengaluru, Karnataka - 560029</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number'
                required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'
                required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now 
                <img src="../src/assets/arrow.png" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact