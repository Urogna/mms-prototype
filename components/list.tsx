import reduce from 'immer'
import React, {useState} from 'react'
import '../public/static/output.css'

const HomeList = () => {
    const homes = []
    objects.forEach((obj) => {
        homes.push(<Item title={obj.title} type={obj.type} price={obj.price} costs={obj.costs} rooms={obj.rooms} size={obj.size} email={obj.email} address={obj.address} img={obj.image} description={obj.description}/>)
    })
    return (
        <p className="h-full overflow-scroll">
            {homes}
        </p>
    )
}

const Item = ({title, type, price, costs, rooms, size, email, address, img, description}) => {
    const [selected, setSelected] = useState(false);

    if(selected) {
        return (
            <p className="bg-white border-4 border-gray-600 shadow overflow-hidden pb-8"
                onClick={() => {setSelected(false)}}>
                <p className="p-1">{img}</p>
                <p className="bg-gray-300 text-center text-lg"><b>{title}</b></p>
                <p className="p-2 px-6 w-1/2">
                    <p><b>Type:</b></p>
                    <p>{type}</p>
                    <p><b>Size:</b></p>
                    <p>{rooms}, {size}</p>
                    <p><b>Price:</b></p>
                    <p className="text-base">Base Price: <b>{price}.-</b></p>
                    <p className="text-base">Addidional costs: <b>{costs}.-</b></p>
                    <p><b>Contact:</b></p>
                    <p className="text-base">Email: <a>{email}</a></p>
                    <p><b>Address:</b></p>
                    <p>{address.street}<br></br>{address.zip}</p>
                </p>
                <p className="p-2 px-6">
                    <br></br>
                    <p><b>Description:</b></p>
                    <p className="text-sm">{description}</p>
                </p>
            </p>
        )
    } else {
        return (
            <p className="h-40 bg-white border-4 border-gray-600 shadow overflow-hidden text-center"
                onClick={() => {setSelected(true)}}>
                <p className="w-1/2 float-left h-full px-12 bg-gray-300 border-white">{img}</p>
                {/*<p className="w-1/2 pt-2 float-right text-center text-xs shadow">*/}
                    <p className="bg-gray-300 w-1/2 border-4 border-white float-right text-xl"><b>{title}</b></p>
                    <p className="text-lg">{`${type}, ${rooms}`}</p>
                    <p className="text-base"><b>{price + costs}.-</b></p>
                
            </p>
        )
    }
    
}

const objects = [
    {
        title: "Nice apartment in the outskirts of Bern",
        type: "Apartment",
        price: 1420,
        costs: 200,
        rooms: "2 1/2",
        size: "60m²",
        email: "muster@bern.ch",
        address: {street:"Musterstrasse 6", zip:"6054 Muster"},
        image: <img src="/static/home1.jpg"/>,
        description: `Ab sofort vermieten wir an zentraler Lage in Bern Wankdorf eine grosse, neu renovierte 2 1/2-Zimmer Wohnung 60 m2 mit Balkon 6,2 m2 im 4. Stock plus, Keller und Estrich. Die Wohnung verfügt über grosse Zimmer, Reduit, eine modern ausgestattete Wohnküche inkl. Abwaschmaschine, Waschmaschine mit Tumbler, neues Badezimmer mit Badewanne, Glasfaseranschluss, Eichenparkett im Wohn- & Schlafzimmer ausgezeichnete Lage, nähe zu Schulen, Einkaufsmöglichkeiten, Post und Banken, Wankdorf Bahnhof und Stade de Suisse. Es gibt keinen Lift im Haus.Mietzins inkl. Nebenkosten Fr. 1'620.- monatlich. Falls Sie interessiert sind kontaktieren Sie uns per E-Mail und schreiben bitte etwas über sich`
    },
    {
        title: "Nice apartment in the outskirts of Bern",
        type: "Apartment",
        price: 1420,
        costs: 200,
        rooms: "2 1/2",
        size: "60m²",
        email: "muster@bern.ch",
        address: {street:"Musterstrasse 6", zip:"6054 Muster"},
        image: <img src="/static/home1.jpg"/>,
        description: `Ab sofort vermieten wir an zentraler Lage in Bern Wankdorf eine grosse, neu renovierte 2 1/2-Zimmer Wohnung 60 m2 mit Balkon 6,2 m2 im 4. Stock plus, Keller und Estrich. Die Wohnung verfügt über grosse Zimmer, Reduit, eine modern ausgestattete Wohnküche inkl. Abwaschmaschine, Waschmaschine mit Tumbler, neues Badezimmer mit Badewanne, Glasfaseranschluss, Eichenparkett im Wohn- & Schlafzimmer ausgezeichnete Lage, nähe zu Schulen, Einkaufsmöglichkeiten, Post und Banken, Wankdorf Bahnhof und Stade de Suisse. Es gibt keinen Lift im Haus.Mietzins inkl. Nebenkosten Fr. 1'620.- monatlich. Falls Sie interessiert sind kontaktieren Sie uns per E-Mail und schreiben bitte etwas über sich`
    }
]

export default HomeList