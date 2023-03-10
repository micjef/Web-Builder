import { isFunction } from "../utils/function";
import { deepMerge } from "../utils/object";

function combineStyles(...styles) {
  return function CombineStyles(theme) {
    const outStyles = styles.map((arg) => {
      if (isFunction(arg)) {
        return arg(theme);
      }
      return arg;
    });
    return outStyles.reduce((acc, val) => deepMerge(acc, val), {});
  };
}

export default combineStyles;