import  { useState, useEffect, useCallback, useMemo } from "react";
import {  Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrums from "../../Component/BreadCrums";
import ApplicationHeader from "../../Component/Home/ApplicationHeader";
import ApplicationStatus from "../../Component/Home/ApplicationStatus";


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
    // <div className="flex flex-col justify-center items-center min-h-screen">
    //   <div>
    //     <h1 className="text-white text-4xl mb-4 font-bold text-center mt-16">
    //       Loan Application Details
    //     </h1>
    
    //   </div>
    // </div>
  );
};

export default Home;

