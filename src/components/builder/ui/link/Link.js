import useStyle from "./style/Link";
import clsx from "clsx";
import React from "react";
import LinkRoot from "./LinkRoot";

// eslint-disable-next-line react/display-name
const Link = React.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const classes = useStyle(style);
    const classLink = clsx(classes.link, classes.fill);
    const classAll = clsx(className, classes.ui);
    return (
      <div className={classAll}>
        <LinkRoot ref={ref} className={classLink} {...props} />
        {children}
      </div>
    );
  }
);

export default Link;
