function IdCard (props){
    
    return (


<div className="Card">
    

  <img className="Img" src={props.picture}/>

<div className="text">
  <p><strong>LastName: </strong>  {props.lastName}</p>
  <p><strong>FirstName: </strong>  {props.firstName}</p>
  <p><strong>Gender: </strong>  {props.gender}</p>
  <p><strong>Height:</strong>  {props.height}</p>
  <p className="DOB"><strong>Date of birth</strong>  {props.birth}</p>
</div>

</div>


    )
}


export default IdCard