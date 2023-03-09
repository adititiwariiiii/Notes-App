import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Edited by</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pictures-27ace.appspot.com/o/keshihii.jpg?alt=media&token=5853f9b2-1932-4de0-a4df-ea4247364cd6"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Wokanda Forever</span>
            <span className="widgetSmUserTitle"> Fulltime Gamer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pictures-27ace.appspot.com/o/keshihii.jpg?alt=media&token=5853f9b2-1932-4de0-a4df-ea4247364cd6"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Black Panther</span>
            <span className="widgetSmUserTitle">UX/UI Designer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pictures-27ace.appspot.com/o/keshihii.jpg?alt=media&token=5853f9b2-1932-4de0-a4df-ea4247364cd6"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Momo Sauce</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>

 
        </li>
      </ul>
    </div>
  );
}
