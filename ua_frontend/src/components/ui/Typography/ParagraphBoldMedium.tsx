interface ParagraphProps {
    children: string | number
    className: string
}

const ParagraphMediumBold =  ({children, className}: ParagraphProps) =>  {
    return (
        <p className={`capitalize text-xs font-medium mt-4 ${className}`}>
            {children}
        </p>
    )
};

export default ParagraphMediumBold