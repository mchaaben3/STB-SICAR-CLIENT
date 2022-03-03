import React from "react";
import { Sec_8, svg_8, svg_9 } from "../etat-desprit/Svg";
const SectionEight = () => {
  return (
    <div className=" flex justify-center  mx-10 ">
      <div class=" grid grid-flow-row-dense grid-rows-6 md:grid-cols-3 md:grid-rows-3 ">
        <div class="md:col-span-2 ">
          {" "}
          <div className="flex flex-row">
            <div className="border-indigo-500 border-4 w-0 h-8 mr-2 "></div>
            <h1 className="text-lg  font-bold uppercase">Délai</h1>
        
          </div>
          <p className="text-justify text-sm ml-6 mt-1 ">
            Les investisseurs bénéficient de l’avantage fiscal l’année de
            libération du fonds.
            <br />
            Néanmoins l’obligation d’utilisation des montants déposés est de 2
            ans à partir de l’année de libération.
          </p>
        </div>
        <div className="p-4">{Sec_8}</div>
       
        <div class="md:col-span-2 ">
          {" "}
          <div className="flex flex-row">
            <div className="border-indigo-500 border-4 w-0 h-8 mr-2 "></div>
            <h1 className="text-lg  font-bold uppercase">Blocage des fonds</h1>
            <br></br>
          </div>
          <p className="text-justify text-sm ml-6 mt-1 ">
            Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à
            partir du 1er janvier de l’année qui suit celle du dépôt des fonds.
          </p>
        </div>
        <div>{svg_8}</div>
        <div class="md:col-span-2 mt-10">
          {" "}
          <div className="flex flex-row">
            <div className="border-indigo-500 border-4 w-0 h-8 mr-2 "></div>
            <h1 className="text-lg  font-bold uppercase">Rémunération </h1>
            <br></br>
          </div>
          <p className="text-left text-sm  ml-6 mt-1 ">
            Le bailleur de fonds bénéficiera également conformément à la
            convention Fonds géré :
            <ul className=" text-sm">
              <li>
     
                De la rémunération des fonds à des conditions très avantageuses
                jusqu’à leur utilisation dans des projets ayant obtenu au
                préalable son accord de participation
              </li>

              <li> Du produit des intérêts des OCA/CCA souscrits</li>
              <li> Des revenus du portefeuille d’investissement</li>
              <li> Des dividendes distribués</li>
            </ul>
          </p>
        </div>
        <div>{svg_9}</div>
      </div>
    </div>
  );
};

export default SectionEight;
