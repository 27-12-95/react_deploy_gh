import colorNames from "colornames";
const Input = ({colorValue,setColorValue,setHexValue,IsDarkColor,setDarkColor}
    ) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
            setColorValue (e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        >
        </input>
        <button 
        type="button" 
        onClick={() => 
            setDarkColor(!IsDarkColor)}
        
        >
Toggle Text Color
        </button>
    </form>
  )
}

export default Input;
