import User from "./User";

export default function PaintingList({clients}){
    return(
        <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <User
                        name={client.name}
                        age={client.age} 
                        rating={client.rating}
                    />
                </li>
            ))}
        </ul>
    )
}