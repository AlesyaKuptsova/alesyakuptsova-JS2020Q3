
  const keyLayouts = [[
    "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "shift", "z", "x", "c", "v", "b", "n", "m", ",<", ".>", "?/",
    "EN/RU", "space", "sound"
  ], ["1!", "2\"", "3№", "4;", "5%", "6:", "7?", "8*", "9(", "0)", "backspace",
  "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
  "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
  "done", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".,",
  "EN/RU", "space", "sound"]];

const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    textArea: null,
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false,
    sound: false,
    languageIndex: 0
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");
    var textArea = document.getElementById("textarea");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys(this.properties.languageIndex));

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });

    textArea.addEventListener('blur', function(){
      textArea.focus();
    });
  },

  _createKeys(languageIndex) {
    const fragment = document.createDocumentFragment();
  
    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };
    let keyLayout = keyLayouts[languageIndex];
    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "p", "ъ", "enter", "?/", ".,"].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
            const audio = document.querySelector('.snare');
            this._playSound(audio);
          });
          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            const audio = document.querySelector('.ride');
            this._playSound(audio);
          });
          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
          keyElement.innerHTML = createIconHTML("arrow_circle_up");

          keyElement.addEventListener("click", () => {
            this._toggleShift();
            keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
            const audio = document.querySelector('.hihat');
            this._playSound(audio);
          });
          break;

        case "sound":
            keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
            keyElement.classList.toggle("keyboard__key--active", this.properties.sound);
            keyElement.innerHTML = createIconHTML("audiotrack");

            keyElement.addEventListener("click", () => {
              this.properties.sound = !this.properties.sound;
              keyElement.classList.toggle("keyboard__key--active", this.properties.sound);
              const audio = document.querySelector('.kick');
              this._playSound(audio);
            });
            break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
            const audio = document.querySelector('.boom');
            this._playSound(audio);
          });
          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
            const audio = document.querySelector('.kick');
            this._playSound(audio);
          });
          break;

        case "EN/RU":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("language");

          keyElement.addEventListener("click", () => {
            this.properties.languageIndex = (this.properties.languageIndex+1) % 2;

            this.elements.keysContainer.querySelectorAll('*').forEach(n => n.remove());
            this.elements.keysContainer.appendChild(this._createKeys(this.properties.languageIndex));
            this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

            const audio = document.querySelector('.kick');
            this._playSound(audio);
          });
          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
            const audio = document.querySelector('.kick');
            this._playSound(audio);
          });
          break;

        default:
          keyElement._value = key;
          if(this.properties.shift && keyElement._value.length > 1) {
            keyElement.textContent = keyElement._value[1];
          } else {
            keyElement.textContent = keyElement._value[0];
          }
          keyElement.textContent = (this.properties.capsLock ^ this.properties.shift) ? keyElement.textContent.toUpperCase() : keyElement.textContent.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += keyElement.textContent;
            this._triggerEvent("oninput");
            var audio;
            if(this.properties.languageIndex === 0){
              audio = document.querySelector('.kick');
            }else {
              audio = document.querySelector('.openhat');
            }
            this._playSound(audio);
          });
          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this.updateSymbols();
  },
  _toggleShift() {
    this.properties.shift = !this.properties.shift;
    this.updateSymbols();
  },
  _playSound(audio){
    if(!this.properties.sound) {
      return;
    }
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  },
  updateSymbols() {
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        if(key._value !== undefined){
          if(this.properties.shift && key._value.length > 1) {
            key.textContent = key._value[1];
          } else {
            key.textContent = key._value[0];
          }
          key.textContent = (this.properties.capsLock ^ this.properties.shift) ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});

document.getElementById("textarea").addEventListener('keydown', color);

function color(event) {
  let arr = document.getElementsByClassName("keyboard__key");
  for (let i=0; i< arr.length; i++) {
    var item = arr[i];
    if(item.textContent.toLowerCase()  === event.key){
      item.style.background = "rgba(255, 255, 255, 0.12)";
    }else {
      item.style.background = "";
    }
  }
}
