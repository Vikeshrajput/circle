import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="py-3 grid place-items-center bg-white w-100">
                <ul className='flex gap-4 text-2xl text-purple-800'>
                    <li><Link to="/circle">Home</Link></li>
                    <li><Link to="/circle/users">Users</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;