function display(message) {
    display.num++;
    console.log(message);
    console.log(display.num);
}

display.num = 12;
display("dd");