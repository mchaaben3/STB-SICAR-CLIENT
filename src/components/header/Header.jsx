import React from "react";

const Header = () => {
  return (
    <div className="ml-10  -mt-">
      <div className="p-10 flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl">
            Societe d'Investissement a Capital Risque
          </h1>
        </div>
        <div className="mb-2">
          <h1 className="text-8xl">
            PARTNER OF YOUR <br />
            SUCCESS
          </h1>
        </div>
        <div className="mb-8">
          <h5>
            Fondée en 1998. Filiale du groupe STB.
            <br />
            Spécialisée dans le private equity
          </h5>
        </div>
        <div className="mb-2">
          <a href="#about"  className="mx-2 mt-8  bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-4 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
            A PROPOS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
