import { useEffect, useState } from "react";

const FilterCategory = () => {
    const [toys, setToys] = useState([]);
    const [openTab, setOpenTab] = useState("marvel");

    useEffect(() => {
        fetch(`http://localhost:5000/toy/toy/${openTab}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
                console.log(data);
            });
    }, [openTab]);


    const handleTabClick = (tabName) => {
        setOpenTab(tabName);
    };
    return (
        <div className="py-16">
            <div className="text-center space-y-3 py-4">
                <h2 className="text-5xl font-bold text-primary">Shop By Category</h2>
                <p className="text-xl font-medium">
                    See Our Awesome Toy Cars & Purchase!
                </p>
            </div>
            <div className="tabs justify-center text-center font-bold py-4">
                <button
                    onClick={() => handleTabClick("marvel")}
                    className={`tab marvel ${openTab == "marvel" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-primary btn-outline rounded-sm"
                        }`}
                >
                    Racing
                </button>
                <button
                    onClick={() => handleTabClick("regular")}
                    className={`tab regular ${openTab == "regular" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-warning rounded-sm"
                        }`}
                >
                    Regular
                </button>
                <button
                    onClick={() => handleTabClick("trucks")}
                    className={`tab trucks ${openTab == "trucks" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-warning rounded-sm"
                        }`}
                >
                    Trucks
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-y-6">
                {toys.slice(0, 3).map((toy) => (
                    <ToyCard toy={toy} key={toy._id}></ToyCard>
                ))}
            </div>
        </div>
    );
};

export default FilterCategory;