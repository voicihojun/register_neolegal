import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Inscription = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    street_address: "",
    post_code: "",
    country: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setInput({
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        phone_number: e.target.phone_number.value,
        street_address: e.target.street_address.value,
        post_code: e.target.post_code.value,
        country: e.target.country.value,
      });

      await axios
        .post("https://enovode7uq1r.x.pipedream.net/", input)
        .then((response) => {
          if (response.data.success) {
            // console.log(response.data.success);
            const name = JSON.parse(localStorage.getItem("input")).first_name;

            navigate(`/merci/${name}`, { state: name });
          }
        });
    },
    [input, navigate]
  );

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("input", JSON.stringify(input));
    console.log(input);
  }, [input]);

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-8 col-9 justify-content-center row">
          <form onSubmit={handleSubmit} className="card px-4 py-4 col-sm-10">
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="fisrt_name" className="form-label">
                  Prénom<span className="text-danger"> *</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="first_name"
                  type="text"
                  name="first_name"
                  required
                />
              </div>

              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="last_name" className="form-label">
                  Nom<span className="text-danger"> *</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="last_name"
                  type="text"
                  name="last_name"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="email" className="form-label">
                  Email<span className="text-danger"> *</span>
                </label>
                <input
                  placeholder="email@example.com"
                  className="form-control mb-3"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="phone_number" className="form-label">
                  Téléphone<span className="text-danger"> *</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="phone_number"
                  type="text"
                  name="phone_number"
                  placeholder="(xxx)xxx-xxxx"
                  pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="street_address" className="form-label">
                  Adresse
                </label>
                <input
                  className="form-control mb-3"
                  id="street_address"
                  type="text"
                  name="street_address"
                />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label htmlFor="post_code" className="form-label">
                  Code postal
                </label>
                <input
                  className="form-control mb-3"
                  id="post_code"
                  type="text"
                  name="post_code"
                />
              </div>
            </div>
            <div className="form-group  flex-column d-flex">
              <label htmlFor="country" className="form-label">
                Pays<span className="text-danger"> *</span>
              </label>
              <select
                className="form-select mb-4"
                id="country"
                aria-label="Floating label select example"
              >
                <option value="CA">CANADA</option>
                <option value="US">USA</option>
              </select>
            </div>
            <div className="form-group  flex-column d-flex">
              <button type="submit" className="btn btn-primary">
                soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
