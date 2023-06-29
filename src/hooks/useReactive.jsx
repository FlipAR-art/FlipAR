import { useMediaQuery, MediaQuery } from 'react-responsive'
import propTypes from 'prop-types';

//////
// useReactive function that get Reactive from useMediaQuery
////

const useReactive = () => {
  return {
    isDesktop: useMediaQuery({ minWidth: 992 }),
    isBigScreen : useMediaQuery({ minWidth: 1824 }),
    isTablet : useMediaQuery({ minWidth: 768, maxWidth: 991 }),
    isMobile: useMediaQuery({maxWidth: 767}),
    isPortrait : useMediaQuery({ orientation: 'portrait' }),
    isLandscape: useMediaQuery({orientation: 'landscape'}),
    isRetina : useMediaQuery({ minResolution: '2dppx' }),
    isLarge: useMediaQuery({minWidth: 992}),
    isMedium: useMediaQuery({minWidth: 768, maxWidth: 991}),
    isSmall: useMediaQuery({minWidth: 300, maxWidth: 767}),
    isTiny: useMediaQuery({minWidth: 1, maxWidth: 300}),
    is4k: useMediaQuery({ minResolution: '4dppx' })
  }
};

// propTypes for useReactive
useReactive.propTypes = {
  isDesktop: propTypes.bool,
  isBigScreen : propTypes.bool,
  isTablet : propTypes.bool,
  isMobile: propTypes.bool,
  isPortrait : propTypes.bool,
  isLandscape: propTypes.bool,
  isRetina : propTypes.bool,
  isLarge: propTypes.bool,
  isMedium: propTypes.bool,
  isSmall: propTypes.bool,
  isTiny: propTypes.bool,
  is4k: propTypes.bool
};

export {useReactive , MediaQuery}
