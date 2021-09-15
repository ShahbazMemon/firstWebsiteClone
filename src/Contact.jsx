import React, { useState } from "react";

export const Contact = () => {
  const [val, setValue] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const subm = () => {
    alert(val.fullName);
  };

  return (
    <>
      <section className="contact-sec pt-5">
        <div className="" style={{ marginTop: "5em" }}>
          <h1 className="text-center">Contact us</h1>
          <div className="container contatc_div mt-5">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter full name"
                    onChange={inputEvent}
                    value={val.fullName}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Phone Number"
                    onChange={inputEvent}
                    value={val.phoneNumber}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    name="emailAddress"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={inputEvent}
                    value={val.emailAddress}
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={inputEvent}
                    value={val.message}
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit" onClick={subm}>
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
