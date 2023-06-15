import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
const MyToyDetails = ({ toy, index, handleDelete, updateData }) => {
    const { user } = useContext(AuthContext);
    const {
        _id,
        name,
        category,
        price,
        url,
        quantity,
        details,
        seller,
        email,
    } = toy || {};
    const modalId = `my-modal-${_id}`;
    // console.log(user);

    const {
        register,
        handleSubmit
    } = useForm();
    return (
        <tbody>
            {/* row 1 */}
            <tr className="font-bold">
                <th>{index + 1}</th>
                <td>
                    <div className="flex items-center space-x-3">
                        <img src={url} alt="" className=" w-14 h-20 rounded-md" />
                    </div>
                </td>
                <td>{name}</td>
                <td>{category}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                    <label
                        htmlFor={modalId}
                        className="btn btn-success text-white font-bold"
                    >
                        Edit
                    </label>
                    <input type="checkbox" id={modalId} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form
                                onSubmit={handleSubmit(updateData)}
                                className="space-y-10 py-16 px-8 mx-5 rounded-md  "
                            >
                                <h2 className="text-primary font-bold text-3xl text-center">
                                    Update your toy
                                </h2>
                                <div className="flex items-center justify-between gap-4 font-bold">
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        {...register("toy_name")}
                                        placeholder="Name of the Toy Car"
                                        defaultValue={name}
                                    />
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        {...register("image")}
                                        placeholder="image link"
                                        type="url"
                                        defaultValue={url}
                                    />
                                </div>
                                <div className="flex items-center justify-between gap-4 font-bold">
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        {...register("seller_name")}
                                        placeholder="Seller Name"
                                        type="text"
                                        value={seller}
                                        readOnly
                                    />
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        value={email}
                                        {...register("email")}
                                        placeholder="Seller Email"
                                        type="email"
                                        readOnly
                                    />
                                </div>
                                <input
                                    className="text-input hidden"
                                    {...register("_id")}
                                    value={_id}
                                />

                                <div className="flex items-center gap-4 font-bold">
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        {...register("quantity")}
                                        placeholder="Quantity"
                                        defaultValue={quantity}
                                        type="number"
                                    />
                                    <input
                                        className="input login-input input-bordered w-1/2"
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        defaultValue={price}
                                        type="number"
                                    />
                                    <select
                                        className="input login-input input-bordered w-1/4"
                                        defaultValue={category}
                                        {...register("category")}
                                    >
                                        <option value="racing">Racing Car</option>
                                        <option value="regular">Regular Car</option>
                                        <option value="trucks">Trucks</option>
                                    </select>
                                </div>

                                <input
                                    className="input login-input input-bordered w-full font-bold"
                                    {...register("description")}
                                    placeholder="Description"
                                    defaultValue={details}
                                />
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-outline font-bold w-full"
                                    value="Update Toy"
                                />
                            </form>

                            <div className="modal-action">
                                <label htmlFor={modalId} className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2">
                                    X
                                </label>
                            </div>
                        </div>
                    </div>
                </td>
                <th>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error font-bold text-white"
                    >
                        Delete
                    </button>
                </th>
            </tr>
        </tbody>
    );
};

export default MyToyDetails;