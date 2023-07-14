import { Fragment } from 'react';
import {Outlet} from 'react-router-dom'

import Navbar from '../components/UI/Navbar';

const Root = () => {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>  
        </Fragment>  
    )
}

export default Root;