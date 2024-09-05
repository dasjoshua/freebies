import React from 'react';

function FeaturedItem() {
    return (
        <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-8">
            {/* TITLE */}
            <h1 className="poppins-bold flex-row text-2xl">Trending Item</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />
            {/* BOX */}
            <div className="mx-auto flex h-fit w-fit flex-col rounded-lg border border-black bg-white">
                {/* CONTENT */}
                <div className="m-8 flex">
                    <img
                        className="h-[250px] w-[400px] rounded-lg object-cover"
                        src="https://c02.purpledshub.com/uploads/sites/39/2023/05/Trek-Emonda-AL5-02-2406262.jpg?w=1029&webp=1"
                        alt=""
                    />

                    {/* TEXT */}
                    <div className="ml-8 w-1/2">
                        <h1 className="poppins-bold text-2xl">Used Bike</h1>
                        <p className="inter-regular text-lg text-gray-400">
                            3 Interested | listed 10 days ago
                        </p>
                        <br />
                        <p className="inter-regular">
                            I only used it once and am looking to get rid of it as I no longer have
                            a need for it. Was used on a dude btw. But don’t worry! The condom is
                            unbroken so it can...
                        </p>
                        {/* SELLING TYPE */}
                        <div className="flex justify-between py-8">
                            <p className="inter-semibold py-1 text-lg text-emerald-500">
                                AVAILABLE
                            </p>
                            <button className="inter-semibold border-amber h-10 w-24 rounded-xl border-4 border-secondary font-bold text-primary duration-300 hover:bg-secondary hover:text-white">
                                BID
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;
