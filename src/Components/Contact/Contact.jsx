import react from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () =>{
    return(
        <div className="contact">
					<div className="contact-col">
						<h3>Send Us Message <img src={msg_icon}  alt=""/></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit vero dolor totam ab. Hic nulla dolorem illum, ipsum eveniet quo blanditiis vel facilis eaque quam minima quidem cupiditate quaerat! lorem skfmdskfasdadsad</p>
						<ul>
							<li><img src={mail_icon}  alt=""/>mail@mail.com</li>
							<li><img src={phone_icon}  alt=""/>08123829432894</li>
							<li><img src={location_icon}  alt=""/>Jl Affandi Gg Mawar No 10A<br/>Kab Sleman, Yogyakarta</li>
						</ul>
					</div>
					<div className="contact-col">
						<form action="">
							<label>Your Name</label>
							<input type="text" name="name" placeholder='Enter Your Name' required />
							<label>Your Phone</label>
							<input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
							<label>Write Your Message</label>
							<textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
							<button type='submit' className="btn dark-btn">Submit now <img src={white_arrow} /></button>
						</form>
					</div>
        </div>
    )
}

export default Contact