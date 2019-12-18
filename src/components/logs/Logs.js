import React, {useEffect} from 'react'; // at the begining we are bringing logs to the components, it will change when we used Reduxt
// useEffect so that we can be able to make our requests
// whenever you need to interact with redux from a component we need to bring connect
import {connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions';

const Logs = ({log: {logs, loading}, getLogs}) => {

    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    }, []);

   

    if(loading || logs === null){
        return <Preloader />;
    }
    return (
        <ul className="collection with-header">
        <li className ="collection-header">
        <h4 className="center">System Logs</h4>
        </li>
        {
            !loading && logs.length ===0 ? (<p className= "center"> No Logs to Show</p>)
            :
          logs.map(log => <LogItem log={log} key ={log.id}/>)  
        }
            
        </ul>
    )
}

Logs.propTypes={
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
   // here we are bring the whole state and destructure on the definition above 
    log:   state.log                             // the firs log is the name of the prop can be called anything.  the second refers to the 
                                                 // root reducer which is under reducers/index.js
})
export default connect(mapStateToProps, {getLogs})(Logs); // add it to app.js we will add getLogs so that it can run