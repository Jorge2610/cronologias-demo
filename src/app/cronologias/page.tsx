"use client"
import { useRef, useState, ChangeEvent, useEffect } from "react";
import Tarjeta from "../../components/tarjeta";
import { TarjetaProps } from "@/constants/data";
import { dastosIniciales } from "@/constants/data";

export default function Cronologias() {
  const inputBarraBusqueda = useRef<HTMLInputElement>(null);
  const selectOrdenador = useRef<HTMLSelectElement>(null);
  const [Tarjetas, setTajetas] = useState(dastosIniciales);

  const busca = () => {
    let textTitulo: string;
    let textInput: string;
    let auxTarjetas: TarjetaProps[] = [];
    dastosIniciales.map((tarjeta) => {
      if (inputBarraBusqueda.current) {
        textInput = inputBarraBusqueda.current.value.toUpperCase();
        textTitulo = tarjeta.titulo.toUpperCase();
        if (textTitulo.includes(textInput) || textInput == "") {
          auxTarjetas.push(tarjeta);
        }
      }
    })
    ordenar1(auxTarjetas);
    setTajetas(auxTarjetas);
  }
  const ordenar = () => {
    let auxTajetas = [...Tarjetas];
    ordenar1(auxTajetas);
    console.log(auxTajetas);
    setTajetas(auxTajetas);
  }
  const ordenar1 = (lista: TarjetaProps[]) => {
    if (selectOrdenador.current) {
      const value = selectOrdenador.current.value;
      switch (value) {
        case "Mas reciente":
          lista.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
          break;
        case "Mas antiguo":
          lista.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
          break;
        case "Desendente":
          lista.sort((a, b) => {
            return b.titulo.localeCompare(a.titulo);
          })
          break;
        case "Ascendente":
          lista.sort((a, b) => {
            return a.titulo.localeCompare(b.titulo);
          });
          break;
        default:
          break;
      }
    }
  }
  useEffect(ordenar, []);
  return (
    <div className="container mx-auto">
      <div className="py-5 justify-center flex flex-row">
        <div className="flex align-middle items-center">
          <input className="sm:w-[500px] w-[200px] ml-[50px] border-2 appearance-none rounded-l-[10px] border-r-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline align-middle"
            id="barraBusqueda"
            ref={inputBarraBusqueda}
            type="text"
            placeholder="buscar "
            onKeyDown={(event) => {
              if (event.key == "Enter")
                busca();
            }} />
          <div className=" border-2 pr-1 rounded-r-[10px] border-l-0 m-0 flex items-center text-gray-500" style={{ height: "100%" }}>
            <span className="material-symbols-outlined hover:cursor-pointer" style={{ fontSize: "125%" }} onClick={() => { busca() }}>
              search
            </span>
          </div>

        </div>
        <select className="w-[150px] ml-[40px] md:ml-[50px] border rounded-lg px-[5px]"
          name="ordenador"
          ref={selectOrdenador}
          onChange={() => { ordenar() }}>
          <option value="Mas reciente">Mas reciente</option>
          <option value="Mas antiguo">Mas antiguo</option>
          <option value="Desendente">Z-A</option>
          <option value="Ascendente">A-Z</option>
        </select>
      </div>
      <div className="Tarjetas">
        <hr className="border-[0.12rem] border-[#6B2236]  mx-auto my-2.5" />
        {Tarjetas.map(tarjeta => (
          <>
            <Tarjeta
              data={tarjeta}
            />
            <hr className="border-[0.12rem] border-[#6B2236] mx-auto my-2.5" />
          </>

        ))
        }

      </div>
    </div>
  );
};