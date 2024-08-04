import React, { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/utils";
import { Link } from "react-router-dom";

const Card = () => {
  const url = "https://dummyjson.com/users/";
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let resp = await serviceCallGet(url);
    console.log(resp.data, "usersData");
    setData(resp.data.users);
  };
  return (
    <div>
      <h1 className="display-6">All Users</h1>
      <div className="row">
        {data.map((item, i) => {
          return (
            <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={i}>
              <div className="card my-2">
                <div className="card-header">Users {item.id}</div>
                <ul className="list-group list-group-flush">
                  <Link to={item.id + ""}>
                    <li className="list-group-item">
                      {" "}
                      {item.firstName} {item.lastName}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
