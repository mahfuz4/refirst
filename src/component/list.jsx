import Clock from './clock';

function Clocklist({quantities = []}){
    return(
        <div>
        {quantities.map((key) => (<Clock key={key} />))}
    </div>
    )
}
export default Clocklist