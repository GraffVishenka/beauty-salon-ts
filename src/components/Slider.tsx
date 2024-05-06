import { useEffect, useState } from "react";
import { works } from "../lib/consts";
import { IExample } from "../lib/types";
import { $api, API_URL } from "../lib/api";

const Slider = () => {
  const [topping, setTopping] = useState("example");
  const [example, setExample] = useState<IExample[]>([]);

  useEffect(() => {
    $api.get<IExample[]>(`/example`).then((res) => {
      setExample(res.data);
      console.log(example);
    });
  }, []);

  const onOptionChange = (e: any) => {
    setTopping(e.target.value);
  };

  return (
    <div className="slider__container">
      <div className="slider__container-nav">
        {works.map((item) => {
          return (
            <div key={item.id} className="slider-nav">
              <input
                className="slider-item"
                type="radio"
                name="topping"
                value={item.value}
                id={item.id}
                checked={topping === `${item.value}`}
                onChange={onOptionChange}
              />
              <label
                htmlFor={item.value}
                className={
                  topping === `${item.value}`
                    ? "header__active-link"
                    : "header__links-nav"
                }
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className="slider__container-items">
        <div className="slider__container-item">
          {topping === "example"
            ? example
                .sort(
                  (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )
                .slice(0, 9)
                .map((item) => {
                  return (
                    <img
                      key={item.id}
                      alt="img"
                      src={
                        example
                          ? `${API_URL}/uploads/example/${item.fileName}`
                          : ""
                      }
                    />
                  );
                })
            : example
                .filter((img) => img.type === topping)
                .slice(0, 9)
                .map((item) => {
                  return (
                    <img
                      key={item.id}
                      alt="img"
                      src={
                        example
                          ? `${API_URL}/uploads/example/${item.fileName}`
                          : ""
                      }
                    />
                  );
                })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
