import { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext'

const useAuthContext = () => {
    return useContext(AuthContext)
}

export default useAuthContext