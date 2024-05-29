import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

 
 
const useCart = () => {
   const axiosSecure = useAxiosSecure()
   const { user, loading } = useAuth()
   const { refetch, data: cart = [] } = useQuery({
       queryKey: ['cart', user?.email],
       enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
    //    enabled: !loading && !!user?.email,
       queryFn: async () => {
           if (user?.email) {
               const res = await axiosSecure.get(`/carts?email=${ user?.email }`)
               return res.data;
           }
       }
   })
   return [cart, refetch]
};

 
 export default useCart;