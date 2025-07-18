import { shows } from "../data/shows"
import ShowCard from "./ui/ShowCard"

export default function Shows() {

    return (
        <ul>
            {shows.map((show, index) => (
                <ShowCard 
                    key={index} 
                    year={show.year} 
                    city={show.city} 
                    country={show.country} 
                    name={show.name} 
                    src={show.src}
                    display={show.display}
                />
            ))}
        </ul>
    )
}