import React from "react";
import "./style.css";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

export default function NewPostBody({
  foodTags,
  setFoodTags,
  howManyPeople,
  setHowManyPeople,
  difficulty,
  setDifficulty,
  time,
  setTime,
  ingredients,
  setIngredients,
  howToPrepareSteps,
  setHowToPrepareSteps
}) {
  //Variables
  const [state, setState] = React.useState(true);
  const [ingredientQuantity, setIngredientQuantity] = React.useState("0");
  const [ingredientName, setIngredientName] = React.useState("");
  const [stepText, setStepText] = React.useState("");
  //Helper functions
  const handleFoodTagChange = key => event =>
    setFoodTags({ ...foodTags, [key]: event.target.checked });
  const handlePeopleChange = event => setHowManyPeople(event.target.value);
  const handleDifficultyChange = event => setDifficulty(event.target.value);
  const handleTimeChange = event => setTime(event.target.value);

  const handleIngredientQuantity = event =>
    setIngredientQuantity(event.target.value);
  const handleIngredientName = event => 
    setIngredientName(event.target.value);
  const handleIngredients = event =>
    setIngredients({ ...ingredients, [ingredientName]: ingredientQuantity });

  const handleStepText = event =>
    setStepText(event.target.value);
  const handleSteps = event =>
    setHowToPrepareSteps([ ...howToPrepareSteps, stepText]);

  return (
    <div>
      <h3 className="addFoodTags">Add Food Tags</h3>
      <div className="foodTagsWrapper">
        {Object.keys(foodTags).map(tag => (
          <div>
            <Switch
              checked={foodTags[tag]}
              onChange={handleFoodTagChange(tag)}
            ></Switch>
            <label>{tag}</label>
          </div>
        ))}
      </div>
      <hr />
      <div className="peopleSection">
        <h3 className="howManyPeople">For How Many People?</h3>
        <input
          type="number"
          pattern="[0-9]"
          className="peopleQuantity"
          value={howManyPeople}
          onChange={handlePeopleChange}
        />
      </div>
      <div className="difficultySection">
        <h3 className="difficultyTag">Difficulty</h3>
        <select className="difficultyInput" onChange={handleDifficultyChange}>
          {/* In case you want to add options, add them here, and the default state can be changed in AddPost index */}
          <option selected={difficulty=='Easy'} value="Easy">Easy</option>
          <option selected={difficulty=='Meduim'} value="Meduim">Meduim</option>
          <option selected={difficulty=='Hard'} value="Hard">Hard</option>
        </select>
      </div>
      <div className="timeSection">
        <h3 className="timeTag">How long it takes to prepare?</h3>
        <input
          className="timeQuantity"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <hr />

      <div className="ingredientsSection">
        <h3 className="ingredients">Ingredients</h3>
        <i className="fas fa-plus-circle" onClick={handleIngredients}></i>
        <input
          className="ingredientElement"
          placeholder="Enter an ingredient"
          onChange={handleIngredientName}
        />
        <input
          className="ingredientQuantity"
          placeholder="0"
          onChange={handleIngredientQuantity}
        />
        {Object.entries(ingredients).map(ingredient => (
          <li className="displayingList">
            {ingredient[1]} {ingredient[0]}
          </li>
        ))}
      </div>
      <hr />

      <div className="howToPrepareSection">
        <h3 className="howToPrepare">How To Prepare</h3>
        <i className="fas fa-plus-circle" onClick={handleSteps}></i>
        <input className="stepElement" placeholder="Your Steps" onChange={handleStepText}/>
        <ol>
        {howToPrepareSteps.map(step => (
          <li className="displayingList">
            {step}
          </li>
        ))}
        </ol>
      </div>
      <hr />
    </div>
  );
}
