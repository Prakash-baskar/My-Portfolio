import "./Project.css";

const Project = () => {
  return (
   <div id="Projects">
       <div className="pt-5" >
      <h2 className="project-title">Projects</h2>
      
      <div className="mb-6 ">
        <h3 className="project-head pt-2">ECommerce Website Development</h3>
        <p  className="project-para">Developed a full-fledged eCommerce website from scratch using modern web technologies.</p>
        <ul className="project-ul">
          <li clastName="liststyle">Implemented key functionalities such as product listing, user authentication, shopping cart, payment gateway integration, and order management.</li>
          <li clastName="liststyle">Ensured a responsive design for optimal performance on both desktop and mobile devices.</li>
        </ul>
      </div>
      
      <div>
        <h3 className="project-head pt-2">Local-Lending App</h3>
        <p className="project-para">Designed and developed a Lending Application supporting Super Admin, Admin, Borrower, and Lender roles.</p>
        <ul className="project-ul">
          <li clastName="liststyle">Implemented role-based features for streamlined loan processing and repayment management.</li>
          <li clastName="liststyle">Ensured a responsive design for optimal performance on both desktop and mobile devices.</li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default Project;
