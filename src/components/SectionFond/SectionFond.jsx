import { motion } from "framer-motion";
import React from "react";
import SectionEight from "../components/section8/SectionEight";
import Fiscalite from "../Fiscalite/Fiscalite";

const SectionFond = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mb-4">
      <h1 className="uppercase font-bold text-3xl mb-10 border border-b-8 border-t-0 border-x-0 border-indigo-500">	NOS INVESTISSEURS</h1>
      <p className="text-lg">
        STB SICAR dispose de fonds apportés par des investisseurs
        institutionnels de premier plan.
      </p>
      <div class="  p-4 grid lg:grid-cols-4 gap-10 ">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>


      <div class="cols-span-4 bg-blue-300 h-full relative">
          <div class="absolute   h-full w-full justify-between ">
            <div class="p-4  flex flex-col justify-center items-center w-full h-full  backdrop-blur-sm bg-gray-900/50 self-end border-gray-100/10 border">
              <h1 class="text-white uppercase  text-5xl mb-10">
              STB BANK
              </h1>
            </div>
          </div>
          <img class="w-full h-full" src="/images/stb.png" />
        </div>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div class=" rows-start-2 bg-blue-300 h-full relative">
          <div class="absolute   h-full w-full justify-between ">
            <div class="p-4  flex flex-col justify-center items-center w-full h-full  backdrop-blur-sm bg-gray-900/50 self-end border-gray-100/10 border">
              <h1 class="text-white uppercase text-5xl mb-10">
                B E I
              </h1>
            </div>
          </div>
          <img class="w-full" src="/images/logo_europ.jpg" />
        </div>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div class="bg-blue-300 h-full  relative">
          <div class="absolute   h-full w-full justify-between ">
            <div class="p-4  flex flex-col justify-center items-center w-full h-full  backdrop-blur-sm bg-gray-900/50 self-end border-gray-100/10 border">
              <h1 class="text-white uppercase text-3xl mb-10">
                STB INVEST
              </h1>
            </div>
          </div>
          <img class="w-full" src="/images/stb_invest.jpg" />
        </div>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div class="bg-blue-300 h-full  relative">
          <div class="absolute   h-full w-full justify-between ">
            <div class="p-4  flex flex-col justify-center items-center w-full h-full  backdrop-blur-sm bg-gray-900/50 self-end border-gray-100/10 border">
              <h1 class="text-white uppercase  text-5xl mb-4">
               A.P.I.I
              </h1>
              <center><i className="text-white"> (AGENCE DE PROMOTION DE L'INDUSTRIE ET DE L'INNOVATION)</i></center>
            </div>
          </div>
          <img class="w-full" src="/images/apii.jpg" />
        </div>
        </motion.div>
      </div>
    </div>
    <div className="flex justify-center items-center w-full mt-20">
    <h1 className="uppercase font-bold text-3xl mb-10 border border-b-8 border-t-0 border-x-0 border-indigo-500">  	OPTIMISEZ VOTRE FISCALITE
</h1>

    </div>

    <Fiscalite />
    <SectionEight />
    </>
  );
};

export default SectionFond;
