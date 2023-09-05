import services from "../../data/Services";
import ServiceBox from "./ServiceBox";

const Offer = () => {
  return (
    <section id="offer" className="section offer">
      <div className="offer-container container">
        <h2 className="offer-title">Czym zajmuje się nasza firma?</h2>
        <div className="service">
          {services.map((item) => (
            <ServiceBox
              key={item.id}
              name={item.name}
              number={item.id}
              isNew={item.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
