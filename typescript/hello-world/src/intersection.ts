type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("textBox drag...");
  },

  resize: () => {
    console.log("textBox resize...");
  },
};

textBox.drag();
textBox.resize();
