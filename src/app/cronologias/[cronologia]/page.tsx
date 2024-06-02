"use client"

import Link from 'next/link';
import { TarjetaProps } from "@/constants/data";
import { dastosIniciales } from "@/constants/data";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Cronologia({ params }: { params: { cronologia: string } }) {

    const searchParams = useSearchParams();
    let id_param = searchParams.get('id');
    const id: number = id_param !== null ? parseInt(id_param) : -1;
    const data: TarjetaProps | undefined = dastosIniciales.find(tarjeta => tarjeta.id === id);
    const fecha: string = data ? `${data.fecha.getDay()}/${data.fecha.getMonth()}/${data.fecha.getFullYear()}` : "";
    const recurso: string = `/files/${params.cronologia}.pdf`;
    const analisis: number = 1;

    return (
        <div className="sm:container sm:mx-auto mb-2.5">
            <div className='pt-2.5'>
                <h1 className="text-2xl">{data?.titulo}</h1>
                <div className="inline">
                    <span className="material-symbols-outlined align-middle">person</span>
                    <span className="align-middle ms-2">{data?.autor}</span>
                </div>
                <div className="sm:inline sm:ms-10">
                    <span className="material-symbols-outlined align-middle">event</span>
                    <span className="align-middle ms-2">{fecha}</span>
                </div>
            </div>
            <hr className="border border-[#6B2236] my-2.5" />
            <div className="flex flex-col sm:flex-row">
                <iframe src={recurso} className="mx-auto w-[350px] sm:w-3/4 h-[490px] sm:h-[730px]"></iframe>
                {data?.autor_a !== "" ?
                    <div className="w-[350px] sm:min-w-[270px] ms-2.5 mt-2.5 sm:mt-0">
                        <h2 className="text-xl mb-2.5">Documentos de análisis ({analisis})</h2>
                        <div className="flex border-b border-[#6B2236]">
                            <div className='w-[75%] ms-2 pb-2'>
                                <div className='py-2'>
                                    <span className="material-symbols-outlined align-middle">person</span>
                                    <span className="align-middle ms-2">{data?.autor_a}</span>
                                </div>
                                <div className='pb-2.5'>
                                    <span className="material-symbols-outlined align-middle">event</span>
                                    <span className="align-middle ms-2">{fecha}</span>
                                </div>
                                <Link className='text-red-700' href={`/files/${data?.archivo}.pdf`} target='_blank'>Leer...</Link>
                            </div>
                            <div className='w-[25%]'>
                                <Image src={`/images/${data?.archivo}.png`} alt="" className='border rounded' height={100} width={100}/>
                            </div>
                        </div>
                    </div>
                    :
                    <></>}
            </div>
        </div>
    );
};