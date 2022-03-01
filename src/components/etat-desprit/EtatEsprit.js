import { motion } from "framer-motion";
import React from "react";
import { office, office_2, office_3 } from "./Svg";
const EtatEsprit = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center ">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-9   mx-auto p-2 text-black">
          <div class="bg-white col-start-3 col-end-9 my-4">
            <div class="flex flex-row">
              <h3 class="font-bold text-2xl mb-1 uppercase pr-4 border border-t-0  border-b-0 border-l-0 border-r-8 border-indigo-500">
                UN ETAT <br /> D’ESPRIT
              </h3>
            
              <p class=" uppercase text-sm ml-4 pt-4 text-left">
                NOUS PLAÇONS LA CONFIANCE COMME VALEUR FONDAMENTALE D’UN
                PARTENARIAT GAGNANT
              </p>
            </div>
          </div>
          <div class="row-start-4 col-start-3 p-4   ">
            {" "}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {office}
            </motion.div>
          </div>
          <div class="row-start-4 col-start-5 col-end-9  col-span-6 p-4  mt-20    ">
            <div>
              <h3 class="font-bold text-lg mb-1 text-indigo-600 uppercase">
                {" "}
                UN ACCOMPAGNEMENT
              </h3>
              <p class="uppercase text-sm  ml-2   text-left ">
                Nous partageons la conviction que la valeur d’une PME repose sur
                la qualité de son équipe dirigeante. En tant qu’actionnaire,
                nous nous positionnons comme un partenaire actif aux côtés des
                dirigeants. Ainsi, nos critères d’investissement privilégient,
                au-delà de l‘analyse économique et industrielle de la société,
                la qualité et la motivation des dirigeants auxquels nous nous
                associons.
              </p>
            </div>
          </div>
          <div class="row-start-5 col-start-2  col-span-4 p-4  mt-20    ">
            <div>
              <h3 class="font-bold text-lg mb-1 text-indigo-600 uppercase">
                {" "}
                LES VALEURS QUI SE PARTAGENT
              </h3>
              <p class="uppercase text-sm  ml-2   text-left ">
                Partager les valeurs de respect, de loyauté et de transparence
                pour poser ensemble les fondations d’un partenariat durable et
                constructif. Notre philosophie d'investissement est résolument «
                non-intrusive », pour préserver la liberté d’action des
                dirigeants de l’entreprise. Ainsi, tous nos investissements
                s’effectuent en mode minoritaire, en fonds propres et
                quasi-fonds propres. Nous privilégions une durée moyenne de
                participation « raisonnable », comprise entre 5 et 7 ans.
              </p>
            </div>
          </div>
          <div class="row-start-5 col-start-7  col-span-4 p-4  mt-20    ">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {office_2}
            </motion.div>
          </div>
          <div class="row-start-6 col-start-2  col-span-2 p-4  mt-20    ">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {office_3}
            </motion.div>
          </div>

          <div class="row-start-6 col-start-5  col-span-4 p-4  mt-20    ">
            <div>
              <h3 class="font-bold text-lg mb-1 text-indigo-600 uppercase">
                {" "}
                UNE AVENTURE HUMAINE
              </h3>
              <p class="uppercase text-sm  ml-2   text-left ">
                Chaque partenariat est une aventure riche d’expériences
                partagées et d’ambitions assumées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtatEsprit;
