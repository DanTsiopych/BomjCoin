import './Navigation.scss'
import { Link } from 'react-router-dom'

import Mask from '../../assets/icons/spy-agent.svg'
import TinyCoin from '../../assets/icons/money-coin.svg'
import Bootle from '../../assets/icons/alcoholic-drink-bottle.svg'

function Navigation() {
    return (
        <nav className='navigation'>
            <Link to='secret' className='nav-item'>
                <img src={Mask} className='nav-img' alt='mask-img' />
                <p className='nav-text'>Secret</p>
            </Link>
            <Link to='achieves' className='nav-item'>
                <img src={TinyCoin} className='nav-img' alt='coin-img' />
                <p className='nav-text'>Achieves</p>
            </Link>
            <Link to='boosts' className='nav-item'>
                <img src={Bootle} className='nav-img' alt='bottle-img' />
                <p className='nav-text'>Kiosk</p>
            </Link>
        </nav>
    )
}

export default Navigation