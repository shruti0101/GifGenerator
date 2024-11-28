import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
  <>
  <div className="bg-slate-200 w-full h-full ">
     <h4 className="bg-slate-100 p-3  text-center  text-2xl font-semibold capitalize">random Gifs</h4>

     <div className="flex flex-col w-full items-center mt-5">
      <Random></Random>
      <Tag></Tag>
     </div>
  </div>
  </>
  );
}

export default App;
