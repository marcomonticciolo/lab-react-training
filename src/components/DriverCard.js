function DriverCard (props){
    return (
        
        <div className="ratingCard">
            <div className="driverInfo">
  <img className="imagesProfile" src={props.img} />
  <h2>{props.name}</h2>
  <p><strong>Rating:</strong>  {props.rating}</p> 
  <p className="licensePlate">{props.car.model}  {props.car.licensePlate}</p>

  </div>
</div>
    )
}

export default DriverCard