import employees from "../../data/Employees";
import Employee from "./Employee";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-container container">
        <h2 className="about-title">Nasi specjaliści</h2>
        {employees.map((item) => (
          <Employee
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            position={item.position}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
