import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";
import { Pilares } from "./pilares";

let creativityColor = "#FFBC00";
let strategyColor = "#FF0068";
let devColor = "#00FF91";
let prColor = "#00F9FF";
let filmsColor = "#FF3C00";

const Services3 = () => {
  return (
    <>
      <section>
        <div className="pilares_titulo">
          <h2>
            <span>mejores servicios</span>
            <br /> <span>Conoce nuestros 5 pilares</span>
          </h2>
        </div>
        <div className="Pilar-flex">
          <div className="pilares">
            <Pilares
              img={"/img/unidades/creativity.svg"}
              number={"1"}
              descripcion={
                "Ideas valientes que rompen los paradigmas ya establecidos. "
              }
              color={creativityColor}
            />
            <Pilares
              img={"/img/unidades/strategy.svg"}
              number={"2"}
              descripcion={
                "Estrategias rigurosas, con objetivos claros y medibles, conectados con el propósito de una marca."
              }
              color={strategyColor}
            />
            <Pilares
              img={"/img/unidades/Dev.svg"}
              number={"3"}
              descripcion={
                "Usamos la tecnología para hacer más humanas nuestras marcas."
              }
              color={devColor}
            />
            <Pilares
              img={"/img/unidades/pr.svg"}
              number={"4"}
              descripcion={
                "Generamos conversación y llamamos la atención de medios y expertos."
              }
              color={prColor}
            />
            <Pilares
              img={"/img/unidades/films.svg"}
              number={"5"}
              descripcion={
                "Convertimos los objetivos de una marca en historias audiovisuales."
              }
              color={filmsColor}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services3;
