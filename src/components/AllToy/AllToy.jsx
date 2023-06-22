import { Link } from "react-router-dom";
import './AllToy.css'
import { useEffect, useRef, useState } from "react";
const AllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    // for load all toy from server 
    useEffect(() => {
        // for sort data from asc to desc 
        fetch(`https://action-toys-server-tau.vercel.app/toy?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [asc, search])
    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }

    return (
        <div className="md:px-36 py-10">
            <h1 className="text-5xl font-bold text-center mb-8">All
                <span className="text-primary"> Toys</span>
            </h1>
            <button className='btn btn-primary btn-outline' onClick={() => setAsc(!asc)}>
                {
                    asc ? 'Price: High to Low' : 'Price: Low to High'
                }
            </button>
            <div className="form-control mb-4">
                <div className="input-group flex justify-center">
                    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
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
                        allToy.map((toy, index) =>

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