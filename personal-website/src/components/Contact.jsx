import React from "react";

function Contact(props)
{
    return (
        <div id="contact-container">
            <div>
                <p id="contact-header">Contact</p>
                <form id="contact-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject"/>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="10"placeholder="Content"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
        
    )
}

export default Contact;