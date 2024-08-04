import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceCallGet } from "../Helper/utils";

const Cardetail = () => {
  const [data, setData] = useState();
  let useParam = useParams();
  console.log(useParam, "What is in this");
  let url = `https://dummyjson.com/users/${useParam.userId}`;

  async function getDetails() {
    let resp = await serviceCallGet(url);
    console.log(resp.data, "Card Deatil");
    setData(resp.data);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-1">
            <img
              src={data && data.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-11">
            <div className="card-body">
              <h5 className="card-title">
                {data && data.firstName} {data && data.lastName}
              </h5>
              <p className="card-text">
                {data && data.address.address} {data && data.address.city}{" "}
                {data && data.address.postalCode} {data && data.address.state}{" "}
                {data && data.address.country}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {data && data.email}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardetail;
