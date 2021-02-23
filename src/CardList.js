import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i, id) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
