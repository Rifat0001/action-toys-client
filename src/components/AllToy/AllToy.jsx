import { Link, useLoaderData } from "react-router-dom";

const AllToy = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className="md:px-36 py-10">
            <h1 className="text-5xl font-bold text-center mb-4">All
                <span className="text-primary"> Toys</span>
            </h1>
            <div className="overflow-x-auto py-6">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map(toy =>

                                <tr key={toy._id}>
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
        </div>

    );
};

export default AllToy;