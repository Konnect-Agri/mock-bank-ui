import { FC, useCallback, useEffect, useState } from "react";
import { getTracks } from "../../store/actions/get-tracks";
import { Link } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { filter } from "lodash";

type PropType = {};
const ApplicationStatus: FC<PropType> = () => {
  const [trackingTickets, setTrackingTickets] = useState<any[]>([]);
  const [downloadList, setDownloadList] = useState([]);

  useEffect(() => {
    getTracks().then((res) => {
      console.log(res.data.data.order_tracking_details);
      setTrackingTickets(res.data.data.order_tracking_details);
    });
  }, []);

  const handleOnCheck = useCallback(
    (ticket: any) => (ev: any) => {
      if (ev.target.checked) {
        setDownloadList((prev: any): any => [...prev, ticket]);
      } else {
        setDownloadList(
          //@ts-ignore
          filter(
            downloadList,
            (listItem: any) => listItem.order_id !== ticket.order_id
          )
        );
      }
    },
    [downloadList]
  );
  return (
    <div style={{ padding: "50px" }}>
      <Table className="font-regular bg-white bg-opacity-70 rounded mb-16">
        <thead className="bg-gray-200 px-4">
          <tr className="text-center">
            <th className="py-3 px-4"> </th>
            <th className="py-3 px-4"> #</th>
            <th className="py-3 px-4"> Application Number </th>
            <th className="py-3 px-4"> Status </th>
            <th className="py-3 px-4"> Comments </th>
            <th className="py-3 px-4"> Review </th>
          </tr>
        </thead>
        <tbody>
          {trackingTickets.map((ticket, idx) => {
            return (
              <tr className="text-center">
                <td>                  
                  <Form.Check
                    type="checkbox"
                    label=""
                    onChange={handleOnCheck(ticket)}
                  />
                </td>
                <td className=""> {idx + 1} </td>
                <td className=""> {ticket.order_id} </td>
                <td className=""> {ticket.status} </td>
                <td className=""> {ticket.review} </td>
                <td className="">
                  <Link to={`/review/${ticket.order_id}`}>
                    <Button
                      variant="primary"
                      size="sm"
                      type="submit"
                      style={{ backgroundColor: "#2eb09f", border: "none" }}
                    >
                      Review
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="text-right">
        <Button
          style={{ backgroundColor: "#598b16", border: "none" }}
          disabled={downloadList?.length === 0}
        >
          {`  Download Selected ${
            downloadList?.length === 0 ? "" : ` (${downloadList?.length}) `
          } Application Form`}
        </Button>
      </div>
    </div>
  );
};

export default ApplicationStatus;
