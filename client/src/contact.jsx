import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../src/contact.css';

export default function Contact() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Here you can handle form data if needed

        navigate('/'); // Redirect to the homepage
    };

    return (
        <>
            <p style={{ color: '#ff7b54', fontSize: '2rem', fontWeight: 'bold' }}>Contact</p>
            <form id="ffp" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                <label htmlFor="myFName"> *First Name: </label>
                <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />

                <label htmlFor="myLName"> *Last Name: </label>
                <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />

                <label htmlFor="myEmail"> *Email: </label>
                <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                {/* New Message Box */}
                <label htmlFor="myMessage"> Message: </label>
                <textarea id="myMessage" name="myMessage" rows="4" required="required" style={{ width: '90%', maxWidth: '400px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
                <br /><br />

                <input type="submit" className="submit" value="Submit" /> <br />
            </form> <br />
            <p style={{ color: '#ff7b54', fontWeight: 'bold' }}>ARJUN MUNGATH</p>
            <p style={{ color: '#ff7b54' }}><i>Call me on: <strong>437 3355841</strong></i></p>
            <p style={{ color: '#ff7b54' }}>https://linkedin.com/in/arjun-chandran-m/</p>
            <p style={{ color: '#ff7b54' }}>Email: arjunchandrandeli@gmail.com</p>
        </>
    );
}
