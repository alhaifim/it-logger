import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'; // in order to be able to do some error checking on the onSubmit
import '../../App.css';
import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
  // pass it as a prop
  //defining initial state
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  //define onSubmit function
  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and a tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }
      addLog(newLog);
      M.toast({html: `log added by ${tech}`});
      // clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal modelStyle'>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                {' '}
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
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
  );
};
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal); // to app.js
// as we are not bringing any state and we need only action, we put state to null
