import { Link, useLoaderData } from "react-router-dom";
import './AllToy.css'
import { useEffect, useState } from "react";
const AllToy = () => {
    const toys = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const [allToy, setAllToy] = useState([]);
    // use the state for searching the toy name
    const [filteredToy, setFilteredToy] = useState([]);

    useEffect(() => {
        // limit up to 20 
        fetch(
            "http://localhost:5000/toy"
        )
            .then((res) => res.json())
            .then((data) => {
                setAllToy(data);
                setFilteredToy(data);
            });
    }, []);
    // use for search function /toySearchBy/:text
    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchBy/${searchText}`)
            .then(res => res.json())
            .then((data) => {
                setAllToy(data)
            })
    }

    return (
        <div className="md:px-36 py-10">
            <h1 className="text-5xl font-bold text-center mb-8">All
                <span className="text-primary"> Toys</span>
            </h1>
            <div className="search-box p-2 text-center">
                <input
                    type="text"
                    placeholder="Search Toy Name"

                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered font-bold"
                />{" "}
                <button onClick={handleSearch} className="btn btn-primary text-white">
                    Search
                </button>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr >
                        <th>SI</th>
                        <th >Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        toys.map((toy, index) =>

                            < tr key={toy._id} >

                                <td>{index + 1}</td>
                                <td>{toy.seller}</td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><Link to={`/toy/${toy._id}`}><button className="btn btn-primary">
                                    Details
                                </button></Link></td>

                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>


    );
};

export default AllToy;