import React from "react";
import PostInputModal from "./PostInputModal";

const Header = () => {
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light border-0 py-0" style={{ backgroundColor: "#fff" }}>
        <div className="container-fluid">
          <div className="d-flex">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              {/* <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy" /> */}
              <h3>Hello world</h3>
            </a>
          </div>

          <div className="d-flex align-items-center">
            <butotn data-bs-toggle="modal" data-bs-target="#postStaticBackdrop" className="btn btn-outline-secondary me-3" href="#post">
              Create Post <i className="fa-solid fa-plus" style={{ color: "black", fontSize: "20px" }}></i>
            </butotn>

            {/* <!-- Avatar --> */}
            <img
              src="https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg"
              className="rounded-circle"
              width={"35"}
              height="35"
              style={{ objectFit: "cover" }}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </div>
        </div>
      </nav>

      <PostInputModal />
    </header>
  );
};

export default Header;
