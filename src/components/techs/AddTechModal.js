import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; // in order to be able to do some error checking on the onSubmit
import '../../App.css';

const AddTechModal = () => {
  //defining initial state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  //define onSubmit function
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name of the tech' });
    } else {
      console.log(firstName, lastName);
      // clear fields
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              Last Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
          >
            {' '}
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal; // to app.js