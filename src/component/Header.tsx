import { FC, useMemo, useCallback } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import userLogo from "../assets/images/user-logo.png";
import Image from "react-bootstrap/Image";
import { StoreStateType, useZustandStore } from "../store";
import { capitalize } from "lodash";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {

  const [user, resetUser] = useZustandStore((state: StoreStateType | any) => [
    state.user,
    state.resetUser,
  ]);

  const navigateTo = useNavigate();
  const isLoggedIn = useMemo(() => !!user?.token, [user?.token]);

  const onLogout = useCallback(() => {
    resetUser();
    navigateTo("/");
  }, [resetUser]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ borderRadius: "10px" }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Title> Krushak Odisha </Title>
            <span style={{ fontSize: "15px" }}> Government of Odisha </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Item>
              <Form>
                <Form.Check type="switch" id="custom-switch" label="Telugu" />
              </Form>
            </Nav.Item>
            {isLoggedIn && (
              <Nav.Item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                  }}
                >
                  <Image
                    src={userLogo}
                    width="30px"
                    style={{ marginRight: "5px" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "10px" }}>Welcome </span>
                    <span style={{ fontSize: "12px", fontWeight: "bolder" }}>
                      {capitalize(user?.user?.username)}
                    </span>
                  </div>
                </div>
              </Nav.Item>
            )}
            {isLoggedIn && (
              <Nav.Link href="#" onClick={onLogout}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <AiOutlineLogout style={{ color: "red" }} />
                  <span style={{ marginLeft: "5px", color: "red" }}>
                    Logout
                  </span>
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;

const Title = styled.h4`
  color: #393185;
`;
