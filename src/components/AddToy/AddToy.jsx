import Swal from 'sweetalert2'
const AddToy = () => {
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
        fetch('http://localhost:5000/toy', {
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
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
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
                    <input type="text" name='name' placeholder="Toy Name" className="me-2 input input-bordered login-input w-full" />
                    <input type="number" name='quantity' placeholder="Available Quantity" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" name='seller' placeholder="Seller Name" className="me-2 input input-bordered login-input w-full" />
                    <input type="email" name='email' placeholder="Seller Email" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    {/* <input type="text" name='category' placeholder="Category" className="me-2 input input-bordered login-input w-full" /> */}
                    <select
                        className="input input-bordered w-full login-input " name="category"
                    >
                        <option value="marvel">Marvel</option>
                        <option value="transformers">Transformers</option>
                        <option value="starWar">Star War</option>
                    </select>
                    <input type="number" name='price' placeholder="Price" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" name='url' placeholder="Photo Url" className="me-2 input input-bordered login-input w-full" />
                    <input type="number" name='ratings' placeholder="Ratings" className="input ms-2 input-bordered login-input w-full" />
                </div>
                <div className=' my-2'>
                    <input type="text" name='details' placeholder="Toy Description" className="me-2 input input-bordered login-input w-full" />
                </div>
                <button className="btn btn-primary text-white w-full">Add Toy</button>
            </form>
        </div>

    );
};

export default AddToy;