
import { React } from "react";
import SectionEight from "../components/section8/SectionEight";
const ProgressBar = (props) => (
  <div className="bg-white h-8 w-full">
    <div
      className="bg-[#52AFE3] h-full"
      style={{ width: `${props.value}%` }}
    ></div>
  </div>
);

const Fiscalite = () => {

  return (
    <div
      className="bg-cover bg-no-repeat mb-10"
      style={{
        backgroundImage: `url(/bg.png)`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-black/50 backdrop-blur-xl text-white w-full">
        <div className="p-10 md:p-20">
          <h1 className="font-light text-4xl"> OPTIMISEZ VOTRE FISCALITE</h1>

          <p className="font-light text-lg py-10">
            Les investisseurs qui désirent optimiser leur fiscalité peuvent
            confier tout ou partie de leurs bénéfices imposables à la STB SICAR
            sous forme de fonds géré.
          </p>

          <p className="font-light text-lg py-5">
            La règlementation en vigueur leur permet d’opter pour l’un des
            schémas suivants :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 p-10 md:p-16">
          <div className="flex flex-col justify-between  h-24">
            <h2 className="text-sm capitalize text-center">
              <span className="font-black mr-1">100%</span>
              des revenus ou bénéfices imposables sans minimum d'impôt
            </h2>
            <ProgressBar value={100} />
          </div>

          <div className="flex flex-col justify-between h-24">
            <h2 className="text-sm capitalize text-center">
              <span className="font-black mr-1">35%</span>
              des revenus ou bénéfices imposables avec minimum d'impôt
            </h2>
        
            <ProgressBar value={35} />
          </div>

          <div className="flex flex-col justify-between h-24">
            <h2 className="text-sm capitalize text-center">
              <span className="font-black mr-1">75%</span>
              de montant déposés dans des ZDR ou agricole.
            </h2>
            <ProgressBar value={75} />
          </div>

          <div className="flex flex-col justify-between h-24">
            <h2 className="text-sm capitalize text-center">
              engagement d’emploi de{" "}
              <span className="font-black mr-1">65%</span> dans des projets
              définis par la règlementation
            </h2>
            <ProgressBar value={65} />
          </div>
        </div>
     
      </div>

    </div>
  );
};

export default Fiscalite;
