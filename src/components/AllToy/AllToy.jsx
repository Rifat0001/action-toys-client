import { Link, useLoaderData } from "react-router-dom";
import './AllToy.css'
const AllToy = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className="md:px-36 py-10">
            <h1 className="text-5xl font-bold text-center mb-8">All
                <span className="text-primary"> Toys</span>
            </h1>
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