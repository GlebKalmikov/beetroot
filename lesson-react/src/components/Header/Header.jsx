
import './header.scss';
const Header = () => {
  return (
    <header>
      <div className="box-size">
        <div className='logo'>Australia</div>
        <h1>Bridges in Australia</h1>
        <div className='icons'>
          <div className='color'>Home</div>
          <div className='color'>Art</div>
          <div className='color'>History</div>
          <div className='color'>Apps</div>
          <div className='color'>About Me</div>
        </div>
      </div>
    </header>
  )
}
export default Header;