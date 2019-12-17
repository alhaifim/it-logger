import React, {useState, useEffect} from 'react'; // at the begining we are bringing logs to the components, it will change when we used Redux
// useState hook will be used to be able to define a state in a functional component
// useEffect so that we can be able to make our requests
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
    // creating our state
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true);
        // we will use fetch api instead of axios 
        const res = await fetch('/logs'); // as we already have a proxy
        const data = await res.json(); // this will give us data formated in json

        setLogs(data);
        setLoading(false);
    }

    if(loading){
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
export default Logs; // add it to app.js