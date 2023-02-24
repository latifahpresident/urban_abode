interface ParagraphProps {
    children: string
    className: string
}
const ParagraphBold = ({children, className}: ParagraphProps) => {
    return (
        <p className={`font-bold text-m ${className}`}>
            {children}
        </p>
    )
};

export default ParagraphBold