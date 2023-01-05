import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Unique Flavours, Will Deliver To Your Door</h2>
      <p>
        In here, you can find many delicious foods with our specific flavour.
        Our food would be ordered and delivered only by a couple of clicks.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
