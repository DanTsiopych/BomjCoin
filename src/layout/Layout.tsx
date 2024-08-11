import './Layout.scss'
import { Outlet } from 'react-router-dom'
import { Context } from '../Context/Context'
import { useLocalStorage } from 'usehooks-ts'

function Layout() {
    const [actionValue, setActionValue] = useLocalStorage('actionValue', 1)
    const [clickedCoins, setClickedCoins] = useLocalStorage('clickedCoins', 0)
    
    const value = {
        actionValue,
        setActionValue,
        clickedCoins,
        setClickedCoins,
    }

    return (
        <Context.Provider value={value}>
            <div className='wrapper'>
                <div className='container'>
                    <Outlet />
                </div>
            </div>
        </Context.Provider>
    )
}

export default Layout