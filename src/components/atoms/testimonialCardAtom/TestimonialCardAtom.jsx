export function TestimonialCardAtom({opinion, user}) {
  return (
    <div className="testimonials__cards">
        <div className="testimonials__score">
            <i className="fa-solid fa-star"></i> 
            <i className="fa-solid fa-star"></i> 
            <i className="fa-solid fa-star"></i> 
            <i className="fa-solid fa-star"></i> 
            <i className="fa-solid fa-star"></i> 
        </div>
        <div className="testimonials__opinion">
            <p>{opinion}</p>
        </div>
        <div className="testimonials__user"> 
            <p><b>{user}</b></p>
        </div>
    </div>
  )
}