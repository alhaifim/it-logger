import React, { useState, useEffect } from 'react'; // at the begining we are bringing logs to the components, it will change when we used Redux
// useState hook will be used to be able to define a state in a functional component
// useEffect so that we can be able to make our requests
import TechItem from './TechItem';

const TechListModal = () => {
  // creating our state
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    // we will use fetch api instead of axios
    const res = await fetch('/Techs'); // as we already have a proxy
    const data = await res.json(); // this will give us data formated in json

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
export default TechListModal; // add it to app.js
