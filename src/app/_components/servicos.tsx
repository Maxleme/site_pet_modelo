'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const servicos = [
    {
        title: "Banho e Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higienica ou estilizada).",
        duration: "1h",
        price: "R$50",
        icon: <Scissors />,
        linkText: "olá, vi no site sobre Banho e tosa e gostaria de mais informações."
    },
    {
        title: "Consulta Veterinaria",
        description: "Oferece atendimento clínico basico ou especializado para cuidar da saude do animal.",
        duration: "1h",
        price: "R$45",
        icon: <Syringe />,
        linkText: "olá, vi no site sobre Consulta Veterinaria e gostaria de mais informações."
    },
    {
        title: "Taxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clicinas veterinarias ou outros locais. Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais.",
        duration: "1h",
        price: "R$80",
        icon: <CarTaxiFront />,
        linkText: "olá, vi no site sobre Taxi Pet e gostaria de mais informações."
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias, Os pets ficam acomodados em espaços seguros, confortaveis.",
        duration: "1h",
        price: "R$60",
        icon: <Hotel />,
        linkText: "olá, vi no site sobre Hotel para pets e gostaria de mais informações."
    },
]

export default function Servicos() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className='flex'>
                        {servicos.map((item, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                    <div className="flex-1 flex items-start justify-between">
                                        <div className='flex gap-3'>
                                            <span className="text-3xl">{item.icon}</span>
                                            <div>
                                                <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <Clock  className='w-4 h-4'/>
                                            <span>{item.duration}</span>
                                        </div>
                                        <a href={`https://wa.me/5511932463740?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`} target='_blank' className='flex items-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'><WhatsappLogo className='h-5 w-5' />Entrar em contato</a>
                                    </div>
                                </article>
                            </div>
                        ))}
                        </div>
                    </div>
                    <button className='bg-white flex items-center rounded-full shadow-lg justify-center h-10 w-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-6 h-6 text-gray-600' onClick={scrollPrev} />
                    </button>
                    <button className='bg-white flex items-center rounded-full shadow-lg justify-center h-10 w-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-6 h-6 text-gray-600' onClick={scrollNext} />
                    </button>
                </div>
            </div>            
        </section>
    )
}