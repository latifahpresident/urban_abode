interface ParagraphProps {
    children: string | number
    className: string
}

const ParagraphMediumBold =  ({children, className}: ParagraphProps) =>  {
    return (
        <p className={`${className} capitalize font-medium mt-4 `}>
            {children}
        </p>
    )
};

export default ParagraphMediumBold