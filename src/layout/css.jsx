
///////////
// css for all pages: 
////////

const css = {
  "layout": {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(8,8,60,1) 35%, rgba(64,0,255,1) 100%)',
  },
  "main": {
    width: '95vw',
    minHeight: '91.6vh',
    display: 'flex',
    m: '1em',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  "block": {
    /* From https://css.glass */
    background: 'rgba(217, 74, 68, 0.12)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(217, 74, 68, 0.3)',
  },
  "portfolio": {
    width: 'auto',
    height: '92vh',
    display: 'flex',
    m: 0,
    p: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  "home": {
    width: '98vw',
    minHeight: '600vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  "homeBlocks": {
    width: '98vw',
    display: 'flex',
    minHeight: '91.6vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  "title": {
    textAlign: 'center',
  },
  "canvas": {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    width: '98vw',
    height: '93vh',
  },
  "theatre": {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    width: '95vw',
    height: '90vh',
    pt: '5em',
  }
};
export {css}