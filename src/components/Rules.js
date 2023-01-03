import "./Rules.css"

function Rules() {
    return ( 
        <div className="rulesContainer">
            <h3>
                Property Rules
            </h3>
            <p>Check-in: 12 PM Check-out: 12 PM</p>
            <div className="rules">
                <ul>
                   <li>Guests with fever not allowed</li> 
                   <li>Guests from containment zones are not allowed</li> 
                   <li>Guests below 18 years of age are not allowed at the property</li> 
                   <li>PAN cards and Non-Govt IDs are not accepted as ID proofs</li> 
                   <li>Aadhar, Driving License and Govt ID are acceptedas ID proofs</li> 
                   <li>Property staff is trained on hygiene guidelines</li> 
                   <li>Pets are not allowed</li> 
                   <li>Outside food is not allowed</li> 
                   <li>Smoking is not allowed</li> 
                   <li>Does not allow private parties or events</li> 
                   <li>Quarantine protocols are being followed as per local govt authorities</li> 
                   <li>Pets are not allowed</li> 
                   <li>Outside food is not allowed</li> 
                   <li>Smoking is not allowed</li> 
                   <li>Does not allow private parties or events</li> 
                   <li>Quarantine protocols are being followed as per local govt authorities</li>
                </ul>
            </div>
        </div>
     );
}

export default Rules;