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
        href: '/products/Bedroom',
    },
    {
        image: DiningRoom,
        title: 'Dining Room',
        href: '/products/Dining',
    },
    {
        image: Decor,
        title: 'Decor',
        href: '/products/Decor',
    },
    {
        image: Lighting,
        title: 'Lighting',
        href: '/products/Lighting'
    },
  
]

export const topPicks: CategoryProps[] = [
    {
        image: Bedroom,
        title: 'Bedding',
        href: '/products/Bedroom',
    },
    {
        image: DiningRoom,
        title: 'Kids',
        href: '/products/Kids',
    },
    {
        image: Decor,
        title: 'Mirros',
        href: '/products/Decor',
    },
    {
        image: Lighting,
        title: 'Office',
        href: '/products/Office'
    },
    {
        image: Lighting,
        title: 'Pillows',
        href: '/products/Pillows'
    },

]