import { masters } from "../../lib/consts";

const Masters = () => {
  return (
    <div className="masters__container">
      <h1 className="masters__container-h1">Наши мастера</h1>

      <div className="masters-grid">
        {masters.map((master) => {
          return (
            <div key={master.src}  className="masters-item">
              <div className="masters-square"></div>
              <img
              className=""
                alt="service"
                src={require(`../../assets/masters/0${master.src}.jpg`)}
              />
              <div className="masters-item-h1">{master.name}</div>
              <p>{master.specialization}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Masters;
