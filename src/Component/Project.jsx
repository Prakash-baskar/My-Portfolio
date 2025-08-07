import "./Project.css";

const Project = () => {
  return (
    <div id="Projects">
      <h2 className="project-title pt-4">Projects</h2>

      <div className="project-card">
        <h3 className="project-head">E-Commerce Website Development</h3>
        <p className="project-para">
          Developed a full-fledged eCommerce website from scratch using modern web technologies.
        </p>
        <ul className="project-ul">
          <li className="liststyle">
            Implemented key features: product listing, user auth, cart, payment, and order management.
          </li>
          <li className="liststyle">
            Designed fully responsive UI for both desktop and mobile devices.
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h3 className="project-head">Local Lending App</h3>
        <p className="project-para">
          Designed and developed a multi-role lending platform for Super Admin, Admin, Borrower, and Lender.
        </p>
        <ul className="project-ul">
          <li className="liststyle">
            Enabled role-based workflows for loan processing and repayment tracking.
          </li>
          <li className="liststyle">
            Built using responsive design principles with a mobile-first approach.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
