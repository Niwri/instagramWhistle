
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  PostPage,
  StoryPage,
  ContactPage,
  CommentPage,
  AdvertiserPage,
  DevicePage,
  SummaryPage,
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
              <Route path="/" element={<SummaryPage/>}/>
              <Route path="/posts" element={<PostPage/>}/>
              <Route path="/stories" element={<StoryPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/comments" element={<CommentPage/>}/>
              <Route path="/advertisers" element={<AdvertiserPage/>}/>
              <Route path="/devices" element={<DevicePage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
