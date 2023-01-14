import Grid from "@material-ui/core/Grid";
import useStyle from "./style/BuilderGrid";
import SideBar, { SidebarLayers, SidebarPanel } from "./SideBar";
import { ToolBar, MenuBar } from "./TopBar";
import Workspace from "./Workspace";

const BuilderGrid = () => {
  const classes = useStyle();
  return (
    <Grid container={true} className={classes.grid}>
      <Grid container={true} item={true} className={classes.topGrid}>
        <Grid item={true} xs={12} md={6}>
          <ToolBar className={classes.tools} />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <MenuBar className={classes.menu} />
        </Grid>
      </Grid>
      <Grid
        item={true}
        container={true}
        xs={12}
        className={classes.workAndSideGrid}
      >
        <Grid item={true} xs={12} md={3} className={classes.sideGrid}>
          <SideBar className={classes.sidebar}>
            <SidebarPanel className={classes.panel} />
            <SidebarLayers className={classes.layers} />
          </SideBar>
        </Grid>
        <Grid item={true} xs={12} md={9} className={classes.workGrid}>
          <Workspace className={classes.workspace} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BuilderGrid;
