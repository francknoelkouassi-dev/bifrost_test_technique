import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>Génération d'<span>URL courte</span></h1>
      <div>
        <input
          type="text"
          placeholder="Entrez l'url à formatter"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Générer une url courte</button>
      </div>
    </div>
  )
}

export default InputShortener
