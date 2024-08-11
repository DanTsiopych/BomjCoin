import BackButton from '../../UI/BackButton/BackButton'
import Boost from '../../components/Boost/Boost'
import './BoostsPage.scss'


function BoostsPage() {
    return (
        <div className='boostsPage'>
            <BackButton />
            <div className='boosts-content'>
                <h3 className='boosts-title'>Kiosk</h3>
                <div className='boosts'>
                    <Boost title='Drink vodka' price={3000} description='Vodka give you +5 to power' boost={5} id={1}/>
                    <Boost title='Drink beer' price={5000} description='Gold rain give you +7' boost={7} id={2}/>
                    <Boost title='Fight on landfill' price={8000} description='Win is yours +10' boost={10} id={3}/>
                    <Boost title='Mexican cigarette' price={13000} description='Smoke have spead by your room +15' boost={15} id={4}/>
                    <Boost title="Get someone's clock" price={17000} description='Wow, I got fot this +20' boost={20} id={5}/>
                    <Boost title="I'm rich!" price={150000} description='Loose money and cashback +1' boost={1} id={6}/>
                </div>
            </div>
        </div>
    )
}

export default BoostsPage