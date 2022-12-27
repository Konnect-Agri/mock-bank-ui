import  { FC, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

type ApplicationHeaderProps = {
  activeItem: string;
  onTitleClick: (arg: any) => any;
};

const ApplicationHeader: FC<ApplicationHeaderProps> = ({
  activeItem,
  onTitleClick,
}) => {

  const isApplicationStatus=useMemo(() => activeItem === "applicationStatus", [activeItem]);
  const isApplyForLoan=useMemo(() => activeItem === "applyForLoan", [activeItem]);
  const isDpr=useMemo(() => activeItem === "dpr", [activeItem]);
  return (
    <Row>
      <Col>
        <TitleCard
          active={isApplicationStatus}
          onClick={onTitleClick("applicationStatus")}
        >
          <TitleItem  active={isApplicationStatus}>Application Status</TitleItem>
        </TitleCard>
      </Col>
      <Col>
        <TitleCard
          active={isApplyForLoan}
          onClick={onTitleClick("applyForLoan")}
        >
          <TitleItem active={isApplyForLoan}>Apply For Loan</TitleItem>
        </TitleCard>
      </Col>
      <Col>
        <TitleCard active={isDpr} onClick={onTitleClick("dpr")}>
          <TitleItem active={isDpr}>DPR </TitleItem>
        </TitleCard>
      </Col>
    </Row>
  );
};

export default ApplicationHeader;

const TitleCard = styled.div<{active?:boolean}>`
  border: 1px solid black;
  text-align: center;
  border: ${({ active }: any): string => `2px solid ${active ? "green" : "gray"}`};
  background: ${({ active }: any): string => (active ? "#d1efec" : "#cccbe0")};
  padding: 10px 20px;
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    border: 2px solid green;
    background: #d1efec;
  };
  border-radius:5px;
`;

const TitleItem = styled.div<{active?:boolean}>`
  border-bottom: ${({ active }: any): string => `5px solid ${active ? "green" : "darkgray"}`};
  font-size: 18px;
  font-weight: 700;
`;
