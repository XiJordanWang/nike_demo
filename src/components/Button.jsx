const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 rounded-full px-7 py-4 border font-montserrat text-lg leading-none    ${
        backgroundColor
          ? `${backgroundColor}${borderColor}${textColor}`
          : "border-coral-red text-white bg-coral-red "
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
