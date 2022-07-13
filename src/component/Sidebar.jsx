import React, {useState} from 'react';
import { Home, Inventory, Info, Contacts,  Dashboard } from '@mui/icons-material';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [open, setOpen] = useState(false);
  return (
    <>
     
        <div className='sidebar'>
            <div className='dashboard' onClick={() => setOpen(!open)}>
                <div className='ae' ><Dashboard fontSize='10' /></div>
                <div className={`${open ? 'open' : 'close'} be `}>Dashboard</div>
            </div>
            
                <div className='side'>
                    <div className='ae'><Home fontSize='10' /></div>
                    <div  className={`${open ? 'open' : 'close'} be `}><Link to='/'>Home</Link></div>
                </div>
                <div className='side'>
                    <div className='ae'><Inventory fontSize='10' /></div>
                    <div className={`${open ? 'open' : 'close'} be `}><Link to='/products'>Products</Link></div>
                </div>
                    <div className='side'>
                    <div className='ae'><Info fontSize='10' /></div>
                    <div className={`${open ? 'open' : 'close'} be `}><Link to='/about'>About</Link></div>
                </div>
                <div className='side'>
                    <div className='ae'><Contacts fontSize='10' /></div>
                    <div className={`${open ? 'open' : 'close'} be `}><Link to='/contact'>Contact</Link></div>
                </div>
            
        </div>
    </>
  )
}

export default Sidebar