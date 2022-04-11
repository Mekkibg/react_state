import React from "react";


class Person extends React.Component {
state = {
    fullName: "Mekki Ben Guirat",
    bio: "Peace",
    photo: "./mekki98.jpg",
    job: "Student",
    show: true,
};
render() {
    return (
    <div className="Person">
        <h1> {this.state.fullName}</h1>
        <h2>{this.state.job}</h2>
        <p>{this.state.bio}</p>
        <img 
        src={this.state.photo}
        alt="reading"
        style={{ width: 350, height: 350, borderRadius: "25%" }}
        />
    </div>
    );
}
}
export default Person;