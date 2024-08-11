import { useState } from 'react'
import BackButton from "../../UI/BackButton/BackButton"
import { useAppDispatch } from '../../store/hooks'
import { clicked } from '../../features/coinSlice';
import { useLocalStorage } from 'usehooks-ts';

function BonusPage() {
    const [inputValue, setInputValue] = useState('');
    const [display, setDisplay] = useLocalStorage('display', false)
    const dispatch = useAppDispatch()
    function getBonus() {
        dispatch(clicked(10000))
        setInputValue('');
        setDisplay(true)
    }

    return (
        <div className='bonusPage'>
            <BackButton />
            {!display ? (
                <>
                    <input
                        type="text"
                        placeholder="secret_key"
                        className='bonus-input'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        className='bonus-button'
                        onClick={() => {
                            inputValue === 'secret_key' ? getBonus() : setInputValue('');
                        }}>
                        Get Bonus
                    </button>
                </>
            )
                : <p className='congratulations'>Congratulations! You got bonus!</p>
            }

        </div>
    )
}

export default BonusPage