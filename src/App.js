import logo from "./logo.svg";
import "./App.css";

function App() {
  return class App extends React.Component {
    state = {
      Person: {
        fullName: "Gurk Burtiak",
        bio: "Noneee",
        imgSrc: myImage,
        profession: "75 profe",
      },
      show: true,
    };

    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show,
      });
    };

    render() {
      return (
        <>
          {this.state.show && (
            <>
              <h1>{this.state.Person.fullName}</h1>
              <h1>{this.state.Person.bio}</h1>
              <img src={this.state.Person.imgSrc} alt="Gurk"></img>
              <h1>{this.state.Person.profession}</h1>
              <br></br>
            </>
          )}

          <button onClick={this.handleShowPerson}>click here</button>
        </>
      );
    }
  };
}

export default App;
