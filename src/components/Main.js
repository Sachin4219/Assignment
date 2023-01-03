import "./Main.css"
import {FaCircle} from "react-icons/fa"

function Main() {
    return ( 
        <div className="container">
            <div className="imgSection">
                <div className="alone">  
                    <img style={{width:"100%", height:"100%"}} src="image1.jpg" alt="image1"/>
                </div>
                <div className="imageGrid">
                    <img src="image2.jpg" alt="image2"/>
                    <img src="image3.jpg" alt="image3"/>
                    <img src="image4.jpg" alt="image4"/>
                    <img src="image5.jpg" alt="image5"/>
                </div>
            </div>
            <div className="textSection">
                <div className="address">
                    <div className="colflex">
                        <h3>Hotel Vishal @ Airport</h3>
                            <p>104/2/2, national Highway 8, Mahipalpur, New Delhi, 110037 New Delhi, India <br></br><a href="https://www.google.com/maps/place/New+Delhi,+Delhi+110037/@28.5442557,77.0865697,14z/data=!3m1!4b1!4m5!3m4!1s0x390d1b8b62ebcea7:0x8801b08af8c849fd!8m2!3d28.5441475!4d77.1159808">View Map</a></p>
                        <h4>
                            +91-7654564545, 8107344682
                        </h4>
                        <div className="features">
                            <div><FaCircle style={{color:"#555", fontSize:"12px"}}/> Free Parking</div>
                            <div><FaCircle style={{color:"#555", fontSize:"12px"}}/> Conference Room</div>
                            <div><FaCircle style={{color:"#555", fontSize:"12px"}}/> ATM</div>
                            <div><FaCircle style={{color:"#555", fontSize:"12px"}}/> Conference Room</div>
                            <div><FaCircle style={{color:"#555", fontSize:"12px"}}/> Conference Room</div>
                        </div>
                    </div>
                    <div>
                        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28038.792622861405!2d77.08656965793999!3d28.544255726153377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b8b62ebcea7%3A0x8801b08af8c849fd!2sNew%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1672738998937!5m2!1sen!2sin" width="150" height="150" style={{border:"none", borderRadius:"15px"}} allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <p className="about">
                    Located in New Delhi, 5.5 km from Rashtrapati Bhavan,
                     Hotel Vishal @ Airport provides accomodation with a 
                     restaurant, free private parking and a fitness centre. 
                     This 3-start hotel offers an ATM, a concierge service 
                     and free wifi. The accomodation features a 24-hour front desk, room service and currency exchange for guests.
                </p>
            </div>
        </div>
     );}

export default Main;