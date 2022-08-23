import Square from "./Square";
import Input from "./Input";
import { useState } from 'react';

function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue]=useState('');
  const [IsDarkColor,setDarkColor]=useState(true);
  return (
<div className="App">
<Square
colorValue={colorValue}
hexValue={hexValue}
IsDarkColor={IsDarkColor}
></Square>
<Input
colorValue={colorValue}
setColorValue={setColorValue}
setHexValue={setHexValue}
IsDarkColor={IsDarkColor}
setDarkColor={setDarkColor}
></Input>
</div>
  );
}

export default App;
