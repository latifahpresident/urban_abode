import ParagraphBold from '../../components/ui/Typography/ParagraphBold';
import Hero from './../../assets/homepage_hero.png';
import Bedroom from './../../assets/bedroom.png';
import DiningRoom from './../../assets/dining.jpg';
import Decor from './../../assets/decor.jpeg';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

interface CategoryProps {
    image: any
    title: string
    href: string
}
export const category: CategoryProps[] = [
    {
        image: Bedroom,
        title: 'Bedroom',
        href: '/bedrrom',
    },
    {
        image: DiningRoom,
        title: 'Dining Room',
        href: '/diningroom',
    },
    {
        image: Decor,
        title: 'Decor',
        href: '/decor',
    },
    {
        image: Bedroom,
        title: 'Lighting',
        href: '/lighting'
    },
  
]


const HomeLayout = () => {
    return (
        <main className='h-screen'>
            <div className='h-auto w-full'>
                <img src={Hero} alt='Urban Abode Hero' className='w-full'/>
            </div>
            <div className='h-40 md:h-20 bg-yellowAccent flex items-center px-6 md:px-14 justify-between'>
                <div className='w-4/6 md:w-5/6 h-24 md:h-fit justify-around flex flex-col md:flex-row items-start md:items-center'>
                    <p className='text-3xl mr-2 text-darkGreen'>Are you local?</p>
                    <p className={`text-darkGreen text-sm md:text-2xl slef-start md:self-end w-5/6`}>Free shipping available to Austin and San Antonio.</p>
                </div>
                <button className='border-b-2 undeline cursor-pointer hover:text-cream'>Shop Now</button>
            </div>
            <div className='hidden md:flex justify-between my-12 mx-20'>
                {category.map((item, key) => (
                    <div key={key} className='w-80'>
                        <Link to={`${item.href}`}>
                            <img src={item.image} alt={item.title} className='h-full mb-4'/>
                            <ParagraphBold className='underline'>{item.title}</ParagraphBold>
                        </Link>
                    </div>
                ))}
            </div>
             <Carousel/>
        </main>
    )
}

export default HomeLayout