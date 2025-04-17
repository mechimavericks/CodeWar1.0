import React from "react";

function Button({
  text,
  url,
  badgeText = null,
  className = "",
  onClick = null,
  variant = "primary", // primary, secondary, outline, etc.
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  // Base styles for all buttons
  const baseStyles =
    "relative px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base overflow-hidden font-semibold duration-300 rounded";

  // Different variant styles
  const variantStyles = {
    primary:
      "text-white bg-blue-800 dark:bg-blue-200 dark:text-gray-900 hover:bg-black hover:text-white",
    secondary:
      "bg-gray-100 border dark:border-gray-100 dark:text-gray-100 dark:bg-transparent dark:hover:bg-white hover:bg-transparent hover:text-white dark:hover:text-black",
  };

  // Combine the styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type="button" className={buttonStyles} onClick={handleClick}>
      {text}
      {badgeText && (
        <span className="absolute top-0 right-0 p-5 px-3 py-1 text-xs text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full tracki translate-x-1/3 dark:bg-violet-400 bg-violet-600">
          {badgeText}
        </span>
      )}
    </button>
  );
}

export default Button;
