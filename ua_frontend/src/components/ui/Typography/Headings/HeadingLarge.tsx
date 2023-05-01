import { TypographyProps } from "../types"
import { twMerge } from 'tailwind-merge'


const HeadingLarge = ({ children, className } : TypographyProps) => {
    return (
        <h1 className={twMerge(`text-darkGreen w-9/12 text-md lg:text-7xl leading-none mb-2 lg:mb-10 border-b-2 pb-2 lg:pb-6 ${className}`)}>{children}</h1>
    )
};

export default HeadingLarge;