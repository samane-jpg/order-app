import MealsItemForm from "./MealsItemForm.module.css"

const MealsItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
