import "./Hero.css"
import {FaCalendarCheck, FaAngleDown, FaAngleUp, FaPlusCircle, FaMinusCircle} from "react-icons/fa"
import React, { useRef, useState } from "react";


function Hero() {
    const checkinRef = useRef(null) 
    const checkoutRef = useRef(null) 
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(0)
    const [showExtra, setShowExtra] = useState(false)
    return ( 

        <div className="heroContainer">
            <h1 style={{margin:"0", position:"absolute", top:"50%", transform:"translate(0,-50%)", width:"100%", color:"#aaa" , textAlign:"center"}}>Welcome</h1>
            <form className="heroContent">
                <div className="inputContainer">
                    <input ref={checkinRef} style={{display:"none"}} id="checkin" type="date"></input>
                    <label onClick={()=>checkinRef.current.active} htmlFor="checkin">
                        <FaCalendarCheck style={{margin:"0 5px 0 0"}}/>
                        Check in
                        <FaAngleDown style={{margin:"0 0 0 5px"}}/>
                    </label>
                    <input ref={checkoutRef} style={{display:"none"}} id="checkout" type="date"></input>
                    <label onClick={()=>checkoutRef.current.active} htmlFor="checkout">
                        <FaCalendarCheck style={{margin:"0 5px 0 5px"}}/>
                        Check out
                        <FaAngleDown style={{margin:"0 0 0 5px"}}/>
                    </label>
                    <div className="count">
                        <div  onClick={()=>setShowExtra(prev=>!prev)}>   
                            {adults} adults - {children} children - {rooms} rooms
                        </div>
                    <div className="extra colflex" style={showExtra ? {display:"flex"} : {display:"none"}}>
                        <p>Maximum Guests Per Room</p>
                        <div>
                            <div className="colflex">
                                <p>Rooms</p>
                                <div>Blah Blah BLah Blah Blah</div>
                            </div>
                            <div>
                                <FaMinusCircle onClick={()=>setRooms(prev=> {return prev > 0 ? prev-1: 0})} style={{margin:"0 5px 0 0"}}/> 1 <FaPlusCircle  onClick={()=>setRooms(prev=>prev+1)} style={{margin:"0 0 0 5px"}}/>
                            </div>
                        </div>
                        <div>
                            <div className="colflex">
                                <p>Adults</p>
                                <div>Blah Blah BLah Blah Blah</div>
                            </div>
                            <div>
                                <FaMinusCircle onClick={()=>setAdults(prev=> {return prev > 0 ? prev-1: 0})} style={{margin:"0 5px 0 0"}}/> 1 <FaPlusCircle  onClick={()=>setAdults(prev=>prev+1)} style={{margin:"0 0 0 5px"}}/>
                            </div>
                        </div>
                        <div>
                            <div className="colflex">
                                <p>Children</p>
                                <div>Blah Blah BLah Blah Blah</div>
                            </div>
                            <div>
                                <FaMinusCircle onClick={()=>setChildren(prev=> { return prev > 0 ? prev-1: 0})} style={{margin:"0 5px 0 0"}}/> 1 <FaPlusCircle  onClick={()=>setChildren(prev=>prev+1)} style={{margin:"0 0 0 5px"}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="submitBtn">Check Availability</button>
            </form>
        </div>
     );
}

export default Hero;
