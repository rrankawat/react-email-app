import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MyEmail = () => {
  const { search } = useLocation();

  const queryString = new URLSearchParams(search);
  const src = queryString.get('src');

  useEffect(() => {
    sendEmail();
  }, []);

  const sendEmail = async () => {
    let data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { message: src },
    };

    try {
      await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, data);
    } catch (err) {
      console.log(err);
    }
  };

  return <h1 style={{ textAlign: 'center' }}>Please Reload</h1>;
};

export default MyEmail;
