import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const useStyle = makeStyles(combineStyles(
  viewStyles,
));

export default useStyle;