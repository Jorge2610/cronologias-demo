"use client"
import { useRef, useState,ChangeEvent, useEffect } from "react";
import Tarjeta from "./tarjeta"


interface TarjetaProps{
    titulo:string,
    imagen:string,
    autor:string,
    fecha:Date,
    resumen:string
}
const dastosIniciales: TarjetaProps[] = [
    {
      titulo: "Golpe de estado",
      imagen: "https://example.com/golpe-de-estado.jpg",
      autor: "Juan Perez",
      fecha: new Date('2023-01-15'),
      resumen: "Descripción del golpe de estado que tuvo lugar en enero de 2023, con detalles sobre sus causas y consecuencias."
    },
    {
      titulo: "Bloqueos masificados",
      imagen: "https://example.com/bloqueos-masificados.jpg",
      autor: "Maria Garcia",
      fecha: new Date('2023-02-10'),
      resumen: "Informe sobre los bloqueos masivos que ocurrieron en febrero de 2023, afectando la economía y el transporte."
    },
    {
      titulo: "Guerra civil en Cochabamba",
      imagen: "https://example.com/guerra-civil.jpg",
      autor: "Carlos Rodriguez",
      fecha: new Date('2023-03-22'),
      resumen: "Análisis de la guerra civil en Cochabamba, sus causas, actores involucrados y las repercusiones sociales."
    },
    {
      titulo: "Estado de emergencia",
      imagen: "https://example.com/estado-emergencia.jpg",
      autor: "Ana Lopez",
      fecha: new Date('2023-04-05'),
      resumen: "Crónica del estado de emergencia declarado en abril de 2023 debido a desastres naturales y la respuesta del gobierno."
    },
    {
      titulo: "Reformas educativas",
      imagen: "https://example.com/reformas-educativas.jpg",
      autor: "Luis Martinez",
      fecha: new Date('2023-05-12'),
      resumen: "Reporte sobre las reformas educativas implementadas en mayo de 2023, incluyendo cambios en el currículo y la infraestructura."
    },
    {
      titulo: "Protestas estudiantiles",
      imagen: "https://example.com/protestas-estudiantiles.jpg",
      autor: "Elena Diaz",
      fecha: new Date('2023-06-18'),
      resumen: "Cobertura de las protestas estudiantiles de junio de 2023, las demandas de los estudiantes y la reacción del gobierno."
    },
    {
      titulo: "Crisis económica",
      imagen: "https://example.com/crisis-economica.jpg",
      autor: "Jorge Gonzalez",
      fecha: new Date('2023-07-25'),
      resumen: "Estudio de la crisis económica que afectó al país en julio de 2023, con un enfoque en las causas y las posibles soluciones."
    },
    {
      titulo: "Avances tecnológicos",
      imagen: "https://example.com/avances-tecnologicos.jpg",
      autor: "Sofia Hernandez",
      fecha: new Date('2023-08-30'),
      resumen: "Artículo sobre los avances tecnológicos logrados en agosto de 2023, destacando innovaciones y desarrollos clave."
    }
  ];

export default function Cronologias () {
    const inputBarraBusqueda= useRef<HTMLInputElement>(null);
    const selectOrdenador= useRef<HTMLSelectElement>(null);
    const[Tarjetas, setTajetas]= useState(dastosIniciales);

    const busca=()=>{
        let textTitulo:string;
        let textInput:string;
        let auxTarjetas:TarjetaProps[]=[];
        dastosIniciales.map((tarjeta)=>{
            if(inputBarraBusqueda.current){
                textInput=inputBarraBusqueda.current.value.toUpperCase();
                textTitulo=tarjeta.titulo.toUpperCase();
                if(textTitulo.includes(textInput) || textInput==""){
                    auxTarjetas.push(tarjeta);
                }
            }
        })
        ordenar1(auxTarjetas);
        setTajetas(auxTarjetas);
    }
    const ordenar=()=>{
      let auxTajetas=[...Tarjetas];
      ordenar1(auxTajetas);
      console.log(auxTajetas);
      setTajetas(auxTajetas);
    }
    const ordenar1=(lista:TarjetaProps[])=>{
      if(selectOrdenador.current){
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
    useEffect(ordenar,[]);
    return (
        <div className="container mx-auto">
            <div className="container py-5 justify-center flex flex-row " style={{width:"80%"}}>
                <div className="flex align-middle items-center">
                    <input className="w-[300px] border-2 appearance-none rounded-l-[10px] border-r-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline align-middle" 
                    id="barraBusqueda" 
                    ref={inputBarraBusqueda}
                    type="text" 
                    placeholder="buscar "
                    onKeyDown={(event)=>{
                      if(event.key=="Enter")
                        busca();
                    }}/>
                    <div className=" border-2 pr-1 rounded-r-[10px] border-l-0 m-0 flex items-center text-gray-500" style={{height:"100%"}}>
                        <span className="material-symbols-outlined hover:cursor-pointer"  style={{fontSize:"125%"}} onClick={()=>{busca()}}>
                         search
                         </span>
                    </div>
                    
                </div>
                <select className="ml-[100px] border rounded-full px-[5px]" 
                  name="ordenador" 
                  ref={selectOrdenador}
                  onChange={()=>{ordenar()}}>
                    <option value="Mas reciente">Mas reciente</option>
                    <option value="Mas antiguo">Mas antiguo</option>
                    <option value="Desendente">Z-A</option>
                    <option value="Ascendente">A-Z</option>
                </select>
            </div>
            <div className="Tarjetas">
            <hr className="border-[0.12rem] border-[#6B2236]  mx-auto w-[55%] my-2.5" />
                {Tarjetas.map(tarjeta=>(
                    <>
                        <Tarjeta
                         data={tarjeta}
                          />
                    <hr className="border-[0.12rem] border-[#6B2236] mx-auto w-[55%] my-2.5" />
                    </>
                    
                ))
                }
                      
            </div>
        </div>
    );
};