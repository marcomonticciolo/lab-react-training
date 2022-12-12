function BoxColor (props){

    const myStyles = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }



    return (


        <p style={myStyles} className="boxes">rgb=({props.r},{props.g},{props.b})</p>


    )
}

export default BoxColor