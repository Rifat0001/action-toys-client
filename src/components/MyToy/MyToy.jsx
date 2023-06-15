import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data)
                console.log(data)
            })
    }, [user])


    const updateData = data => {
        // send data to server side use post method to trigger server side App.post function 
        fetch(`http://localhost:5000/myToys/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setControl(!control);
                    // sweet alert
                    Swal.fire("Updated!", "The toy has been updated.", "success");
                }
                console.log(data);
            });
    }


    // delete toy function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F87272',
            cancelButtonColor: '#36D399',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Toy Deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        })

    };
    return (
        <div className="py-10 md:px-36 px-0">
            <h1 className="text-5xl font-bold text-center mb-8">My
                <span className="text-primary"> Toys {toys.length}</span></h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr >
                        <th>SI</th>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Open the modal using ID.showModal() method */}



                    {
                        toys.map((toy, index) =>

                            < tr key={toy._id} >

                                <td>{index + 1}</td>
                                <td><img src={toy.url} className="w-14 h-20" alt="" /></td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td> <button className="btn btn-success text-white" onClick={() => window.my_modal_1.showModal()}>Edit</button></td>
                                <dialog id="my_modal_1" className="modal">

                                    <form onSubmit={handleUpdate(updateData)} method="dialog" className='modal-box'>
                                        <div className='flex my-2'>
                                            <input type="text" defaultValue={toy?.name} name='name' placeholder="Toy Name" className="me-2 input input-bordered login-input w-full" />
                                            <input type="number" defaultValue={toy?.quantity} name='quantity' placeholder="Available Quantity" className="input ms-2 input-bordered login-input w-full" />
                                        </div>
                                        <div className='flex my-2'>
                                            <input type="text" name='seller' defaultValue={user?.displayName} placeholder="Seller Name" className="me-2 input input-bordered login-input w-full" />
                                            <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input ms-2 input-bordered login-input w-full" />
                                        </div>
                                        <div className='flex my-2'>
                                            {/* <input type="text" name='category' placeholder="Category" className="me-2 input input-bordered login-input w-full" /> */}
                                            <select defaultValue={toy?.category}
                                                className="input input-bordered w-full login-input " name="category"
                                            >
                                                <option value="Marvel">Marvel</option>
                                                <option value="Transformers">Transformers</option>
                                                <option value="StarWar">Star War</option>
                                            </select>
                                            <input type="number" defaultValue={toy?.price} name='price' placeholder="Price" className="input ms-2 input-bordered login-input w-full" />
                                        </div>
                                        <div className='flex my-2'>
                                            <input type="text" name='url' placeholder="Photo Url" className="me-2 input input-bordered login-input w-full" defaultValue={toy?.url} />
                                            <input type="number" name='ratings' defaultValue={toy?.ratings} placeholder="Ratings" className="input ms-2 input-bordered login-input w-full" />
                                        </div>
                                        <div className=' my-2'>
                                            <input type="text" name='details' defaultValue={toy?.details} placeholder="Toy Description" className="me-2 input input-bordered login-input w-full" />
                                        </div>

                                        <button className="btn btn-primary text-white"  >Update</button>


                                    </form>
                                    <button className="btn btn-error">Close</button>
                                </dialog>
                                <td><button onClick={() => handleDelete(toy._id)} className="btn btn-error text-white">
                                    Delete
                                </button></td>

                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div >
    );
};

export default MyToy;