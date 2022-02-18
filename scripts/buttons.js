var butY = 505;

function loadButtons () {

  inp1 = createInput();
  inp1.size(275, 37.8);
  inp1.style("justify-content", "center");
  inp1.position(displayWidth/2-inp1.width/2, butY);
  inp1.style("font-size", "20px");
  inp1.style("border-radius", "10px");

  retry = createButton("RETRY");
  retry.position(displayWidth/2-110, butY);
  retry.size(100, 37.8);
  retry.style("background", "black");
  retry.style("border", "transparent");
  retry.style("color", "white");
  retry.style("display", "none");
  retry.style("border-radius", "10px");
  retry.mousePressed(gameRestart)

  next = createButton("NEXT");
  next.position(displayWidth/2+10, butY);
  next.size(100, 37.8);
  next.style("background", "white");
  next.style("border", "1px solid black");
  next.style("color", "black");
  next.style("display", "none");
  next.style("border-radius", "10px");

}