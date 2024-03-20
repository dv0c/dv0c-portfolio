import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

interface ExperienceProps {
    name: string;
    description: string;
    image: string;
    date: string;
    href: string;
}

export const Experience: FC<ExperienceProps> = ({ href, date, description, image, name }) => {

    return <Link type='button' href={href} target='_blank' className='rounded-full flex items-center gap-5 bg-background border-2 p-5'>
        <div className='p-3 bg-primaryColor rounded-full max-w-[50px] max-h-[50px] flex items-center justify-center'>
            <Image alt={name} src={image} width={35} height={35} className='object-cover w-full h-full' />
        </div>
        <div className='flex-1'>
            <h4 className='text-sm'>{name}</h4>
            <p className='font-semibold text-sm'>{description}</p>
        </div>
        <p className='text-sm text-muted-foreground'>{date}</p>
    </Link>
}
