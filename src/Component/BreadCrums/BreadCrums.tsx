import { map } from "lodash";
import React, { FC } from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";

type BreadCrumsType = {
  items: Array<string>;
};
const BreadCrums: FC<BreadCrumsType> = ({ items }) => {
  return (
    <Row className="py-2 px-3 mt-3">
      <Breadcrumb>
        <Breadcrumb.Item active>
       <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>   <AiFillHome size={"25px"} />  <span style={{marginLeft:'10px'}}>USER HOME</span></div>
        </Breadcrumb.Item>     
        {map(items, (item: string, idx: number) => (
          <Breadcrumb.Item active key={`${item}${idx}`}>
            {item}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Row>
  );
};

export default BreadCrums;
