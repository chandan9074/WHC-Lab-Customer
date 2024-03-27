const PrimaryButton = ({
    label,
    className,
    bgColor = "bg-brand-blue-500",
    textColor = "text-white",
    width = "sm:w-auto w-full",
    bgHoverColor = "hover:bg-brand-blue-800",
}) => {
    return (
        <button
            className={`py-3 sm:py-3.5 px-6 rounded-full ${bgColor} ${bgHoverColor} flex items-center gap-2.5 ${width} justify-center ${className}`}
        >
            <p className={`${textColor} md:text-base text-sm font-semibold`}>
                {label}
            </p>
        </button>
    );
};

export default PrimaryButton;
