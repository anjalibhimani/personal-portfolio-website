import React, { useState } from 'react';
import { Mail, Linkedin, Calendar, Send, User, AlertCircle, CheckCircle } from 'lucide-react';

function Contact() {
    // state to store the submission fields from the user
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    // states to track submission status, validity of user submission, email validdity, validity errors 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [emailValidationError, setEmailValidationError] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);

    // validate email input using regular expressions (regex)
    function validateEmail(email){
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!regex.test(email)) {
            return { isValid: false, error: 'Please enter a valid email address' };
        }

        if (email.length > 254) {
            return { isValid: false, error: 'Email address is too long' };
        } 

        if (email.includes('..')) {
            return { isValid: false, error: 'Email cannot contain consecutive dots' };
        }

        if (email.startsWith('.') || email.endsWith('.')) {
            return { isValid: false, error: 'Email cannot start or end with a dot' };
        }

        return { isValid: true, error: '' };
    };

    // check for input changes in the form, with continous email check
    function handleInputChange(e){
        const { name, value } = e.target;
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'email') {
            if (value.trim() === '') {
                setEmailValidationError('');
                setEmailIsValid(false);
            } else {
                const validation = validateEmail(value);
                setEmailValidationError(validation.error);
                setEmailIsValid(validation.isValid);
            }
        }
    };

    // function so on submission, fields are validated and POST request is sent
    async function handleSubmission(e){
        e.preventDefault();

        const emailValidation = validateEmail(contactForm.email);
        if (!emailValidation.isValid) {
            setEmailValidationError(emailValidation.error);
            return;
        }

        // ensure all fields must have inputs 
        if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const bodyData = new FormData();
            bodyData.append("name", contactForm.name);
            bodyData.append("email", contactForm.email);
            bodyData.append("message", contactForm.message);

            // send data to my AppScript endpoint via POST request
            const response = await fetch('https://script.google.com/macros/s/AKfycbziNTI8gCWuQQ7FSu1J64KkU51FpowOusRrUIGwpzioCFkE688ALwkQkAsuACOQ6Dtk/exec', {
                method: 'POST',
                body: bodyData
            });

            // get response from AppScript 
            const resultText = await response.text();

            // if valid response, then empty fields in the send message form area of website and set status to success
            if (response.ok && resultText.includes("Message sent")) {
                setSubmitStatus('success');
                setContactForm({ name: '', email: '', message: '' });
                setEmailValidationError('');
                setEmailIsValid(false);
            } else {
                throw new Error(resultText || 'Unexpected error');
            }

        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitStatus('error');
        
        // stop loading 
        } finally {
            setIsSubmitting(false);
        }
    };

    // function to take user to my calendly booking page 
    function handleScheduleMeeting() {
        window.open('https://calendly.com/anjali-bhimani0/one-on-one-meeting');
    };

    // display the components in the react web app for UI
    return (
        <div className="max-w-6xl mx-auto">
            
            {/* connect section title + description */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Let's Connect
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology and innovation!
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
        
                {/* contact form setup */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
                    <h3 className="text-2xl font-medium text-white mb-6 flex items-center">
                        <Send className="mr-3 text-cyan-400" size={24} />
                        Get in Touch
                    </h3>
        
                    {/* contact form with all the input field boxes and submit button */}
                    <form onSubmit={handleSubmission} className="space-y-6">

                        {/* full name user input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={contactForm.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                                    placeholder="Your full name"
                                />
                            </div>
                        </div>

                        {/* email user input with validation display */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email Adress
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contactForm.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full pl-10 pr-12 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${emailValidationError
                                        ? 'border-red-500/50 focus:border-red-400/50 focus:ring-1 focus:ring-red-400/50'
                                        : emailIsValid
                                            ? 'border-green-500/50 focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50'
                                            : 'border-gray-600/50 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50'
                                        }`}
                                    placeholder="example_email@gmail.com"
                                />
                                {/* validation icon for user*/}
                                {contactForm.email && (
                                    <div className="absolute right-3 top-3">
                                        {emailValidationError ? (
                                            <AlertCircle className="text-red-400" size={20} />
                                        ) : emailIsValid ? (
                                            <CheckCircle className="text-green-400" size={20} />
                                        ) : null}
                                    </div>
                                )}
                            </div>
                            {/* error message for user with icon */}
                            {emailValidationError && (
                                <p className="mt-2 text-sm text-red-400 flex items-center">
                                    <AlertCircle size={16} className="mr-1" />
                                    {emailValidationError}
                                </p>
                            )}
                        </div>
                            
                        {/* message input box for user to type their text */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={contactForm.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                                placeholder="Enter your message here..."
                            />
                        </div>

                        {/* if email is not valid, or submitting data, cannot press button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || !emailIsValid}
                            className={`w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center ${isSubmitting || !emailIsValid
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} className="mr-2" />
                                    Send Message
                                </>
                            )}
                        </button>

                        {/* show the user I got their message successfully, or that something went wrong while sending me a message */}

                        {submitStatus === 'success' && (
                            <div className="text-green-400 text-center text-sm flex items-center justify-center">
                                <CheckCircle size={16} className="mr-2" />
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="text-red-400 text-center text-sm flex items-center justify-center">
                                <AlertCircle size={16} className="mr-2" />
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                {/* provide user with my other contact options */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
                    <h3 className="text-2xl font-medium text-white mb-6 flex items-center">
                        <User className="mr-3 text-cyan-400" size={24} />
                        Other Ways to Connect
                    </h3>

                    {/* hyperlinks to my linkdin and my email */}
                    <div className="space-y-4">
                        <a
                            href="mailto:anjali.bhimani0@gmail.com"
                            className="flex items-center p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg hover:border-cyan-400/30 hover:bg-gray-600/50 transition-all duration-300 group"
                        >
                            <Mail size={24} className="text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">Email</h4>
                                <p className="text-gray-400 text-sm">anjali.bhimani0@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/anjali-bhimani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg hover:border-cyan-400/30 hover:bg-gray-600/50 transition-all duration-300 group"
                        >
                            <Linkedin size={24} className="text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">LinkedIn</h4>
                                <p className="text-gray-400 text-sm">Connect with me professionally</p>
                            </div>
                        </a>

                        {/* button to open my calendly scheduling page */}
                        <button
                            onClick={handleScheduleMeeting}
                            className="flex items-center p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg hover:border-cyan-400/30 hover:bg-gray-600/50 transition-all duration-300 group w-full text-left"
                        >
                            <Calendar size={24} className="text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">Schedule Meeting</h4>
                                <p className="text-gray-400 text-sm">Book a call to talk one-on-one</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
