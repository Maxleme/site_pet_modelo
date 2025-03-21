import Image from "next/image"
import sobre1Img from "../../../public/about-1.png"
import sobre2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function Sobre() {

    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="500">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image src={sobre1Img} className="object-cover hover:scale-110 duration-300" alt="foto do cachorro" fill quality={100} priority/>
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-white border-4">
                            <Image src={sobre2Img} className="" alt="foto do cachorro" fill quality={100} priority/>
                        </div>                    
                    </div>
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="500">
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare sodales turpis facilisis varius. Etiam molestie augue eget ullamcorper finibus. Morbi ullamcorper justo et congue tincidunt. Nullam vitae ullamcorper libero. Phasellus malesuada a orci in consequat. Suspendisse massa diam, hendrerit eu dapibus quis, tempor ut est. Quisque fringilla eros id rhoncus sollicitudin. Nam eleifend eros eget dignissim lacinia. Suspendisse potenti. Etiam cursus felis sed rutrum elementum.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2"><Check className="text-red-500" />Aberto desde 2006</li>
                            <li className="flex items-center gap-2"><Check className="text-red-500" />Equipe com mais de 10 veterinarios</li>
                            <li className="flex items-center gap-2"><Check className="text-red-500" />Qualidade é nossa prioridade</li>
                        </ul>
                        <div className="flex gap-2">
                            <a href={`https://wa.me/5511932463740?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"><WhatsappLogo className="w-5 h-5 text-white"/> Contato via Whatsapp</a>
                            <a href="https://googlemaps.com" target="_blank" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"><MapPin className="w-5 h-5 text-black"/> Endereço da loja</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}