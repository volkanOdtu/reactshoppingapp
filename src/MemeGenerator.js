import React from "react";

class MemeGenerator extends React.Component {
    state = {
        firstName: ""
    }

    constructor() {
    super();    
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://placekitten.com/300/200",
      allMemeImgs: []
    };
   // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        //console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    //Onceki state le ilgilenmedigimiz icin setState de direkt obje veriyoruz
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;

    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top"> {this.state.topText} </h2>
          <h2 className="bottom"> {this.state.bottomText} </h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
