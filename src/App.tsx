import "./App.css";
import { Slider } from "./components/slider/Slider";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Testimony } from "./layout/sections/testimony/Testimony";
import {Works} from "./layout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony/>
    </div>
  );
}

export default App;
