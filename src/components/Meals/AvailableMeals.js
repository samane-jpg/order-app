import { DummyMeals } from "./AvailableMealsList";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <MealItem
      name={meal.name}
      key={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
