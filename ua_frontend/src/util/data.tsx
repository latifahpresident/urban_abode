import Bedroom from '../assets/bedroom.png'
import DiningRoom from '../assets/dining.jpg';
import Decor from '../assets/home_decor.jpg';
import Lighting from '../assets/lighting.png';

export interface CategoryProps {
    image: any
    title: string
    href: string
}

 export const category: CategoryProps[] = [
    {
        image: Bedroom,
        title: 'Bedroom',
        href: '/bedroom',
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
        image: Lighting,
        title: 'Lighting',
        href: '/lighting'
    },
  
]

export const topPicks: CategoryProps[] = [
    {
        image: Bedroom,
        title: 'Bedding',
        href: '/bedroom',
    },
    {
        image: DiningRoom,
        title: 'Kids',
        href: '/kids',
    },
    {
        image: Decor,
        title: 'Mirros',
        href: '/decor',
    },
    {
        image: Lighting,
        title: 'Office',
        href: '/office'
    },
    {
        image: Lighting,
        title: 'Pillows',
        href: '/pillows'
    },

]