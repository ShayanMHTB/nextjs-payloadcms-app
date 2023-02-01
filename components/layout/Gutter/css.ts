import { createUseStyles } from 'react-jss';
import queries from '../../../css/queries';
import { gutterXXL, gutterXL } from '../../../css/structure';

export default createUseStyles({
  left: {
    paddingLeft: gutterXXL,
    [queries.xxl]: {
      paddingLeft: gutterXL,
    },
    [queries.lg]: {
      paddingLeft: 0,
    },
  },
  right: {
    paddingRight: gutterXXL,
    [queries.xxl]: {
      paddingRight: gutterXL,
    },
    [queries.lg]: {
      paddingRight: 0,
    },
  },
});
