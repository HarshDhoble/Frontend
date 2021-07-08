const Card = (props) => {
    const food = [
      { name: "Pizza", calories: "56" },
      { name: "Burger", calories: "69" },
      { name: "Coke", calories: "500" },
      { name: "Brownie", calories: "180" },
      { name: "Fried Rice", calories: "90" },
      { name: "Pani Puri", calories: "10" },
    ];
    return (
      <div className="container">
        <div className="card">
          <div className="title">{food[props.number - 1].name}</div>
          <div className="calorie">
            You have comsume {food[props.number - 1].calories} cals today.
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;