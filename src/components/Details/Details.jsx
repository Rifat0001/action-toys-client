import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData();
    const { seller, name, price, category, details, email, quantity, ratings, url } = toy;
    console.log(toy)
    return (
        <div className="card grid md:grid-cols-2  justify-center content-center items-center grid-cols-1  bg-base-100 shadow-xl py-20">
            <div>
                <figure><img className='w-[500px] h-[500px]' src={url} alt="Movie" /></figure>
            </div>

            <div className='space-y-4'>
                <h2 className="card-title text-3xl"><span className='font-bold text-primary'>Toy Name:</span>{name}</h2>
                <p className='text-xl font-bold'><span className=' text-primary'>Seller Name: </span>{seller}</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Seller Email: </span>{email}</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Available: </span>{quantity}</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Category: </span>{category}</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Price: </span>{price} $</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Ratings: </span>{ratings}</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Details: </span>{details} </p>


            </div>
        </div>
    );
};

export default Details;