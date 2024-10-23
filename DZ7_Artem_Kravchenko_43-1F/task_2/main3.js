class TrafficLight {
  constructor() {
    this.redLight = document.getElementById("red_light");
    this.yellowLight = document.getElementById("yellow_light");
    this.greenLight = document.getElementById("green_light");
    this.messageElement = document.getElementById("message");
  }

  resetLights() {
    this.redLight.classList.remove("active");
    this.yellowLight.classList.remove("active");
    this.greenLight.classList.remove("active");
    this.messageElement.textContent = "";
  }

  setColor(color) {
    this.resetLights();
    switch (color) {
      case "red":
        this.redLight.classList.add("active");
        this.messageElement.textContent = "Stop";
        this.messageElement.style.color = "#ff1313";
        break;
      case "yellow":
        this.yellowLight.classList.add("active");
        this.messageElement.textContent = "Get ready";
        this.messageElement.style.color = "#ffe207";
        break;
      case "green":
        this.greenLight.classList.add("active");
        this.messageElement.textContent = "Go";
        this.messageElement.style.color = "#0dff55";
        break;
      default:
        this.messageElement.textContent = "Error";
    }
  }
}

const trafficLight = new TrafficLight();

function colorSubmit() {
  const selectedColor = document.getElementById("traffic_light").value;
  trafficLight.setColor(selectedColor);
  document.getElementById("revies_blok").style.display = "none";
}
