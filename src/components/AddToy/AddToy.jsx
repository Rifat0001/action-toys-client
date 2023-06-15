import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
const AddToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const url = form.url.value;
        const category = form.category.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const newToy = { name, quantity, seller, email, price, url, ratings, details, category }
        console.log(newToy);
        // send data to server 
        fetch('https://action-toys-server-tau.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newToy)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className="md:px-36 py-10">
            <h1 className="text-5xl font-bold text-center mb-4">Add Your
                <span className="text-primary"> Toy</span>
            </h1>
            <form onSubmit={handleAddToy} className='my-8'>
                <div className='flex my-2'>
                    <input type="text" required name='name' placeholder="Toy Name" className="me-2 input input-bordered login-input w-full" />
                    <input type="number" required name='quantity' placeholder="Available Quantity" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" required name='seller' defaultValue={user?.displayName} placeholder="Seller Name" className="me-2 input input-bordered login-input w-full" />
                    <input type="email" required name='email' defaultValue={user?.email} placeholder="Seller Email" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    {/* <input type="text" name='category' placeholder="Category" className="me-2 input input-bordered login-input w-full" /> */}
                    <select
                        className="input required input-bordered w-full login-input " name="category"
                    >
                        <option value="Marvel">Marvel</option>
                        <option value="Transformers">Transformers</option>
                        <option value="StarWar">Star War</option>
                    </select>
                    <input type="number" required name='price' placeholder="Price" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" name='url' required placeholder="Photo Url" className="me-2 input input-bordered login-input w-full" />
                    <input type="number" name='ratings' required placeholder="Ratings" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className=' my-2'>
                    <input type="text" name='details' required placeholder="Toy Description" className="me-2 input input-bordered login-input w-full" />
                </div>
                <button className="btn btn-primary text-white w-full">Add Toy</button>
            </form>
        </div>

    );
};

export default AddToy;