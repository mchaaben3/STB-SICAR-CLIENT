import { motion } from "framer-motion-3d";
import React from "react";
import AnimatedNumber from "react-animated-number/build/AnimatedNumber";

function About() {
  const chiffres = [
    { number: 23, text: " ANS EXPÉRIENCES" },
    { number: 128, text: "  MTD Sous Gestion" },
    { number: 300, text: "  Investissements en portefeuille" },
    { number: 58, text: " Fonds gérés" },
    { number: 91, text: "Sorties intégrales réalisées" },
    { number: 24, text: "Régions" },
    { number: 1750, text: "emplois créés durant les 5 derniéres années" },
  ];
  const aboutus = ` La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
  C'est une société d’investissement à capital risque qui a pour
  objectif la participation, pour son propre compte ou pour le compte
  de bailleurs de fonds au renforcement des opportunités
  d’investissement et des fonds propres des entreprises. Elle permet
  de procurer aux entreprises les fonds nécessaires à leur
  développement et à leur croissance avec obligation de sortie.`

const ourpicture = 'http://stbnet.stb.com.tn/img/slide111.png'
  return (
    <>
      <div className="grid grid-cols-2   grid-flow-row-dense gap-4 w-full mb-10" id="about">
        <div className="grid grid-cols-2 col-span-2 md:grid-cols-7  gap-4 mx-4">
          {chiffres.map((e,i) => (
            <div className="flex space-x-4" key={i}>
              <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-md">
                <div>
                  <h1 className="uppercase">
                    <center>
                      <AnimatedNumber
                        value={e.number}
                        style={{
                          fontSize: 50,
                          fontWeight:900
                        }}
                        duration={5000}
                        formatValue={(n) => n.toFixed(0)}
                      />{" "}
                      <br /> <h1 className="text-sm">{e.text}</h1>
                    </center>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2   gap-4 w-full ">
        <div className="grid-cols-2 pl-10 ">
          <h1 className="text-4xl font-bold mb-10">A PROPOS</h1>

          <p className="text-sm md:text-lg md:text-justify leading-sm md:leading-10 sm:w-10/12 pl-4">
           {aboutus}
          </p>
        </div>
           <img
          src={ourpicture}
          alt="about"
          className="border border-blue-800 border-8 pt-6 pl-6  border-r-0  border-b-0  border-solid"
        />
    
        </div>
      
     
    </>
  );
}
export default About;
