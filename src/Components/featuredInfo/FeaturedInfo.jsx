import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useSelector } from "react-redux";
export default function FeaturedInfo() {
  const sumpayment = (arr) => {
    let listamount = arr.map((items) => {
      return items.Amount;
    });

    const reducer = (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue);
    console.log(listamount);
    let transaction = listamount.reduce(reducer);
    console.log(transaction);

    return transaction;
  };
  const payments = useSelector((state) => state.payments);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {" "}
            ${payments.length > 0 ? sumpayment(payments) : null} USD
          </span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span> */}
        </div>
        <span className="featuredSub">This month revanue </span>
      </div>
      {/* <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
      {/* <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
    </div>
  );
}
