import { useNodeDnD } from "build-ui";

const useLayers = ({ ...props }) => {
  const nodeDnD = useNodeDnD({
    ...props,
    initialTransferType: "layers",
  });
  const isTransferingLayer = nodeDnD.isTransferingType;
  const layerBag = {
    isTransfering: isTransferingLayer,
  };
  const { ...dndBag } = nodeDnD;
  const bag = {
    ...layerBag,
    ...dndBag,
  };
  return bag;
};

export default useLayers;
