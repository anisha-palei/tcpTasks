import "./App.css";
import Dashboard from "./component/Dashboard";
import {
  Route,BrowserRouter as Router,
  Routes
} from "react-router-dom";
import News from "./component/News";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Dashboard data1={"in"}/>}></Route>
    <Route path='/news' element={<News data1={"in"}/>}></Route>
    <Route path='/news/business' element={<News key="business" data2={"business"} />}></Route>
    <Route path='/news/international' element={<News key="us"  data1={"us"} />}></Route>
    <Route path='/news/science' element={<News  key="science" data2={"science"} />}></Route>
    <Route path='/news/sport' element={<News key="sport"data2={"sports"}/>}></Route>
    <Route path='/news/technology' element={<News key="technology"  data2={"technology"} />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
