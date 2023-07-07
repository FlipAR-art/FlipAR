import {Link} from 'react-router-dom';

const css = {
  "main": {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '2em',
  },
  "title": {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  "menu": {
    width: '100vw',
    margin: '2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  "link": {
    width: '100vw',
     fontSize: '2em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'cyan',
  }
}
const Home = () => {
  return (
    <div style={css.main}>
        <div style={css.title}>Home</div>
        <div style={css.menu}>
          <Link
            style={css.link} 
            to="/editor">Editor</Link>
          <Link 
            style={css.link}
            to="/player">Player</Link>
          <Link 
            style={css.link}
            to="/phoenix">Phoenix</Link>
        </div>
    </div>
  )
};
export default Home;