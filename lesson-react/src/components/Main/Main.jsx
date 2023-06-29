import Card from "../Card/Card";
import Container from "../Container/Container";
import './main.scss';
const Main = () => {
  return (
    <main>
      <div className="section-size">
       <Card/> 
       <div className="section">

       <div className="blok-l">
        <h2>Blog</h2> 
        <Container text='Australia’s longest road bridge, the Macleay, spans the floodplain at Frogmore and the Macleay River at Fredrickton, totalling over 3km in length.'/>
        <Container text='It’s part of the Kempsey Bypass Project, the first stage in the approved 40km highway upgrade from Kempsey to Eungai.'/>
        <Container text='The project was 10 years in the making from 2003-2013, the bypass alone costing $618 million to the Australian government.'/>
        <Container text='The bridge, a 20-minute drive south of Kempsey, NSW, features three automobile lanes, a shielded footpath and 941 concrete beams.'/>
       </div>

       <div className="blok-r">
         <h2>News</h2> 
         <Container text='The Sydney Harbour Bridge, NSW' />
         <Container text='The Hawkesbury River Railway Bridge, NSW'/>
         <Container text='The Story Bridge, QLD'/>
        </div>
       </div>
      
      </div>
     
    </main>
  )
}
export default Main;