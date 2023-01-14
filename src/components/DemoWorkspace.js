import React from "react";
import dynamic from "next/dynamic";
import { Workspace } from "build-ui";
import CanvasView from "./builder/ui/canvas/CanvasView";
import SectionView from "./builder/ui/section/SectionView";
import TextView from "./builder/ui/text/TextView";
import ImageView from "./builder/ui/image/ImageView";
import ButtonView from "./builder/ui/button/ButtonView";
import GridView from "./builder/ui/grid/GridView";
import BuilderSelector from "./BuilderSelector";

const DemoWorkspace = (props) => {
  const view = {
    Canvas: CanvasView,
    Section: SectionView,
    Text: TextView,
    Image: ImageView,
    Button: ButtonView,
    Grid: GridView,
    Alert: dynamic(() => import("./builder/ui/alert/AlertView")),
    Link: dynamic(() => import("./builder/ui/link/LinkView")),
  };
  return (
    <React.Fragment {...props}>
      <Workspace view={view} />
      <BuilderSelector />
    </React.Fragment>
  );
};

export default DemoWorkspace;
