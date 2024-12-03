import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <div className='bg-contactBg my-16'>
            <div className='grid grid-flow-row md:grid-cols-2 gap-6 max-w-7xl w-11/12 mx-auto'>
                <div>
                    <img src="https://i.ibb.co.com/dr5J5h5/coffee-logo.png" alt="" />
                    <h2 className='text-3xl font-bold my-6 text-primary'>Espresso Emporium</h2>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-4 items-center my-6'>
                        <Link className='text-2xl'><FaFacebook></FaFacebook></Link>
                        <Link className='text-2xl'><FaInstagram></FaInstagram></Link>
                        <Link className='text-2xl'><FaTwitter></FaTwitter></Link>
                        <Link className='text-2xl'><FaLinkedin></FaLinkedin></Link>
                    </div>
                    <div className='flex flex-col gap-4 mt-8'>
                        <h2 className='text-3xl font-bold text-primary'>Get In Touch</h2>
                        <div className='flex gap-2 items-center'>
                            <span><FaPhone></FaPhone></span>
                            <span>01751166818</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span><IoMdMail /></span>
                            <span>raffian2644@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold mb-6 text-primary'>Contact Us</h2>
                    <form className='flex flex-col gap-6 w-full'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full " />
                        <textarea className="textarea textarea-bordered resize-none" placeholder="Message"></textarea>
                        <input type="submit"  value="Send Message" className="btn btn-outline w-full md:max-w-40" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;