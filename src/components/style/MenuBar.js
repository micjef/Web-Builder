import { makeStyles } from "@material-ui/core/styles";
import combineStyles from "../../styles/combine";

const menuStyles = {
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  action: {
    flex: "1 1 0",
    height: "100%",
  },
  file: {
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  invisible: {
    display: "none",
  },
  button: {
    borderRadius: 0,
  },
};

const useStyle = makeStyles(combineStyles(menuStyles));

export default useStyle;
