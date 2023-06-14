import React from 'react';
import { Link } from 'react-router-dom';

const SignleFilter = ({ toy }) => {
    console.log(toy)
    const { url, name, price, ratings } = toy;
    return (
        <div className="card card-compact w-96 bg-base-100 border  shadow-md shadow-indigo-500/50">
            <figure><img src={url} className='w-[400px] h-[400px]' alt="Shoes" /></figure>
            <div className="card-body ms-4 mb-4">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-xl font-bold'><span className=' text-primary'>Price: </span>{price}$</p>
                <p className='text-xl font-bold'><span className=' text-primary'>Ratings: </span>{ratings}$</p>
                <div className="card-actions">

                    <Link to={`/toy/${toy._id}`}> <button className="btn btn-primary btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SignleFilter;