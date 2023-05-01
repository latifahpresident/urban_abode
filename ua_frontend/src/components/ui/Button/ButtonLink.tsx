interface ButtonProps {
    children: string
    className?: string
    onclick?: () => void
}

const ButtonLink = ({ children } : ButtonProps) => {
    return (
        <button className='underline text-darkGreen capitalize underline-offset-4 text-darkGreen'>{children}</button>

    )
};

export default ButtonLink;