import NavLinkItem from "../ui/Typography/NavLinkItem"

interface FooterLinks {
    title: string
    href: string
}

const footerCat: FooterLinks[] = [
    {
        title: 'Financing',
        href: '/about'
    },
    {
        title: 'Contact Us',
        href: '/contact'
    },
    {
        title: 'About Us',
        href: '/about'
    },

]

const Footer = () => {
    
    return (
        <footer className='bg-darkGreen w-full h-16 flex items-center mt-20'>
            <ul className='flex w-full justify-around'>
            {footerCat.map((cat, key) => (
                <NavLinkItem  key={key} title={cat.title} href={cat.href}/>
            ))}
            </ul>
        </footer>
    )
}

export default Footer