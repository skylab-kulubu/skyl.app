import "./Card.css";

const Card = ({ app }) => {
  return (
    <a href={app.url}>
      <div className="card-wrapper">
        <div className="card-header">
          <div className="image">
            {app.image && (
              <img src={process.env.PUBLIC_URL + "/app-images/" + app.image} />
            )}
          </div>
        </div>
        <div className="card-body">
          <p>{app.name}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
