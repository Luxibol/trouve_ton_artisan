function StarRating({ rating }) {
    const maxRating = 5;
    const fullStars = Math.floor(rating); 
    const halfStar = rating - fullStars >= 0.5; 
    const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="stars d-flex align-items-center">
        {/* Étoiles pleines */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">★</span>
        ))}
        {/* Demi-étoile */}
        {halfStar && <span key="half" className="star half">⯨</span>}
        {/* Étoiles vides */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">☆</span>
        ))}
        <span className="ms-2 rating-text">({rating}/5)</span>
      </div>
    );
  }
  
  export default StarRating;
  