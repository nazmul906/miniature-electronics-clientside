import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleform = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyname = form.toyname.value;
    const sellername = form.seller_name.value;
    const selleremail = form.seller_email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    console.log(photo);

    const toydata = {
      pictureURL: photo,
      name: toyname,
      sellerName: sellername,
      email: selleremail,
      subcategory: subcategory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
    };
    console.log(toydata);
    fetch(
      "https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/addtoy",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toydata),
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        if (data.insertedId) {
          await Swal.fire("Toy added successfully!"); // Use await to make sure Swal completes before continuing
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleform}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Picture of toy
            </label>
            <input
              type="text"
              name="photo"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Picture URL"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              toyname
            </label>
            <input
              type="text"
              name="toyname"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter toyname "
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Name
            </label>
            <input
              type="text"
              name="seller_name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Seller Name"
              defaultValue={user?.displayName}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Email
            </label>
            <input
              type="email"
              name="seller_email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Seller Email"
              defaultValue={user?.email}
              required
            />
          </div>

          <div>
            <label>Subcategory</label>
            <select
              name="subcategory"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select a sub-category</option>
              <option value="minicar">Mini Car</option>
              <option value="robotic">Robotic</option>
              <option value="minidrone">Mini drone</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Price"
              step="0.01"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Rating"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Available Quantity"
              min="0"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Detail Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter Detail Description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
