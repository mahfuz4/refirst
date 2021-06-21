export default function HoverCounters ({count, handleClick}) {
    return(
        <h1 type="button" onMouseOver={handleClick} > Hover here {count}</h1>
    )
}