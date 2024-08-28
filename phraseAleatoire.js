
const geneRandom = () =>{
    let sujet = ["j´ai", "tu as", "il a", "nous avons", "vous avez", "ils ont"];
    let adverbe = ["beaucoup", "peu", "énormément"];
    let adverbe2 = ["de courage", "de chance", "d´espoir", "de volonté", "de rigueur"];

    return sujet[Math.floor(Math.random(sujet)*6)]+" "+adverbe[Math.floor(Math.random(sujet)*3)]+" "+adverbe2[Math.floor(Math.random(sujet)*5)];

}

console.log(geneRandom());