function Random (props){

    const randomValue = Math.floor(Math.random()*(props.max - props.min)+ props.min)
    return (

        <h3 className="Random">Random value between {props.min} and {props.max} {'=>'} {randomValue} </h3>

    )
}

export default Random