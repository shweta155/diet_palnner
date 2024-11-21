// import React, { useState } from 'react';
// import './ContactPage.css';

// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Thank you for contacting us!');
//         setFormData({ name: '', email: '', message: '' });
//     };

//     return (
//         <div className="contact-container">
//             <h1>Contact Us</h1>
//             <form onSubmit={handleSubmit} className="contact-form">
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Message:</label>
//                     <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Enter your message"
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="submit-btn">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactPage;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Submit Successful!'); // Display the toast message
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {/* Toast Container to render toasts */}
            <ToastContainer />
        </div>
    );
};

export default ContactPage;
