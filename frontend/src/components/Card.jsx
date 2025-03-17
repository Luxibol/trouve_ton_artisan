function Card({ name, rating, specialty, location }) {
    const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);
  
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span className="stars">{renderStars(rating)}</span> ({rating}/5)
            </p>
            <p className="card-text">{specialty}</p>
            <p className="card-text">{location}</p>
            <a href="#" className="btn btn-primary">Voir plus</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;