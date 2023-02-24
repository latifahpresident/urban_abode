import { useState } from 'react';
import { category } from '../../pages/Home/HomeLayout';
import { useSwipeable } from "react-swipeable";
import { Link } from 'react-router-dom';
import ParagraphBold from '../ui/Typography/ParagraphBold';

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const updateIndex = (newIndex) => {
        console.log('newIndex', newIndex)
        if (newIndex < 0) {
            newIndex = category.length - 1
        } else if (newIndex >= category.length) {
            newIndex = 0
        }

        setCurrentIndex(newIndex)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(currentIndex + 1),
        onSwipedRight: () => updateIndex(currentIndex - 1)
    })

    return (
        <div {...handlers} className='block md:hidden overflow-hidden my-8'>
            <div className='whitespace-nowrap transition-transform duration-300 ' style={{ transform: `translateX(-${currentIndex * 83.3}%)`}}>
                {category.map((cat, key) => (
                    <div className='inline-flex items-center justify-center h-96 w-5/6 m-1'>
                        <div className='h-full w-full'>
                            <Link to={`${cat.href}`}>
                                <img className='h-full w-full' src={cat.image} alt={cat.title}/>
                                <ParagraphBold className='underline text-darkGreen'>{cat.title}</ParagraphBold>
                            </Link>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel