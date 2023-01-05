/* import MealsItemForm from "./MealsItemForm.module.css" */
import classes from "./MealItem.module.css"
const MealsItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        {/* <MealsItemForm /> */}
      </div>
    </li>
  );
};

export default MealsItem;
