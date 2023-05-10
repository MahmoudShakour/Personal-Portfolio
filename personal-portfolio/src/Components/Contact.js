import "../Styles/Contact.css";

function Contact(){
    return(
        <div id="contact" className="contact" >
            <div className="contact-title" >
                Contact me
            </div>

            <div className="contact-text" >
                If you have an opportunity to share, or would like to discuss anything,
                you can leave your details below.
            </div>
            
            <div className="contact-body" >
                <div className="personal-info">
                    <div>
                        <div className="info-title" >Address</div>
                        <div className="info" >dekernes,mansoura,Egypt</div>
                    </div>
                    <div>
                        <div className="info-title" >Email</div>
                        <div className="info">mahmoud.ali1842001@gmail.com</div>
                    </div>
                </div>
                <form action="" className="contact-form" >
                    <div className="form-element" >
                        <label htmlFor="name">Name *</label>
                        <input id="name" type="text" required/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">email *</label>
                        <input id="email" type="text" required />
                    </div>
                    <div className="form-element" >
                        <label htmlFor="message">message *</label>
                        <textarea name="message" id="message" cols="10" rows="5" required></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;