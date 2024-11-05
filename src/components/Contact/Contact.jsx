import React, { useState } from "react";

function Contact(props)
{
    // State to track form data
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Content: ""
    });

    // State to track success notification
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    // State to track alert notification
    const [showAlertNotification, setShowAlertNotification] = useState(false);

    // State to track loading notification
    const [showLoad, setShowLoad] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        setShowSuccessNotification(false);
        setShowAlertNotification(false);

        // Check if all fields are filled
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== "");

        if (!allFieldsFilled) {
            setShowAlertNotification(true)
            return;
        }

        setShowLoad(true)
        
        // Send form data to server
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_key: "ae4f755e-4e91-4f0e-8ccb-1d90a03f5a1f",
                    ...formData
                })
            });

            setShowLoad(false)

            // Reset form data if submission is successful
            if (response.ok) {
                setShowSuccessNotification(true);
                setFormData({
                    Name: "",
                    Email: "",
                    Subject: "",
                    Content: ""
                });
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const closeAlert = () => {
        setShowAlertNotification(false)
    }

    const closeSuccess = () => {
        setShowSuccessNotification(false)
    }

    return (
        <div id="contact-container">
            <div>
                <p id="contact-header">Contact</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value="ae4f755e-4e91-4f0e-8ccb-1d90a03f5a1f"/>
                    {showSuccessNotification && (
                        <div className="notification">
                            <p>Submission successful!</p>
                            <button onClick={closeSuccess}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    )}
                    {showAlertNotification && (
                        <div className="notification">
                            <p>Please fill in all fields!</p>
                            <button onClick={closeAlert}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    )}
                    {showLoad && (
                        <div id="loading">
                            <div className="load-dot"></div>
                            <div className="load-dot"></div>
                            <div className="load-dot"></div>
                        </div>
                    )}
                    <div className="form-group">
                        <input type="text" className="form-control" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="Subject" placeholder="Subject" value={formData.Subject} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="Content" rows="10"placeholder="Content" value={formData.Content} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;