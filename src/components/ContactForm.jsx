import React from "react";
import emailjs from "emailjs-com";

const initData = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [data, setData] = React.useState(initData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    emailjs
      .sendForm('service_3uhw4po', 'template_7ekcztl', e.target, 'user_aPW8RWjmaOslibDfNj4ci')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setData(initData);
  }

  const { name, email, message } = data;

  return (
    <div className='contactFormParent'>
      <form className="form" onSubmit={onSubmitHandler}>
        <h1 style={{color:"#ff4a57"}}>Drop a mail</h1>
        <input
          placeholder="Name"
          name='name'
          onChange={onChangeHandler}
          value={name}
        />
        <input
          placeholder="Email"
          name='email'
          onChange={onChangeHandler}
          value={email}
        />
        <textarea
          placeholder="Message"
          value={message}
          name="message"
          onChange={onChangeHandler}
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ContactForm;