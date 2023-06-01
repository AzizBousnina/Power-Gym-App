
import React from "react";
import "./home.css";
import bbb from "../../pictures/bbb.webp";
const home = () => {
  return (
    
    <div>
      {" "}
      
      <div className="body-a">
        <div className="container-acceuil">
          <div className="cardAc">
            
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDE0w4d3EdF7LEgiEw2MwvoBKAVbdFdoF6Q&usqp=CAU"
              alt="Cardio"
            />
            <div className="card__head">POWER GYM</div>
          </div>
          <div className="cardAc">
            <img
              src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_721723381-2.jpg"
              alt="Spining"
            />
            <div className="card__head">Sale Of Sports Equipment</div>
          </div>

          <div className="cardAc">
            <img
              src="https://previews.123rf.com/images/dinozzz/dinozzz1305/dinozzz130500017/19526133-highest-quality-guaranteed-golden-label-vector-illustration.jpg"
              alt="Force"
            />
            <div className="card__head">With Good Quality</div>
          </div>
          <div className="cardAc">
            <img
              src="https://cdn3.iconfinder.com/data/icons/cleaning-kinetic-vol-1/256/Affordable_Pricing-512.png"
              alt="Danse"
            />
            <div className="card__head">With Best Price</div>
          </div>
          <div className="cardAc">
            <img
              src="https://www.shutterstock.com/image-vector/delivery-shipping-logo-vector-260nw-571479214.jpg"
              alt="Kids"
            />
            <div className="card__head">And Fast Delivery  </div>
          </div>
        </div>
      </div>

      <div className="com-gym">
      <img className="powergym-img" src={bbb} alt="powerGym" />
      <div className="power_gym">
        <p className="description-powergym">
          POWER GYM is a gym covering a unique 3500m² space with its Indoor and
          Out-door distribution.
          <br />
          Rich in Technogym equipment latest generation, coaches involved in
          listening, professional courses Approved Reebok the Mills intensely
          beneficial.
          <br />
          Our room and our team invite you to live a special daily life with a
          mission your well-being.
        </p>
      </div>
    </div>

    <div className="img_plan">
      {" "}
      <div className="planning">
        <h1 className="planning-title">Planning</h1>
        <div className="days_go">
          <h2 className="days">THE GYM IS OPEN 7 DAYS A WEEK</h2>
        </div>
        <div className="days_go_o">
          <div>
            {" "}
            <span className="span-d">MONDAY TO FRIDAY</span>
          </div>

          <div>
            {" "}
            <span className="span-d">07:00 - 22:00</span>
          </div>
        </div>
        <br />
        <div className="days_go">
          {" "}
          <div>
            <span className="span-d">SATURDAY</span>
          </div>
          <div>
            {" "}
            <span className="span-d">07:00 - 18:00</span>
          </div>
        </div>

        <br />
        <div className="days_go">
          <div>
            <span className="span-d">SUNDAY</span>
          </div>
          <div>
            {" "}
            <span className="span-d">07:00 - 14:00</span>
          </div>
        </div>
      </div>
    </div>

    <div className="footer">
    <h3>POWER GYM</h3>
    <p>- Strength does not come from physical capacity. It comes from an indomitable will.</p>
    <p>- Success usually comes to those who are too busy to be looking for it.</p>
    <p>- If you want something you’ve never had, you must be willing to do something you’ve never done.</p>
    <div className="footer-bottom">
<p>copyright &copy;2023 Developed By Aziz Bousnina  </p>
    </div>
    </div>

    </div>
  );
};

export default home;


   

