import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='container'>
    <div style={styles.jumbotron} className='jumbotron mt-5'>
      <h1 style={styles.title} className='display-4'>Welcome!</h1>
      <p style={styles.subtitle} className='lead'>"Discover our user-friendly authentication system, ensuring your security without any hassle!</p>
      <hr className='my-4' />
      <p style={styles.description}>Click the Log In button</p>
      <Link style={styles.button} className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
    </div>
  </div>
);

const styles = {
  jumbotron: {
    backgroundColor: '#3498db', 
    color: '#ffffff', 
    fontFamily: 'Arial, sans-serif',
    borderRadius: '10px', 
    padding: '20px', 
  },
  title: {
    fontSize: '2.5em', 
    fontWeight: 'bold', 
  },
  subtitle: {
    fontSize: '1.2em', 
  },
  description: {
    fontSize: '1.1em', 
  },
  button: {
    fontSize: '1.2em', 
  },
};

export default Home;
