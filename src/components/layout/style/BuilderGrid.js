import { makeStyles } from "@material-ui/core/styles";
import combineStyles from "../../../styles/combine";
import { topbarStyles } from "./TopBar";
import { sidebarStyles } from "./SideBar";
import { workspaceStyles } from "./Workspace";

export const gridStyles = (theme) => ({
  grid: {},
  workAndSideGrid: {
    [theme.breakpoints.up("md")]: {
      height: 650,
    },
  },
  workGrid: {
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh-60px)",
    },
  },
  sideGrid: {
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
});

const useStyle = makeStyles(
  combineStyles(gridStyles, topbarStyles, workspaceStyles, sidebarStyles)
);

export default useStyle;
