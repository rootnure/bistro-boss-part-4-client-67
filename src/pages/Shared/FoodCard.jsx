import PropTypes from "prop-types";
import MainBtn from "../../components/MainBtn";
import useAuthHook from "../../hooks/useAuthHook";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const {user} = useAuthHook();
    const navigate = useNavigate();
    const location = useLocation();
    const { name, recipe, image, price } = item;

    const handleAddToCart = food => {
        if(user && user?.email) {
            console.log(food);
            // TOOD: send cart data to server
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Do you want to login now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Go To Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {state: {from: location}})
                }
              });
        }
    }
    return (
        <>
            <div className="card bg-base-100 rounded-xl relative">
                {price ? <p className="absolute right-2 top-2 px-1 py-0.5 rounded text-white bg-blue-600 font-medium">${price.toFixed(2)}</p> : ""}
                <figure className="h-60 rounded-t-xl overflow-hidden">
                    <img src={image} alt={name} className="min-w-full min-h-full" />
                </figure>
                <div className="card-body bg-gray-100 items-center text-center rounded-b-xl">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <MainBtn 
                        handleAddToCart={handleAddToCart}
                        food={item}
                        isBgWhite>Add To Cart</MainBtn>
                    </div>
                </div>
            </div>

        </>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default FoodCard;