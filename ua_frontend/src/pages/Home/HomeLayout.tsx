// import { useSelector, useDispatch} from 'react-redux';
// import { productActions} from '../../Store/index'
import ParagraphBold from '../../components/ui/Typography/ParagraphBold';
import Hero from './../../assets/homepage_hero.png';
import Decor from './../../assets/home_decor.jpg';
import Kids from './../../assets/kids.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/ui/Button/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { category } from './../../util/data';
import { topPicks } from './../../util/data';
import HeadingLarge from '../../components/ui/Typography/Headings/HeadingLarge';
const HomeLayout = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const products = useSelector((state) => state.products);

    // const getProducts = () => {
    //     dispatch(productActions.getProduct())
    // }

    return (
        <main>
            <div className='h-auto w-full'>
                <img src={Hero} alt='Urban Abode Hero' className='w-full'/>
            </div>
            <div className='h-40 md:h-36 bg-yellowAccent flex items-center px-6 md:px-14 justify-between'>
                <div className='w-4/6 md:w-5/6 h-24 md:h-fit justify-around flex flex-col md:flex-row items-start md:items-center'>
                    <p className='text-3xl mr-2 text-darkGreen'>Are you local?</p>
                    <p className={`text-darkGreen text-sm md:text-2xl slef-start md:self-end w-5/6`}>Free shipping available to Austin and San Antonio.</p>
                </div>
                <button className='border-b-2 undeline cursor-pointer hover:text-cream'>Shop Now</button>
            </div>
            <div className='hidden xl:flex justify-between my-12 mx-8'>
                {category.map((item, key) => (
                    <div key={key} className='w-96 h-96 xl:w-64 xl:h-80 2xl:w-80 2xl:h-96'>
                        <Link to={`${item.href}`}>
                            <img src={item.image} alt={item.title} className='h-full w-full mb-4'/>
                            <ParagraphBold className='underline lowercase'>{item.title}</ParagraphBold>
                        </Link>
                    </div>
                ))}
            </div>
             <Carousel category={category}/>
             <div className='flex flex-col-reverse lg:h-[33rem] xl:h-[60rem] lg:flex-row my-16 lg:my-32'>
                <div className='w-full h-80  sm:h-full xl:w-1/2'>
                    <img className='w-full h-full' src={Decor} alt="decore"/>
                </div>
                <div className='h-60 lg:h-full bg-darkGreen w-full xl:w-1/2 flex lg:justify-center items-center text-2xl'>
                    <div className='flex pl-4 lg:pl-0 items-center sm:items-start md:items-center  justify-between  flex-col h-3/5 lg:h-64'>
                        <h1 className='text-cream w-9/12 text-md lg:text-4xl  2xl:text-6xl leading-none mb-2 lg:mb-10'>Elevate your space: Mix and match decore <span className='hidden lg:block'>for contrasting shapes and finishes</span></h1>
                        <Button color='cream' title='Shop Now' className='border border-cream' iconClassName='text-yellowAccent' icon={true} iconName={faArrowRight}/>
                    </div>
                </div>
             </div>
             <div className='p-4'>
                <HeadingLarge className='w-20 lg:w-80'>Top Picks</HeadingLarge>
                <Carousel category={topPicks} show={true}/>
             </div>

             <div className='flex flex-col lg:h-[33rem] xl:h-[60rem] lg:flex-row my-16 lg:mt-32 mb-0'>
                <div className='w-full h-80  sm:h-full xl:w-1/2'>
                    <img className='w-full h-full' src={Kids} alt="decore"/>
                </div>
                <div className='h-60 lg:h-full bg-creamAccent w-full xl:w-1/2 flex lg:justify-center items-center text-2xl'>
                    <div className='flex pl-4 lg:pl-0 items-center sm:items-start md:items-center justify-between  flex-col h-3/5 lg:h-64'>
                        <h1 className='text-darkGreen w-9/12 text-md lg:text-7xl leading-none mb-2 lg:mb-10'>Check out our pint size deals!</h1>
                        <Button color='darkGreen' title='Shop Now' className='border border-darkGreen' iconClassName='text-darkGreen' icon={true} iconName={faArrowRight} onClick={() => navigate('/products/Kids')}/>
                    </div>
                </div>
             </div>
        </main>
    )
}

export default HomeLayout