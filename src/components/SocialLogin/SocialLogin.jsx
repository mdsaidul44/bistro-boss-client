import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {GoogleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleWithGoogleSignIn = ()=>{
        GoogleSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }

    return (
        <div className="p-8">
            <button onClick={handleWithGoogleSignIn} className="btn mr-4"> 
            <FaGoogle/>
                GOOGLE
            </button>
        </div>
    );
};

export default SocialLogin;