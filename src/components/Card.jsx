import React from 'react';

function Card(props) {
    return (
        <div className="p-8">
            {/* BOX */}
            <div className="h-[400px] w-[400px] rounded-md border border-black bg-white shadow-xl">
                {/* IMAGE */}
                <img
                    className="mx-auto my-4 h-[200px] w-4/5 rounded-lg object-cover"
                    src={props.img}
                    alt=""
                />
                {/* TEXT */}
                <div className="mx-4">
                    <h1 className="inter-semibold text-3xl">{props.name}</h1>
                    {/* Listing */}
                    <div className="inter-regular text-md flex py-2 text-gray-500">
                        <p>{props.interested} Interested | </p>
                        <p className="px-1">Listed {props.date} days ago</p>
                    </div>
                    {/* Status */}
                    <div className="flex justify-between py-2">
                        <p className="inter-semibold py-1 text-lg text-emerald-500">
                            {props.status}
                        </p>
                        <button className="inter-semibold border-amber h-10 w-24 rounded-xl border-4 border-secondary font-bold text-primary duration-300 hover:bg-secondary hover:text-white">
                            BID
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
