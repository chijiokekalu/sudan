// import React, { useState } from 'react';
// import DropdownMenu from './DropdownMenu';
// import "../styles/Navbar.css";

// function Navbar() {
//     const [dropdown, setDropdown] = useState(false);

//     return (
//         <nav className="navbar">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <a href="/" className="nav-link">Home</a>
//                 </li>
//                 <li className="nav-item" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
//                     <a href="#" className="nav-link">Who We Are</a>
//                     {dropdown && <DropdownMenu />}
//                 </li>
//                 <li className="nav-item" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
//                     <a href="#" className="nav-link">Our Work</a>
//                     {dropdown && <DropdownMenu />}
//                 </li>
//                 <li className="nav-item" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
//                     <a href="#" className="nav-link">Join Us</a>
//                     {dropdown && <DropdownMenu />}
//                 </li>
//                 <li className="nav-item">
//                     <a href="/donate" className="nav-link">Donate</a>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
