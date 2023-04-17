import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="m-8">
        This is Home {user && <span>{user.displayName}</span>}
      </h2>

      <div className="bg-gray-100 flex flex-col min-h-screen mt-16">
        <header className="bg-white border-b border-gray-200">
          <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
            <a href="#" className="text-gray-800 font-semibold text-lg">
              My Website
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to my website
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nunc vitae neque consequat tincidunt. Vestibulum ac dolor euismod,
              commodo lorem vitae, mollis ex. Nulla facilisi. Sed vel ante eget
              risus aliquet malesuada.{" "}
            </p>
            <a
              href="#"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 text-center text-gray-600">
            © 2023 My Website. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
