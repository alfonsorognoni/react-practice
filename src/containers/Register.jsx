import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(form);
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='signIn'>
      <section className='signIn__container'>
        <h2>Regístrate</h2>
        <form className='signIn__container--form' onSubmit={handleSubmit}>
          <input aria-label='nombre' type='text' className='input' placeholder='Nombre' name="name" onChange={handleInput} />
          <input aria-label='correo' type='text' className='input' placeholder='Correo' name="email" onChange={handleInput} />
          <input aria-label='contraseña' type='password' className='input' placeholder='Contraseña' name="password" onChange={handleInput} />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <p className='signIn__container--login'><Link to='/login'>Iniciar sesión</Link></p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
}

// export default Register;
export default connect(null, mapDispatchToProps)(Register);
