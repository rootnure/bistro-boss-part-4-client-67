import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthHook from "./useAuthHook";

const useCart = () => {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart];
};

export default useCart;
