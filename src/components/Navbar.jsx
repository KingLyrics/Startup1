import {MdSearch} from 'react-icons/md'


const Navbar = () => {
  return (
    <nav className='max-w-full flex items-center justify-between py-8 px-10 mx-auto font-Ds'>
        <div>
            <h1 className='text-Dark-blue text-3xl'>Startup3</h1>
        </div>
        <div>
            <ul className='flex items-center'>
                <li className='text-Under-gray mx-2'>Home</li>
                <li className='text-Under-gray mx-2'>Features</li>
                <li className='text-Under-gray mx-2'>Blog</li>
                <li className='text-Under-gray mx-2'>Shop</li>
                <li><MdSearch size={19} className='text-Under-gray mx-3'/></li>
            </ul>
        </div>
        <div>
            <ul className='flex items-center'>
            <li className='text-Under-gray mx-3'>Sign In</li>
                <button className='rounded-full bg-Teal py-2 px-5 text-white'>Sign in</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar