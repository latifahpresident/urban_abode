import { useState, useEffect } from 'react';
import { CategoryProps } from '../../util/data';
import { useSwipeable } from "react-swipeable";
import { Link } from 'react-router-dom';
import ParagraphBold from '../ui/Typography/ParagraphBold';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Icon from '../ui/Icons/Icon';

interface CarouselProps  {
    category: CategoryProps[]
    show?: boolean
}

const Carousel = ({ category, show } : CarouselProps) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = category.length - 1
        } else if (newIndex >= category.length) {
            newIndex = 0
        }

        setCurrentIndex(newIndex)
    }

    const next = () => {
        updateIndex(currentIndex + 1)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(currentIndex + 1),
        onSwipedRight: () => updateIndex(currentIndex - 1),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    })

   

    const prev = () => {
        updateIndex(currentIndex - 1)
    }

    const getTranslateValue = () => {
        let translateValue
         if (windowSize >= 1536) {
            translateValue = currentIndex * 23.3
         }
        if (windowSize >= 1024) {
           translateValue = currentIndex * 33.3
        } else if (windowSize >= 768) {
            translateValue =  currentIndex * 63.3
        } else {
            translateValue =  currentIndex * 83.3
        }

        return translateValue
    }

    return (
        <div {...handlers} className={`${show ? 'block' : 'xl:hidden'} overflow-hidden my-8 relative`}>
            <button onClick={next} className={ `hidden text-yellowAccent text-5xl absolute translate-y-2/4 right-6 2xl:right-1 rounded-full bg-transparentGreen p-0.5 top-[40%] z-10 w-fit  ${currentIndex === 2 ? 'hidden' : 'lg:flex'}`}>
                <Icon iconName={faChevronRight}/>
            </button>
            <div className='whitespace-nowrap transition-transform relative' style={{ transform:`translateX(-${getTranslateValue()}%)`, transition: "transform .6s"}}>                
                {category.map((cat, key) => (
                    <div key={key} className='inline-flex items-center justify-center h-96 w-5/6 sm:w-4/6 m-1 lg:m-4 lg:w-96'>
                        <div className='h-full w-full'>
                            <Link to={`${cat.href}`}>
                                <img className='h-full w-full' src={cat.image} alt={cat.title}/>
                                <ParagraphBold className='underline text-darkGreen lowercase'>{cat.title}</ParagraphBold>
                            </Link>
                        </div>
                    </div>
                ))} 
            </div>
            <button onClick={prev} className={`hidden text-yellowAccent text-5xl absolute translate-y-2/4 top-[40%] z-10 w-fit left-5 rounded-full bg-transparentGreen p-0.5 ${currentIndex === 0 ? 'hidden' : 'lg:flex'}`}>
                 <Icon iconName={faChevronLeft}/>
            </button>
        </div>
    )
}

export default Carousel