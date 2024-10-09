import React, {useState} from 'react'
import Styles from './LetsConnectForm.module.css';
import Classes from './Designs.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../assets/Button';
import * as Yup from 'yup';
import  Modal from '../assets/Modal';

const validationSchema = Yup.object().shape({
  text: Yup.string().required('Text is required').max(100),
  digits: Yup.number()
});

const Tools = () => {
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const modalTitle = "What it does?";
  const modalDescription = "Introducing the Ultimate Password Generator! Passwords these days have become too messy to remember. Uppar case, lower case, numeric, special character😖😰. Secure your accounts with unique, customized passwords generated from any simple name or any such text of any desired length (8 by default). This tool uses Secure Hash Algorithm (SHA-256) from SHA family to produce consistent, alphanumeric, and special character-rich passwords, ensuring maximum security. Simply enter your string and choose the length – our generator does the rest, providing a strong, repeatable password every time. The best part you don't need to remember it just use the same name of you friend you used last time, offcourse same length and you get exact same password every time";
  const generateHash = async (input, length) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const chars = 'ABCDabcd!@#01234GHef$%56';
    let result = '';
    for (let i = 0; i < length; i++) {
      const index = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16) % chars.length;
      result += chars[index];
    }
    return result;
  };

  const handleSubmit = async  (values, { setSubmitting, resetForm }) => {
    
    const cypherText = await generateHash(values.text, values.digits);
    setPassword(cypherText);
    resetForm();
  };
  

  const handleKnowMore = () =>{
    setShowModal(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    console.log(password)
    setIsCopied(true);
  };

  return (
    <div className={Styles.container}>
        <div className={Styles.tagLine} style={{margin: '2rem 0 4rem 0'}}>
            No cavemen ever hunted a bear with his intelligence. But his tools!
        </div>
        <div className={Classes.mainHeading} >
          Password Lookup
        </div>
        <div className={Classes.silentHeading} style={{margin: '0.8rem 0px'}}>
            You think it generate's random text! 😂😂😂 <button onClick = {handleKnowMore} style={{color:"#E8601B", border:"none", backgroundColor:"white", cursor:"pointer"}}>Know More</button>
        </div>
        {!showModal ? <>
        <div className={Styles.form}>
        <Formik
          initialValues={{ text: '', digits: 8}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={Styles.details} style={{margin:"3rem 0px"}}>
                <div>
                  <div>
                    <label className={Styles.labelField} htmlFor="text">
                      Text
                    </label>
                  </div>
                  <Field
                    className={Styles.detailsField}
                    type="text"
                    id="text"
                    name="text"
                  />
                  <ErrorMessage
                    className={Styles.errorMessage}
                    name="text"
                    component="div"
                  />
                </div>

                <div>
                  <div>
                    <label className={Styles.labelField} htmlFor="digits">
                      Digits
                    </label>
                  </div>
                  <Field
                    className={Styles.detailsField}
                    type="number"
                    id="digits"
                    name="digits"
                  />
                  <ErrorMessage
                    className={Styles.errorMessage}
                    name="digits"
                    component="div"
                  />
                </div>
              </div>

              
              <div className={Styles.buttonWrapper}>
                <Button name="Generate Password" type="submit"  />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={Styles.detailsField} style={{margin:"2rem auto 1px", width: '50%'}} onClick={copyToClipboard}>
          {password}
      </div>
      {isCopied ? <div style={{textAlign:"center", color: 'green', fontSize: "small"}}>Copied to clipboard</div>:  <div style={{textAlign:"center", color: 'red', fontSize: "small"}}>Click text to copy</div>}
      </> : <Modal title = {modalTitle} description = {modalDescription} setShowModal = {setShowModal}/>}
    </div>
  )
}

export default Tools;