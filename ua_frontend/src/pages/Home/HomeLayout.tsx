import Hero from './../../assets/homepage_hero.png';

const HomeLayout = () => {
    return (
        <main className='h-screen'>
            <div className='h-full w-full'>
                <img src={Hero} alt='Urban Abode Hero' className='w-full'/>
            </div>
        </main>
    )
}

export default HomeLayout