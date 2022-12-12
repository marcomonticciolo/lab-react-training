import filledStar from "../assets/images/pngtree-star-vector-icon-png-image_696411.jpeg"
import emptyStar  from "../assets/images/star.webp"


function Rating (props){


    let stars = props.children
    let star

    let filledNumber = Math.round(props.children)
    let emptyNumber = 5 - filledNumber

    console.log(filledNumber, "THIS IS FILLED")

    let filledArray = Array(filledNumber).fill(true)
    let emptyArray = Array(emptyNumber).fill(true)

    // // filledArray = filledArray.push(filledStar)

    // console.log(filledArray, "ARRAY")

    // if(stars > 0){

    //     star = <img src={filledStar}/>
    // } else if(stars == 0 ){
    //    star = <img src={emptyStar}/>
    // }

    return (
    <div>

        <p className="Star-images">
            {filledArray.map((star) => {
                return <span><img src={filledStar}/></span>
            })
            }
            {emptyArray.map((star) => {
                return <span><img src={emptyStar}/></span>
            })}
            </p>


    </div>
    )
}

export default Rating