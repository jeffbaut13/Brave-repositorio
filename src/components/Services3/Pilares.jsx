import React from "react";

export const Pilares = ({ img, number, descripcion, color }) => {
  return (
    <>
      <div className="pilares_unidades">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="contenido">
          <div className="number">
            {number}
            <span className="linea" style={{ backgroundColor: color }}>
              {" "}
            </span>
          </div>
          <span className="descripcion">{descripcion}</span>
        </div>
      </div>
    </>
  );
};
