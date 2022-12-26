import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ReviewPage from "./Component/ReviewPage";
import Header from "./Component/Header";
import Login from "./Component/Login";

import { Toaster } from "react-hot-toast";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Component/Sidebar/Sidebar";
import { useEffect } from "react";
import { useZustandStore } from "./store";

function App() {
  const setUser=useZustandStore((state:any)=>state?.setUser);
  useEffect(() => {
    if(localStorage.getItem("user")){
      //@ts-ignore
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    
  }, [])
  
  return (
    <Router>
      <div>
        <Row style={{background:'#dfe6ed',margin:0,padding:0}}>
          <Col xs={2} style={{margin:0,padding:0}}>
            <Sidebar />
          </Col>
          <Col xs={10}  style={{margin:0,padding:0}}>
            <div className="App">
            <Header />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/review/:orderId" element={<ReviewPage />} />
              </Routes>
            </div>
          </Col>
        </Row>
        

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
