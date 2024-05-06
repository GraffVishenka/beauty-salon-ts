import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { $api } from "../../lib/api";
import { IPrice } from "../../lib/types";

const Prices = () => {
  const { name } = useParams();
  const [prices, setPrice] = useState<IPrice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    $api.get<IPrice[]>(`prices/${name}`).then((res) => {
      setPrice(res.data);
    });
    setIsLoading(false);
  }, []);

  console.log(prices);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="price__container">
      <h1 className="price__container-h1">Цены на услуги</h1>
      <div className="prices-grid">
        <img alt="img" src={require("../../assets/prieces/01.jpg")} />
        <div className={"prices-grid-items"}>
          {prices.slice(0, 4).map((price) => {
            return (
              <div className="prices-grid-items__item" key={price.id}>
                <div className="prices-grid-prices-grid-items__item__head">
                  <h1>{price.name}</h1>
                  <p>{price.description}</p>
                </div>
                <h1>{price.price}</h1>
              </div>
            );
          })}
        </div>
      </div>
      {prices.length > 4 ? <div className="prices-grid">
        <div className={"prices-grid-items__left"}>
          { prices.slice(4, 8).map((price) => {
                return (
                  <div className="prices-grid-items__item" key={price.id}>
                    <div className="prices-grid-prices-grid-items__item__head">
                      <h1>{price.name}</h1>
                      <p>{price.description}</p>
                    </div>
                    <h1>{price.price}</h1>
                  </div>
                );
              })}
        </div>
        {(
          <img alt="img" src={require("../../assets/prieces/01.jpg")} />
        )}
      </div> : ""}
      {prices.length > 8 ? <div className="prices-grid">
        <img alt="img" src={require("../../assets/prieces/01.jpg")} />
        <div className={"prices-grid-items"}>
          {prices.slice(8, 12).map((price) => {
            return (
              <div className="prices-grid-items__item" key={price.id}>
                <div className="prices-grid-prices-grid-items__item__head">
                  <h1>{price.name}</h1>
                  <p>{price.description}</p>
                </div>
                <h1>{price.price}</h1>
              </div>
            );
          })}
        </div>
      </div> : ""}
    </div>
  );
};

export default Prices;
