import masterCard from '../assets/images/mastercard.png'
import Visa from '../assets/images/visa.png'


function CreditCard (props){

    let cardType
    if(props.type === 'Visa'){
        cardType = Visa
    }
    else if (props.type ==='Master Card'){
       cardType = masterCard
    }
    return (


<div className="CC">
    <div>
    
  <p><img src={cardType} className="cardtype" /></p>
  <p> **** **** **** {props.number.slice(-4)}</p>
  <p> {props.expirationMonth}</p>
  <p> {props.expirationYear}</p>
  <p> {props.bank}</p>
  <p> {props.owner}</p>
  </div>
</div>

    )
}

export default CreditCard