import React from "react";
import "./Profile.css";

export const Profile = () =>{
    return(
        <div className="content">
            <div>
                <img alt="" src="https://images.prom.ua/2122417187_w640_h640_kartina-po-nomeram.jpg"
                />
            </div>
            <div className="profile-info">
                <h2>Name Surname </h2>
                <p>information about me and my blog</p>
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
        </div>
    )
}