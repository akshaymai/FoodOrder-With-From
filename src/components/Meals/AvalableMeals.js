import React, { Fragment, useEffect, useState } from "react";
import classs from "./Avalablemeals.module.css";
import Card from "../UI/Card/card";
import MealsItems from "./MealsItem";
const Avalablemeals = () => {
  const [meals, setmeals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchmeals().catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  const fetchmeals = async () => {
    const responponse = await fetch(
      "https://food-orders-app-581e5-default-rtdb.firebaseio.com/meals.json"
    );
    if (!responponse.ok) {
      throw new Error("Something wents wrong");
    }
    const data = await responponse.json();

    let arr = [];
    for (let key in data) {
      arr.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setmeals(arr);
    setLoading(false);
  };

  if (loading) {
    return (
      <section className={classs.avalableMaals}>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classs.errorclass}>
        <p>{error}</p>
      </section>
    );
  }

  const MealsList = meals.map((item, index) => {
    return (
      <MealsItems
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        amount={item.price}
      />
    );
  });
  return (
    <Fragment>
      <section className={classs.meals}>
        <Card>
          <ul>{MealsList}</ul>{" "}
        </Card>
      </section>
    </Fragment>
  );
};

export default Avalablemeals;
