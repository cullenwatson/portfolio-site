import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_im2hosk', 'template_aoqrsf4', form.current, 'EqtVpAdnAQVJHn7RE')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            swal("Sent!", "Successfully sent message!", "success");
        }, (error) => {
            console.log(error.text);
            swal("Failed!", "Successfully sent message!", "error");
        });
    };

  return (

    

    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl fond-bold inline border-b-4 border-teal-700 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - cgwatson@smu.edu</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder="Message"></textarea>

            <button className='text-white border-2 hover:bg-teal-600 hover:border-teal-700 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Collaborate</button>
        </form>
        
        
        
    </div>

    
  )
}

export default Contact