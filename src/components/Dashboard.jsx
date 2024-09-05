import { ReactDOM, useState } from 'react';
import data from '../data/data.json';

import Card from './Card';

function Dashboard() {
    const [items, setItems] = useState(data);

    return (
        <div className="my-12 flex flex-col items-center">
            {/* TITLE */}
            <h1 className="poppins-bold flex-row text-2xl">All Items</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />

            {/* Event List */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        img={item.img}
                        date={item.date}
                        status={item.status}
                        interested={item.interested}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
