import firstWomanPicture from "../../images/pracownik-1.png";
import womanPicture from "../../images/pracownik-2.jpg";

const Employee = ({ id, firstName, lastName, position, description }) => {
  return (
    <div className="employee">
      <div className="employee-photo-wrapper">
        <img
          src={id === 1 ? firstWomanPicturePicture : womanPicture}
          alt="Zdjęcie pracownika"
          className="employee-photo"
        />
      </div>
      <div className="employee-bio">
        <p className="employee-name p-tag">
          {firstName} {lastName} {position}
        </p>
        <p className="employee-description p-tag">{description}</p>
      </div>
    </div>
  );
};

export default Employee;
