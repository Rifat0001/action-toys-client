import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import MyToyDetails from "../MyToyDetails/MyToyDetails";
import { AuthContext } from "../Provider/AuthProvider";

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
    }, [user, control])
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
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
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

                {
                    toys.map((toy, index) =>

                        <MyToyDetails handleDelete={handleDelete} updateData={updateData} index={index} key={toy._id} toy={toy}></MyToyDetails>
                    )
                }

            </table>
        </div >
    );
};

export default MyToy;