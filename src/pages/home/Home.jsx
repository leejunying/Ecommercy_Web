import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import {store} from "../../Redux/store"
import { GET_DATA } from "../../Redux/Data/dataTypes";
export default function Home() {

  store.dispatch({type:GET_DATA})
 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
