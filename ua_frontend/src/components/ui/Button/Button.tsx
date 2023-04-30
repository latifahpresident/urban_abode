import Icon from "../Icons/Icon"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { twMerge } from 'tailwind-merge'
interface ButtonProps {
    title?: string
    color: string | 'darkGreen'
    className?: string
    icon?: boolean
    iconName?: IconProp
    iconClassName?: string
    onClick?: (e?: any) => void
}

const Button = ({ title, color, icon, iconName, iconClassName, className, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={twMerge(`border text-lg text-${color} w-44 p-0.5 flex justify-around items-center`, `${className}`)}>  {title} {icon && iconName &&  <Icon iconName={iconName} className={iconClassName}/> } </button>
    )
}

export default Button