import { useEffect, useState } from "react";
import SignleFilter from "../SingleFilter/SignleFilter";

const FilterCategory = () => {
    const [toys, setToys] = useState([]);
    const [openTab, setOpenTab] = useState("marvel");

    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${openTab}`)
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
        <div className="py-16 md:px-36">
            <div className="text-center space-y-3 py-4">
                <h1 className="text-5xl font-bold text-center mb-4">Shop By
                    <span className="text-primary"> Category</span></h1>

            </div>
            <div className="tabs justify-center text-center gap-4 font-bold py-4">
                <button
                    onClick={() => handleTabClick("Marvel")}
                    className={`tab Marvel ${openTab == "Marvel" ? "btn btn-primary rounded-sm  text-white" : " btn btn-primary btn-outline rounded-sm"
                        }`}
                >
                    Marvel
                </button>
                <button
                    onClick={() => handleTabClick("Transformers")}
                    className={`tab Transformers ${openTab == "Transformers" ? "btn btn-primary rounded-sm  text-white" : " btn btn-primary btn-outline rounded-sm"
                        }`}
                >
                    Transformers
                </button>
                <button
                    onClick={() => handleTabClick("StarWar")}
                    className={`tab StarWar ${openTab == "StarWar" ? "btn btn-primary rounded-sm  text-white" : " btn btn-primary btn-outline rounded-sm"
                        }`}
                >
                    Star War
                </button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-y-6">
                {toys.slice(0, 3).map((toy) => (
                    <SignleFilter toy={toy} key={toy._id}></SignleFilter>
                ))}
            </div>
        </div>
    );
};

export default FilterCategory;