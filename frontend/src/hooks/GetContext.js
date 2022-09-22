import { useContext } from 'react'
import AppContext from '../context/AppContext'

const useGetContext = () => {
    return useContext(AppContext)
}

export default useGetContext