let pecaDeXadrez = "CaavALo";

switch (pecaDeXadrez.toLowerCase()){
    case "piao":
        console.log("Vertical uma casa");
        break;
    case "bispo":
        console.log("Diagonal quantas casas quiser");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "rainha":
        console.log("Qualquer direção, quantas casas quiser");
        break;
    case "torre":
        console.log("Horizontal e Vertical quantas casas quiser");
        break;
    case "rei":
        console.log("Qualquer direção apenas uma casa");
        break;
    default:
        console.log("Peça inválida!");
}