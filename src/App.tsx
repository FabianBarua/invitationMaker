import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [generated, setGenerated] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target === null) {
      return;
    }
    const url = e.target.url.value;
    const version = e.target.version.value;
    const text = e.target.textArea.value.split("\n");
    const allUrlsGenerated = text
      .map(
        (t: string) => `${t}:\n${url}?v=${version}&i=${encodeURIComponent(t)}`
      )
      .join("\n");
    setGenerated(allUrlsGenerated);
    toast.success('Generado');
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generated);
    toast.success('Copiado al portapapeles');
  };
  return (
    <div className="  w-dvw h-dvh  p-5 bg-gray-950 flex  flex-col  items-center">
      <Toaster position="bottom-center" />
      <form className=" w-full h-full flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className=" flex w-full gap-3">
          <input
            type="text"
            className=" p-4 rounded-xl w-full bg-gray-900"
            defaultValue={'https://boda-2024.vercel.app/'}
            name="url"
            id="url"
          />
          <select name="version" className=" bg-gray-900 p-3 rounded-xl" id="version">
            <option value="v1">Fabian</option>
            <option value="v2">Andrea</option>
          </select>
        </div>
        <textarea
          className=" w-full h-full flex-1  bg-gray-900 p-3  rounded-xl min-h-56   2"
          name="textArea"
          id="text"
        ></textarea>
        <div className=" justify-center w-full gap-3 flex">
          <button className=" w-full bg-gray-900" type="submit">Generar</button>
          <button className=" w-full bg-gray-900"  type="button"  onClick={handleCopy}>Copiar todo</button>
        </div>
      <textarea
          className=" w-full  bg-gray-900 p-3  rounded-xl min-h-56 h-40  2"
          name="resultados"
          id="resultados"
          value={generated}
        ></textarea>
      </form>
    </div>
  );
}

export default App;
