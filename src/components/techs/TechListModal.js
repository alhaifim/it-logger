 // at the begining we are bringing logs to the components, it will change when we used Redux
// useState hook will be used to be able to define a state in a functional component
// useEffect so that we can be able to make our requests
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

  const mapStateToProps = state => ({
    tech: state.tech
  });
  
  export default connect(
    mapStateToProps,
    { getTechs }
  )(TechListModal);