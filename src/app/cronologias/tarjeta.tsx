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
                src={"/files/portada.png"} 
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
                    <span className="material-symbols-outlined">
                        calendar_month
                    </span>
                    <span className="mr-[50px]">{data.fecha.toLocaleDateString()}</span>
                    
                    <Link className="text-red-700"href={{}}>
                    Leer más...
                    </Link>
                </div>
                
            </div>
            
        </div>
    );

}