import  { useState, useEffect, useCallback, useMemo } from "react";
import {  Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrums from "../component/BreadCrums";
import ApplicationHeader from "../component/Home/ApplicationHeader";
import ApplicationStatus from "../component/Home/ApplicationStatus";


const Home = (props: any) => {
  
  const [activeItem, setActiveItem] = useState('applicationStatus');
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigateTo("/");
    }
  }, []);
    
  const onTitleClick=useCallback((title:string)=>()=>{
      setActiveItem(title);
  },[]);

  const isApplicationStatus=useMemo(() => activeItem === "applicationStatus", [activeItem]);
  const isApplyForLoan=useMemo(() => activeItem === "applyForLoan", [activeItem]);
  const isDpr=useMemo(() => activeItem === "dpr", [activeItem]);
  return (
    <div className="container-fluid">
      <BreadCrums items={["Application Status"]} />
      <div className="bg-white" style={{ minHeight: "80vh" ,borderRadius:'10px'}}>
        <Container>
            <ApplicationHeader onTitleClick={onTitleClick} activeItem={activeItem}/>
            <Container>
                {isApplicationStatus && (<ApplicationStatus />)}
            </Container>
        </Container>
      </div>
    </div>
  );
};

export default Home;

