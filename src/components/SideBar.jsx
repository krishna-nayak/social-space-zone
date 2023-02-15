import React from "react";

const styles = {
  color: {
    bgNav: "#fff",
    // bgNav: "#e3f2fd",
  },
};

const SideBar = () => {
  return (
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse" style={{ minHeight: "100%", backgroundColor: styles.color.bgNav, border: "1px solid #fff" }}>
      <div class="position-sticky top-0">
        <div className="py-1"></div>
        <div class="list-group list-group-flush mt-4 px-2">
          <a href="#" class="list-group-item list-group-item-action py-3 ripple active border-0 rounded" aria-current="true">
            <i class="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Home</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-area fa-fw me-3"></i>
            <span>Profile</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-lock fa-fw me-3"></i>
            <span>Participants</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-pie fa-fw me-3"></i>
            <span>Contant</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-line fa-fw me-3"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
