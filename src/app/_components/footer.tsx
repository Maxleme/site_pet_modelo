import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import premier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Premier", logo: premier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export default function Footer() {
    return(
        <footer className='bg-[#E84c3d] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                    <Image src={item.logo} alt={item.name} width={100} height={50} quality={100} style={{ width: "auto", height: "auto" }} className='object-contain' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a href={`https://wa.me/5511932463740?text=Olá vim pelo site e gostaria de mais informações`} target='_blank' className='bg-green-500 px-4 py-2 rounded-md'>Contato via Whatsapp</a>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: teste@teste.com</p>
                        <p>Telefone: (xx) 11111-1111</p>
                        <p>Rua X, Centro, Bragança Paulista | SP</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="https://facebook.com" target='_blank'><FacebookLogo className='w-8 h-8' /></a>
                            <a href="https://instagram.com" target='_blank'><InstagramLogo className='w-8 h-8'/></a>
                            <a href="https://youtube.com" target='_blank'><YoutubeLogo className='w-8 h-8'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}