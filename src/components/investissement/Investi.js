import { motion } from "framer-motion";
import React, { Fragment } from "react";
import EtatEsprit from "../etat-desprit/EtatEsprit";
const Investi = () => {
  return (
    <Fragment>
      <div className="w-full flex justify-center items-center ">
        <h1 className="uppercase font-bold text-3xl mb-10 border border-b-8 border-t-0 border-x-0 border-indigo-500">	PRINCIPES D’INVESTISSEMENT</h1>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-1 justify-items-center  h-1/2 bg-image-investi bg-cover">
        <div className="w-full flex h-1/2 flex-col items-center  pt-4 sm:flex-row sm:justify-center sm:pt-40 ">
          {/* circle to rectangle en md */}
          <motion.div animate={{ scale: 1.1 }} transition={{ duration: 1 }}>
            <div className="bg-text backdrop-blur-md bg-gray-500/30 flex flex-row justify-start items-center -mx-5    px-20">
              <p className="text-lg text-medium-screen font-semibold uppercase">
                INVESTIR DANS DES PROJETS VIABLES
              </p>
            </div>{" "}
          </motion.div>
          <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <div className="bg-text backdrop-blur-md bg-gray-500/30 flex flex-row justify-start items-center -mx-5   px-20">
              <p className="text-lg text-medium-screen font-semibold uppercase">
                Investir dans l’equity ou quasi equity
              </p>
            </div>{" "}
          </motion.div>
          <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.75 }}>
            <div className="bg-text backdrop-blur-md bg-gray-500/30 flex flex-row justify-start items-center -mx-5    px-20">
              <p className="text-lg text-medium-screen font-semibold  uppercase">
                Investir minoritairement
              </p>
            </div>
          </motion.div>
          <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.25 }}>
            <div className="bg-text  backdrop-blur-md bg-gray-500/30 flex flex-row justify-start items-center -mx-5   px-20">
              <p className="text-lg text-medium-screen font-semibold uppercase ">
                Investir en respect des ratios règlementaires
              </p>
            </div>
          </motion.div>
        </div>
        <div class="flex flex-col h-full justify-center items-center w-full h-60 text-center mt-10 ">
          <h1 className="text-2xl text-white uppercase mb-2">
            Modes d’intervention
          </h1>
          <div class="flex py-10 px-6 justify-center  h-full bg-gray-900/50  backdrop-blur-md text-center ">
            <p class="text-white text-sm leading-8 ">
              Les actions ordinaires (A.O) en sortie libre
              <br />
              Les obligations convertibles en actions (O.C.A) <br />
              Les avances sous forme de compte courant associé (C.C.A)
            </p>
          </div>
        </div>
      </div>
      <EtatEsprit />
    </Fragment>
  );
};

export default Investi;
