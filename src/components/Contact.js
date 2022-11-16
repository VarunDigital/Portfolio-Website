import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_bc5lmu5',
            'template_fquecwr',
             refForm.current,
            '6bEw2OPxyUNylBdik'
        )
        .then(
            ()=>{
                alert('Message sucessfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send message, please try again')
                console.log(error.text)
            }
        )
    }
  return (
    <div className='contact-us'>
        <h2 className='contact-heading'>Contact Me</h2>
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
            {/* <label>Name :</label>
            <input type="text" name='user_name' className='text my-2 mx-3' placeholder='name' /><br/>
            <label>Email :</label>
            <input type="email" name='user_email' className='email my-2 mx-3' placeholder='email' /><br/>
            <label>Message :</label>
            <input type="text" name='message' className='message my-2 mx-3' placeholder='comment'/><br/>
            <input type="submit" value='send' />
             */}
            
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput" className="form-label">Name</label>
                    <input type="text" name='user_name' className="form-control" placeholder="XYZ"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" name='user_email' className="form-control"placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea type="text" name='message' className="form-control" rows="3"></textarea>
                    <button type='submit' className="btn btn-primary my-2" value='send'>Send</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}