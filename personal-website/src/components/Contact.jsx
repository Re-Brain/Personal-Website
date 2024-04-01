import React from "react";

function Contact(props)
{
    return (
        <div id="contact-container">
            <div>
                <p id="contact-header">Contact</p>
                <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="ae4f755e-4e91-4f0e-8ccb-1d90a03f5a1f"/>
                    <div class="form-group">
                        <input type="text" class="form-control" name="Name" placeholder="Name" required/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="Email" placeholder="Email" required/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="Subject" placeholder="Subject" required/>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" name="Content" rows="10"placeholder="Content" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
            
        </div>
        
    )
}

export default Contact;