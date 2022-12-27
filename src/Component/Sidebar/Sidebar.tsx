import { FC } from "react";
import styled from "styled-components";
import logo from "../../assets/images/krushak-logo.png";
import { Link } from "react-router-dom";

const Sidebar: FC<any> = ({}) => {
  return (
    <Navbar>
      <NavbarItem isBlank={true}>       
        <img src={logo} style={{ margin: "0 auto", height: "150px" }} />
      </NavbarItem>
      <Link to="/home" style={{ textDecoration: "none", color: "white" }}>       
        <NavbarItem active={true}> Home </NavbarItem>{" "}
      </Link>
      <Link to="/loan" style={{ textDecoration: "none", color: "white" }} >      
        <NavbarItem>How To Apply For Loan</NavbarItem>{" "}
      </Link>
      <Link to="/myConsent" style={{ textDecoration: "none", color: "white" }}>       
        <NavbarItem>My Consent</NavbarItem>{" "}
      </Link>
    </Navbar>
  );
};

export default Sidebar;

const Navbar = styled.div`
  height: 100vh;
  border: 2px solid lightgray;
  background: #d2e4e1;
  position: fixed;
  width: 15vw;
`;

const NavbarItem = styled.div<{ isBlank?: boolean; active?: boolean }>`
  border-bottom: 1px solid lightgray;
  min-height: 50px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  line-height: 50px;
  background: ${({ active, isBlank }: any) =>
    isBlank ? "#d2e4e1" : active ? "#598b16" : "#2eaf9f"};
  margin-bottom: 2px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background: ${({ isBlank }: any) => (isBlank ? "#d2e4e1" : "#598b16")};
  }
`;

