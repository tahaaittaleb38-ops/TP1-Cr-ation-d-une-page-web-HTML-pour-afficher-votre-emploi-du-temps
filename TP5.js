function ex1(){
    let nombre1 = Number(prompt("Entrez le premier nombre :"));
    let nombre2 = Number(prompt("Entrez le deuxième nombre :"));

    console.log("1er number est :"+(nombre1))
    console.log("2eme number est :"+(nombre2))
    console.log("Somme : " + (nombre1 + nombre2));
    console.log("Difference : " + (nombre1 - nombre2));
    console.log("Produit : " + (nombre1 * nombre2));
    console.log("Quotient : " + (nombre1 / nombre2));
}
//ex1();
function ex2(){
    let nombreSecret = Math.floor(Math.random() * 10) + 1;
    let mo7awlat = 0;
    let trouve = false;

    while (trouve === false) {

        let proposition = Number(prompt("khtar xi ra9m bin 1 o 10 :"));
        mo7awlat++;

        if (proposition < nombreSecret) {
            alert("sghiiir - jrib ra9m kbir");

        } else if (proposition > nombreSecret) {
            alert("kbiir - jrib ra9m sghir");

        } else {
            alert("rah derti " + mo7awlat + " mo7awlat !");
            trouve = true;
        }
    }
}
//ex2();