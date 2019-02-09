particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, //シェイプの数
      "density": {
        "enable": true,
        "value_area": 700 //シェイプの密集度
      }
    },
    "color": {
      "value": "#0A0A0A" //シェイプの色
    },
    "shape": {
      "type": "circle", //シェイプの形
    },
    //シェイプの透過度の設定
    "opacity": {
      "value": 0.7,
    },
    //シェイプの大きさの部分
    "size": {
      "value": 4,
      "random": true,
    },
    //繋がる線の部分
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#000000",
      "opacity": 0.5,
      "width": 0.8
    },
    //全体の動き
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "out_mode": "bounce",
      "bounce": true,
    }
  },
  //event設定
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
    },
  },
  "retina_detect": true
});