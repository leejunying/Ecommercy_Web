import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useSelector } from "react-redux";
export default function WidgetSm() {
  const users = useSelector((state) => state.users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="flex col widgetSmListItem">
          {users
            .filter((data, indx) => {
              return indx <= 4;
            })
            .map((data) => {
              return (
                <div className="flex">
                  <div className="flex widgetSmUser">
                    <span className="widgetSmUsername">{data.Email}</span>
                    <span className="widgetSmUserTitle">
                      {data.Firstname} {data.Lastname}
                    </span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                  </button>
                </div>
              );
            })}
        </li>
      </ul>
    </div>
  );
}
