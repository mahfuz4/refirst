
// import './App.css';
// import Clock from './component/clock'
// import Clocklist from './component/list'
import ClickCounter from './hoc/ClickCounter'
import HoverCounter from './hoc/HoverCounter'
import ClickCounters from './component/randerProps/ClickCountres'
import Counter from './component/randerProps/Counter'
import HoverCounters from './component/randerProps/HoverCounters'


function App() {

  return (
    <>
    <ClickCounter/>
    <HoverCounter/>
    <Counter render={(count, handleClick) => (<ClickCounters count={count} handleClick={handleClick}/>)}/>
    <Counter render={(count, handleClick) => (<HoverCounters count={count} handleClick={handleClick}/>)}/>
    </>
  );
}
// function App() {
//   const quantities = [1,2,3];
//   return (
//     <Clocklist quantities= {quantities} />
//   );
// }

export default App;
