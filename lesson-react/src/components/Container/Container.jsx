import './container.scss';

const Container  = (props) => {
  return ( 
     <div className='size__styles'>
     <p className='card__text'>{props.text}</p>
  </div>
    )
  }

  export default Container;