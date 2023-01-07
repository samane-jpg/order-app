import { DummyMeals } from "./AvailableMealsList";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "./../UI/Card";

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      key={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
