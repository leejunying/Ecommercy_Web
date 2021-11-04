import "./widgetLg.css";
import React from "react";
import { useSelector } from "react-redux";
export default function WidgetLg() {
  const payments = useSelector((state) => state.payments);
  console.log(payments);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table
        style={{ overflow: "scroll", overflowX: "hidden" }}
        className="widgetLgTable"
      >
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
        </tr>

        {payments.length > 0
          ? payments
              .filter((data, indx) => {
                return indx <= 10;
              })
              .map((data) => {
                return (
                  <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <h3>{data.Email}</h3>
                      <span className="widgetLgName"></span>
                    </td>
                    <td className="widgetLgDate">{data.create_date}</td>
                    <td className="widgetLgAmount">{data.Amount}$</td>
                  </tr>
                );
              })
          : null}
      </table>
    </div>
  );
}
