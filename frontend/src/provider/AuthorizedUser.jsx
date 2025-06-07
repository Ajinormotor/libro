import { useAuthStore } from "@/store/authStore"
import { useUserStore } from "@/store/userStore"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



export const AuthorizedUser = ({children}) => {
    const navigate = useNavigate()
    const {user} = useAuthStore()
        const {  initalizeToken, token} = useUserStore()

        useEffect(() => {
         initalizeToken()
        },[initalizeToken])

  useEffect(() => {
    if (!user && !token) {
            navigate("/auth");
        }
  }, [token, user, navigate])



// useEffect(() => {
//     if(user.role === 'admin'){
//         return navigate('/dashboard')
//     } else { 
//         navigate('/')
//     }
// })

//   console.log('tokeen in authorized:',  token)
//       console.log('Authorized User details:', user)

    if(!token || !user){
        return null 
    }

 

    return (
        <div className="">
            {children}
        </div>

    )

}