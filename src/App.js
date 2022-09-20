import logo from './logo.svg';
import './App.css';

const singers =[{name:'Dr Mahfuz',job:'singer'},{name:'Eva Rahman',job:'singer'},{name:'agun',job:'gan gay'},{name:'arnob',job:'pade'}]
const singerStyle ={
  color: 'purple',
  backgroundColor:'darkBlue'

}

function App() {
  const nayoks=['rubel','bappa da','kubel','sakib','joshim','salman sah','riaz','rajjak']
  return (
    <div className="App">
      {
        nayoks.map(nayok=><li>Name:{nayok}</li>)
      }
      {
        singers.map(singer=><Person name={singer.name}></Person> )
      }
      {/* {
        nayoks.map(nayok=><Person name={nayok}></Person>)
      } */}

      {/* <Person name={nayoks[0]} nayika="samanta"></Person>
      <Person name={nayoks[1]}  nayika="none"></Person>
      <Person name={nayoks[2]} nayika="kapila"></Person> */}
      
      <h5>New Component yea</h5>
      <img src="" alt="" />
      <p className=''>Look I can do react with my own</p>
      <Friend movie="singham" phone="01747777972"></Friend>
      <Friend phone="01935215443"></Friend>
      

      
    </div>
  );
}

function Person(props){
  
  return (
    <div className="person">
    <h3>{props.name}</h3>
    
  </div>
  )
}
function Friend (props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name:Ajay devgun</h3>
      <p>Phone:{props.phone}</p>
      <p>Movie:{props.movie}</p>
    </div>
  )
}

export default App;
