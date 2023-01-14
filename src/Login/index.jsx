import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import { Link } from 'react-router-dom';

const Eroorlu = Yup.object().shape({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Dogru daxil edin'),
  email: Yup.string().email('Invalid email address').required('Dogru daxil edin'),
})

function Login() {
  return (
    <section className='LoginSec'>
      <div className='Image'>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="LOGO" />
      </div>
      <div className='FormikDiv'>
        <h3>Facebook'a Giriş Yap</h3>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validationSchema={Eroorlu}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email"></label>
              <Field className={`normal ${errors.email && touched.email && "error"}`} name="email" type="email" placeholder="E-posta" />
              <ErrorMessage name='email' />

              <label htmlFor="firstName"></label>
              <Field className={`normal ${errors.firstName && touched.firstName && "error"}`} name="firstName" type="password" placeholder="Şifre" />
              <ErrorMessage name='firstName' />

              <button type="submit">Giriş Yap</button>
            </Form>
          )
          }
        </Formik >

        <div className='Bottom'>
          <a href="!№">Hesabı mı unuttun?</a>
          <p>veya</p>
          <Link className='Btn' to={"/createaccount"}>Yeni Hesap Oluştur</Link>
        </div>
      </div >
    </section >
  )
}

export default Login