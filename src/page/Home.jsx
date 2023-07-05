import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div>Home</div>
    <div>
       <Link to="/editor">Editor</Link>
       <Link to="/player">Player</Link>
       <Link to="/triplex">Triplex</Link>
    </div>
    </>
  )
};
export default Home;