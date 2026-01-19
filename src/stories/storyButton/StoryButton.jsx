import React from "react";

import PropTypes from "prop-types";

import "./storyButton.css";

/** Primary UI component for user interaction */
export const StoryButton = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary ? "story-button--primary" : "story-button--secondary";
  return (
    <button
      type="button"
      className={["story-button", `story-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

StoryButton.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
