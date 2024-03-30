import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-12 px-5">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">MiniStore</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:text-gray-300">Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Link 2</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">QUICK LINKS</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:text-gray-300">HOME</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ABOUT</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">SHOP</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">BLOGS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">CONTACT</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">HELP & INFO HELP</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:text-gray-300">TRACK YOUR ORDER</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">RETURNS POLICIES</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">SHIPPING + DELIVERY</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">CONTACT US</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">FAQS</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold">CONTACT US</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:text-gray-300">Do you have any queries or suggestions?</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">yourinfo@gmail.com</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">If you need support? Just give us a call.</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">+55 111 222 333 44</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </footer>  )
}

export default Footer