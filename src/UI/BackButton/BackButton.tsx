import './BackButton.scss'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/long-arrow-left.png'
function BackButton() {
    return (
        <Link to='/' className='back-button'>
            <img
                className='arrow-left'
                alt='arrow-left'
                src={Arrow}
            />
            <p className='button-text'>Back</p>
        </Link>
    )
}

export default BackButton