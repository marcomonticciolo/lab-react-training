function Greetings (props){
    let greet = 'hallo'
    if(props.lang === 'fr'){
        greet = 'bonjour'
    }
    else if(props.lang === 'eng'){
        greet = 'hello'
    }
    else if (props.lang === 'es') { 
        greet = "holla"
    }
  


    return (
        <div className="Greets">
            <p>{greet}</p>
            <p>-</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Greetings
