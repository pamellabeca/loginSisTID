//mudando cor do svg no hover
const svg = document.getElementById('enterSvg');
document.getElementById('button').addEventListener('mouseover', function() {
  svg.querySelector('path').setAttribute('stroke', '#C33D57');
});

document.getElementById('button').addEventListener('mouseout', function() {
  svg.querySelector('path').setAttribute('stroke', '#FFF');
});