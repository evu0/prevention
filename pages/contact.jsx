import styles from '../styles/Contact.module.css'
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import isEmail from 'is-email';
import TextQ from '../comps/TextQ';
import TextAreaQuestion from '../comps/TextAreaQuestion';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Intro from '../comps/Intro';

const MySwal = withReactContent(Swal)

const Contact = () => {

    // useState & useRef to store the answers
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    // emailjs function
    const sendEmail = (e) => {  
        emailjs.sendForm(`service_v9345qi`, `template_kwn5d2e`, form.current, `user_sl3UizDBDGOkhJD6VrF1z`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    // popup function
    const successMessage = (title)=>{
        MySwal.fire({
            title: title,
            icon: 'success',
            // color is green
            confirmButtonColor: 'rgb(0, 173, 181)',
            confirmButtonText: 'الرجوع'
        })
    }

    const errorMessage = (title)=>{
        MySwal.fire({
            title: title,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'الرجوع'
        })
    }

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault();

        if(message === ''){
            errorMessage('الرجاء كتابة رسالة')
        }else if(email !== '' && isEmail(email) === false){
            errorMessage('البريد الإلكتروني غير صحيح')
            console.log(`${isEmail(email)}, ${email}, ${message}`)
        }else{
            sendEmail();
            successMessage('تم الإرسال بنجاح!')
        }
    }

    return (  
        <>
        <div className={styles.container}>

            <Intro title={'تواصل معنا'} image={'/contact.svg'}/>

            <div className={styles.section}>

                <form ref={form} onSubmit={handleSubmit} className={styles.form}>

                    <TextQ
                    question="البريد الإلكتروني: (اختياري)"
                    setAnswer={setEmail}
                    required={false}
                    name="email"
                    />

                    <TextAreaQuestion
                    question="الرسالة:"
                    setAnswer={setMessage}
                    required={false}
                    name="message"
                    />

                    <div className={styles.btn}>
                        <button className={styles.submit} type='submit'>
                            إرسال
                        </button>
                    </div>

                </form>

            </div>
            
        </div>
        </>
    );
}
 
export default Contact;