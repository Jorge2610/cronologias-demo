import Image from "next/image";
import Link from "next/link";
import { TarjetaProps } from "@/constants/data";

export default function Tarjeta({ data }: { data: TarjetaProps }) {

    return (
        <div className="p-2 justify-center flex ">
            <div className="pr-5">
                <Image
                    src={data.imagen}
                    alt="Portada"
                    className="shadow"
                    width={200}
                    height={300} />
            </div>
            <div className="w-full">
                <div className="Titulo text-2xl">
                    <h2>{data.titulo}</h2>
                </div>
                <hr />
                <div className="my-[20px] text-sm">
                    <div className="sm:inline">
                        <span className="material-symbols-outlined align-middle">person</span>
                        <span className="align-middle ms-2">{data.autor}</span>
                    </div>
                </div>

                <div className="Resumen">
                    <span>{data.resumen}</span>
                </div>
                <div className="flex mt-[15px]">
                    <span className="material-symbols-outlined">
                        calendar_month
                    </span>
                    <span className="mr-[50px] ms-2">{data.fecha.toLocaleDateString()}</span>

                    <Link className="text-red-700" href={`/cronologias/${data.titulo.toLowerCase().replace(":", "").replaceAll(" ", "_")}?id=${data.id}`}>
                        Ver cronología...
                    </Link>
                </div>

            </div>

        </div>
    );

}