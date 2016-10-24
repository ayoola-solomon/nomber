import { fade } from 'material-ui/utils/colorManipulator';
import { cyan500, cyan700, black, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';

export default {
  fontFamily: 'Avenir, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fade(black, 0.87),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
