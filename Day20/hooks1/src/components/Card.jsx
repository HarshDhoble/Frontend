const Card = ({ food, foods, setFoods, index }) => {
    return (
      <div className="container">
        <div className="card">
          <div className="title">{food.name}</div>
          <div className="calorie">
            You have comsume {food.calories} cals today.
          </div>
          <div className="remove"
              onClick={() => {
                const newFoods = foods.filter((el, i) => i !== index);
                setFoods(newFoods);
            }}>
            <button class="btn"><i class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;