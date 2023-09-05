const ServiceBox = ({ name, number, isNew }) => {
  return (
    <div className="service-box">
      <h3 className="service-name">
        {name} {number}
      </h3>
      {isNew && <div className="service-circle"></div>}
      {isNew && <p className="service-info p-tag">(nowość)</p>}
    </div>
  );
};

export default ServiceBox;
