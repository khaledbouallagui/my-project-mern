import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              اجتماع
            </Link>
          </li >
          <li className="topListItem">أخبار دولية</li>
          <li className="topListItem">أخبار وطنية</li>
          <li className="topListItem">ثقافة</li>
          <li className="topListItem">سياسة</li>
          <li className="topListItem">فن</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              اقتصاد
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="topImg"src="https://c8.alamy.com/zoomsfr/9/473e636185314c2580ea75a37f28ee51/pdfwaa.jpg"alt=""/>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
        <p>بحث</p>
      </div>
    </div>
  );
}
