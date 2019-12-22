import React from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='signIn'>
    <section className='signIn__container'>
      <h2>Regístrate</h2>
      <form className='signIn__container--form'>
        <input aria-label='nombre' type='text' className='input' placeholder='Nombre' />
        <input aria-label='correo' type='text' className='input' placeholder='Correo' />
        <input aria-label='contraseña' type='password' className='input' placeholder='Contraseña' />
        <button type='button' className='button'>Registrarme</button>
      </form>
      <p className='signIn__container--login'><Link to='/login'>Iniciar sesión</Link></p>
    </section>
  </section>
);

export default Register;
