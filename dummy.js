function funct() {
    let body = document.getElementById("dom");
    console.log(body);
    let newe = document.createElement("h2");
    newe.innerText = "Hi,This is Tharunkumar here!";


    let newele = document.createElement("h2");
    newele.innerText = "I am pursuing my B.E in Electronics and Instrumentation Enginnering at Kongu Engineering College,Perundurai,Erode.";
    setTimeout(() => { body.appendChild(newele); }, 1000);
    setTimeout(() => { body.removeChild(newele); }, 5000);

    let newele1 = document.createElement("h2")
    newele1.innerText = "Seeking for an InternShip";
    setTimeout(() => { body.appendChild(newele1); }, 5000);
    setTimeout(() => { body.removeChild(newele1); }, 10000);

    let obj = document.getElementById("event");
    obj.addEventListener("click", () => {
        obj.innerText = "clicked";
    });
}