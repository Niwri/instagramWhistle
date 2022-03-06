
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  PostPage,
  StoryPage
} from "./components/pages/imports";

import MenuBar from './components/MenuBar';



function App() {
  return (
      <div>
        <div className="menuBarContainerSide">
          <MenuBar/>
        </div>
        <div className="mainPage">
          <BrowserRouter>
            <Routes>
              <Route path="/posts" element={<PostPage/>}/>
              <Route path="/stories" element={<StoryPage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
