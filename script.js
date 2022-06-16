let soonSection = document.createElement("p");
soonSection.setAttribute("class", "soonSection");
soonSection.innerText = "Em Construção";
const infoSection = document.querySelector('.info-section');

function emBreve(){
  if (infoSection.style.display !== 'none') {
    infoSection.style.display = 'none';
    infoSection.parentNode.appendChild(soonSection);
  } else {
    soonSection.parentNode.removeChild(soonSection);
  infoSection.style.display = 'block';
  }
};

document.querySelector('#consulta').addEventListener("click", emBreve);

document.querySelector('#agendamento').addEventListener("click", emBreve);

document.querySelector('#agenda').addEventListener("click", emBreve);


