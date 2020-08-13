import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const soundStorageOneEng = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const soundStorageOneHun = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 89,
    keyTrigger: "Y",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const soundStorageTwoEng = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

const soundStorageTwoHun = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 89,
    keyTrigger: "Y",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

const activeStyle = {
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgb(29, 33, 36)",
  borderColor: "rgb(23, 26, 29)",
  transform: "translateY(3px)",
};

const inactiveStyle = {
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgb(52, 58, 64)",
  borderColor: "rgb(52, 58, 64)",
};

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: inactiveStyle
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activateButton = this.activateButton.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activateButton() {
    if (this.state.buttonStyle === inactiveStyle) {
      this.setState({
        buttonStyle: activeStyle
      });
    } else {
      this.setState({
        buttonStyle: inactiveStyle
      });
    }
  }
  playSound(e) {
    const music = document.getElementById(this.props.keyTrigger);
    music.currentTime = 0;
    music.play();
    this.activateButton();
    setTimeout(() => this.activateButton(), 100);
    this.props.displayName(this.props.soundId.replace(/-/g, " "));
  }  
  render() {
    return (
      <button
        type="button"
        className="drum-pad btn btn-dark col-3"
        id={this.props.soundId}
        onClick={this.playSound}
        style={this.state.buttonStyle}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.sound}
        ></audio>
        {this.props.keyTrigger}
      </button>
    );
  }
}

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let drumButtons = this.props.activeStorage.map(
      (drumObj, i, drumButtonsArr) => {
        return (
          <DrumButton
            soundId={drumButtonsArr[i].id}
            sound={drumButtonsArr[i].url}
            keyTrigger={drumButtonsArr[i].keyTrigger}
            keyCode={drumButtonsArr[i].keyCode}
            displayName={this.props.displayName}
          />
        );
      }
    );
    return (
      <div className="drum-box row justify-content-center">{drumButtons}</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMonitor: String.fromCharCode(160),
      activeStorage: soundStorageOneEng,
      activeStorageId: "Heater Kit",
      volume: 0.3
    };
    this.displayName = this.displayName.bind(this);
    this.bankChange = this.bankChange.bind(this);
    this.hunChange = this.hunChange.bind(this);
    this.displayClear = this.displayClear.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
  }
  displayName(name) {
    this.setState({
      displayMonitor: name
    });
    setTimeout(() => this.displayClear(), 1000);
  }
  bankChange() {
    if (this.state.activeStorage === soundStorageOneEng) {
      this.setState({
        activeStorage: soundStorageTwoEng,
        displayMonitor: "Smooth Piano Kit",
        activeStorageId: "Smooth Piano Kit"
      });
    } else if (this.state.activeStorage === soundStorageTwoEng) {
      this.setState({
        activeStorage: soundStorageOneEng,
        displayMonitor: "Heater Kit",
        activeStorageId: "Heater Kit"
      });
    } else if (this.state.activeStorage === soundStorageOneHun) {
      this.setState({
        activeStorage: soundStorageTwoHun,
        displayMonitor: "Smooth Piano Kit",
        activeStorageId: "Smooth Piano Kit"
      });
    } else {
      this.setState({
        activeStorage: soundStorageOneHun,
        displayMonitor: "Heater Kit",
        activeStorageId: "Heater Kit"
      });
    }
    setTimeout(() => this.displayClear(), 1000);
  }
  hunChange() {
    if (this.state.activeStorage === soundStorageOneEng) {
      this.setState({
        activeStorage: soundStorageOneHun,
        displayMonitor: "Magyar billentyűzet"
      });
    } else if (this.state.activeStorage === soundStorageTwoEng) {
      this.setState({
        activeStorage: soundStorageTwoHun,
        displayMonitor: "Magyar billentyűzet"
      });
    } else if (this.state.activeStorage === soundStorageTwoHun) {
      this.setState({
        activeStorage: soundStorageTwoEng,
        displayMonitor: "English keyboard"
      });
    } else {
      this.setState({
        activeStorage: soundStorageOneEng,
        displayMonitor: "English keyboard"
      });
    }
    setTimeout(() => this.displayClear(), 1000);
  }
  displayClear() {
    this.setState({
      displayMonitor: String.fromCharCode(160)
    });
  }
  volumeChange(e) {
    this.setState({
      volume: e.target.value,
      displayMonitor: "Volume: " + Math.round(e.target.value * 100)
    });
    setTimeout(() => this.displayClear(), 1000);
  }
  render() {
    {
      const sounds = [].slice.call(document.getElementsByClassName("sound"));
      sounds.forEach(sound => {
        sound.volume = this.state.volume;
      });
    }
    return (
      <div className="main container-fluid">
        <div className="container row" id="drum-machine">
          <div className="left-section col-11">
            <div className="left-top-section row">
              <div className="slide-buttons col-md-4">
                <div className="language row">
                  <div className="switch-button">
                    <BootstrapSwitchButton
                      checked={this.state.hunMode}
                      onlabel="HUN"
                      offlabel="ENG"
                      width={70}
                      onChange={this.hunChange}
                    />
                  </div>
                  <div className="">
                    <p>Language</p>
                  </div>
                </div>
                <div className="sound-bank row">
                  <div className="switch-button">
                    <BootstrapSwitchButton
                      checked={this.state.bankSwitch}
                      onlabel="2"
                      offlabel="1"
                      width={50}
                      onChange={this.bankChange}
                    />
                  </div>
                  <div className="">
                    <p>Sound Bank</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5" id="display">
                <p>{this.state.displayMonitor}</p>
              </div>
            </div>
            <DrumBox
              activeStorage={this.state.activeStorage}
              displayName={this.displayName}
            />
          </div>
          <div className="volume col-md-1">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={this.state.volume}
              onChange={this.volumeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
