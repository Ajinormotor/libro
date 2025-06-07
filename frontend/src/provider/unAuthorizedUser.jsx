import { useAuthStore } from "@/store/authStore"
import { useUserStore } from "@/store/userStore"
import { useEffect } from "react"
import { useNavigate} from "react-router-dom"



export const UnAuthorizedUser = ({children}) => {
    const navigate = useNavigate()

    const {fetchUser, user} = useAuthStore()
  const {  isFetchingUsers, token} = useUserStore()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    if ( token) {
      navigate("/dashboard")
    }
  }, [user, isFetchingUsers, navigate, token])

//   useEffect(() => {
//     if(user.role === 'admin'){
//         return navigate('/dashboard')
//     } else { 
//         navigate('/')
//     }
// })

    // console.log('tokeen in unAuthorized:',  token)
    // console.log('UnAuthorized User details:', user)

   if( token && user ){
    return <h1>Loading....</h1> ;
   }

    return (
        <div className="">
            {children}
        </div>

    )

}