import { DummyMeals } from "./AvailableMealsList";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((m) => <li>{m.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
