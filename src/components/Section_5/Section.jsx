import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const H1 = (props) => {
  const ctr = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      ctr.start("visible");
    }
  }, [ctr, inView]);

  return (
    <motion.h1
      {...props}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      ref={ref}
      animate={ctr}
    />
  );
};

const P = (props) => {
  const ctr = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      ctr.start("visible");
    }
  }, [ctr, inView]);

  return (
    <motion.p
      {...props}
      variants={{
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      ref={ref}
      animate={ctr}
    />
  );
};

const Square = (props) => {
  const ctr = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      ctr.start("visible");
    }
  }, [ctr, inView]);

  return (
    <motion.div
      {...props}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 1 },
        },
        hidden: { opacity: 0, scale: 0 },
      }}
      initial="hidden"
      ref={ref}
      animate={ctr}
    />
  );
};

const Section = () => {
  return (
    <div
      style={{
        background: "url(/images/bg.png)",
      }}
      className="!bg-no-repeat !bg-cover"
    >
      <div className="bg-black/50 backdrop-blur-xl text-white">
        <div className=" grid grid-cols-1 lg:grid-cols-2 py-10">
          <div className="p-4 lg:p-20">
            <H1 className="font-light text-5xl mb-10">
              NOTRE POLITIQUE INTERNE
            </H1>
            <P className="font-light text-lg leading-10">
              Nous permettons à nos collaborateurs de grandir au sein de STB
              SICAR, aussi bien professionnellement que personnellement. Nous
              veillons à l’égalité entre tous et à l’accomplissement de chacun.
            </P>
          </div>
          <div className="text-center p-4 lg:p-20 grid grid-cols-3 grid-rows-2 gap-8">
            <Square className="text-xs grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl">
              Renforcer nos engagements pour l’égalité femmes-hommes
            </Square>
            <Square className="text-xs grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl row-start-2 col-start-2">
              Accompagner nos collaborateurs pour faire évoluer leurs
              compétences
            </Square>

            <Square className="text-xs grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl col-start-3 row-start-1">
              Offrir à nos collaborateurs une qualité de vie au travail optimale
            </Square>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
          <div className="text-center row-start-2 lg:row-start-1 p-4 lg:p-20 grid grid-cols-3 grid-rows-2 gap-8">
            <Square className="row-start-2 col-start-1 grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl">
              GOVERNANCE
            </Square>
            <Square className="grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl row-start-1 col-start-2">
              VOLET SOCIAL
            </Square>
            <Square className="grid place-content-center p-4 bg-[#2F2E41]/70 backdrop-blur-3xl col-start-3 row-start-2">
              ENVIRONNEMENT
            </Square>
          </div>
          <div className="p-4 lg:p-20">
            <H1 className="uppercase font-light text-5xl mb-10">
              Pour nos Participations
            </H1>
            <P className="font-light text-lg leading-7">
              Nous sommes conscients de la nécessité de prendre en considération
              les critères environnementaux, sociaux et de qualité de
              gouvernance (ESG) dans la politique d’investissement. Ainsi, nous
              avons établi une charte ESG. Nous sommes également très attachés à
              la qualité de l’approche et à la politique mise en œuvre par nos
              participations en ce qui concerne le respect de l’environnement et
              la gestion des ressources humaines. Pour ce faire, un
              questionnaire a été envoyé aux sociétés financées. Il s’appuie sur
              un socle commun comprenant des indicateurs quantitatifs portant
              sur les 3 grands thèmes ESG prioritaires de la STB SICAR.
            </P>
          </div>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 py-10 content-center">
          <div className="p-4 lg:p-20 grid place-content-center">
            <H1 className="font-light text-5xl mb-10">CONTRIBUTION ODD</H1>
            <P className="font-light text-lg leading-10">
              La STB SICAR contribue aux objectifs de développement durable
              proportionnellement aux moyens dont elle dispose. Au regard de ses
              activités, elle contribue principalement aux 7 ODD suivants 
            </P>
          </div>
          <div className="p-4 lg:p-20 grid grid-cols-3 gap-8">
            <Square className="col-span-3 bg-[#c7212f] h-40">
              <img src="/images/4.jpg" alt="4" className="mx-auto h-full" />
            </Square>
            <Square>
              <img src="/images/5.jpg" alt="5" className="h-40" />
            </Square>
            <Square>
              <img src="/images/7.jpg" alt="7" className="h-40" />
            </Square>
            <Square>
              <img src="/images/8.jpg" alt="8" className="h-40" />
            </Square>
            <Square>
              <img src="/images/9.jpg" alt="9" className="h-40" />
            </Square>
            <Square>
              <img src="/images/12.jpg" alt="12" className="h-40" />
            </Square>
            <Square>
              <img src="/images/16.jpg" alt="16" className="h-40" />
            </Square>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;