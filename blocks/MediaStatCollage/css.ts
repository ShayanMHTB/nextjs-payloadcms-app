import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';
import { small, medium, large } from '../../css/sizes';

export default createUseStyles({
  overflow: {
    overflow: 'hidden',
    padding: `${base(25)} 0`,
    margin: `${base(-25)} 0`,
    [queries.md]: {
      padding: `${base(10)} 0`,
      margin: `${base(-10)} 0`,
    },
  },
  wrap: {
    position: 'relative',
    zIndex: 2,
  },
  'top-overlap-small': {
    marginTop: `calc(${small} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${small} * -1)`,
    },
    [queries.md]: {
      marginTop: 0,
    },
  },
  'top-overlap-medium': {
    marginTop: `calc(${medium} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${medium} * -1)`,
    },
    [queries.md]: {
      marginTop: 0,
    },
  },
  'top-overlap-large': {
    marginTop: `calc(${large} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${large} * -1)`,
    },
    [queries.md]: {
      marginTop: 0,
    },
  },
  'bottom-overlap-small': {
    marginBottom: `calc(${small} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${small} * -1)`,
    },
    [queries.md]: {
      marginBottom: 0,
    },
  },
  'bottom-overlap-medium': {
    marginBottom: `calc(${medium} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${medium} * -1)`,
    },
    [queries.md]: {
      marginBottom: 0,
    },
  },
  'bottom-overlap-large': {
    marginBottom: `calc(${large} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${large} * -1)`,
    },
    [queries.md]: {
      marginBottom: 0,
    },
  },
  row1: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    [queries.md]: {
      marginBottom: base(10),
    },
  },
  row2: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    [queries.md]: {
      marginBottom: base(-5),
    },
  },
  row3: {
    display: 'flex',
    justifyContent: 'space-between',
    [queries.md]: {
      display: 'block',
    },
  },
  stat1: {
    position: 'relative',
    bottom: base(-5),
    left: '20%',
    [queries.xl]: {
      left: '5%',
    },
    [queries.md]: {
      left: '-5%',
      bottom: base(-10),
    },
  },
  stat2: {
    position: 'relative',
    right: base(4),
    [queries.md]: {
      right: base(6),
    },
  },
  stat3: {
    position: 'relative',
    zIndex: 3,
    left: base(-5),
    [queries.md]: {
      left: 'initial',
    },
  },
  media1: {
    marginRight: medium,
    [queries.md]: {
      marginRight: 0,
    },
  },
  media2: {
    margin: `0 ${medium}`,
    position: 'relative',
    top: base(-3),
    [queries.md]: {
      margin: `0 ${small}`,
    },
  },
  media3: {
    width: '40%',
    marginLeft: '10%',
    position: 'relative',
    top: base(10),
    [queries.md]: {
      width: '90%',
    },
  },
  media4: {
    position: 'relative',
    [queries.md]: {
      top: base(-5),
      marginLeft: '30%',

    },
  },
});
