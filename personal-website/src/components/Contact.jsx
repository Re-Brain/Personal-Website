import React from "react";

function Contact(props)
{
    return (
        <div id="contact-container">
            <div>
                <p id="contact-header">Contact</p>
                <form id="contact-form" action="#">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" required/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" required/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject" required/>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="10"placeholder="Content" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
            
        </div>
        
    )
}

export default Contact;