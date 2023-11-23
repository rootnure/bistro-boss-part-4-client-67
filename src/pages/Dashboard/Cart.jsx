import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce(
    (total, currItem) => total + currItem.price,
    0
  );
  const handleDeleteItem = (id) => {
    console.log(id);
  };
  return (
    <section className="py-16 bg-gray-100">
      <SectionTitle heading="Wanna Add More?" subHeading="My Cart" />
      <div className="w-3/4 mx-auto bg-white p-8 rounded-lg">
        <div className="flex justify-between text-4xl font-cinzel font-extrabold">
          <h2>Total Orders: {cart.length}</h2>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button className="btn text-2xl bg-amber-500 border-none text-white">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-amber-500 text-white uppercase">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {cart.map(({ _id, price, name, image }, idx) => (
                <tr key={_id}>
                  <th>{idx + 1}</th>
                  <td>
                    <figure className="h-12">
                      <img
                        src={image}
                        alt={`${name} image`}
                        className="mx-auto max-w-full max-h-full"
                      />
                    </figure>
                  </td>
                  <td>{name}</td>
                  <td className="text-center">${price.toFixed(2)}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(_id)}
                      title={`Delete ${name} from cart`}
                      className="btn bg-red-600 hover:bg-red-700 text-white text-2xl">
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
