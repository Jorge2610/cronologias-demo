import Image from "next/image";
import Link from "next/link";
interface TarjetaProps{
    titulo:string,
    imagen:string,
    autor:string,
    fecha:Date,
    resumen:string
}
export default function Tarjeta({data}:{data:TarjetaProps}){
    return(
        <div className="p-2 justify-center flex ">
            <div className="pr-5">
                <Image 
                src={"/documentos/portada.png"} 
                alt="Portada"
                className="shadow"
                width={200}
                height={300}/>
            </div>
            <div className="w-full max-w-md">
                <div className="Titulo text-2xl">
                    <h2>{data.titulo}</h2>
                </div>
                <hr />
                <div className="my-[20px] text-sm">
                <span >By {data.autor}</span>
                </div>
                
                <div className="Resumen">
                    <span>{data.resumen}</span>
                </div>
                <div className="flex mt-[20px]">
                    <span className="mr-[30px]">{data.fecha.toLocaleDateString()}</span>
                    <Link className=""href={{}}>
                    Leer mas
                    </Link>
                </div>
                
            </div>
            
        </div>
    );

}