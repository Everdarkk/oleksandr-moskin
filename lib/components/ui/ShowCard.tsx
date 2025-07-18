import Image from 'next/image'
import { ShowType } from '../../types'

export default function ShowCard({year, city, country, name, src}: ShowType) {
    return (
        <div style={{color: 'white'}}>
            <Image
                src={src}
                alt={name}
                width={500}
                height={500}
            />

            <h3>{name}</h3>
            <p>{city}, {country}</p>
            <p>{year}</p>
        </div>
    )
}