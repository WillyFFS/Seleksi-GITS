function denseRanking(scores, gitsScores) {

    let ranking = [... new Set(scores)].sort((a,b)=>b-a);

    let result=[];
    for (let i =0; i< gitsScores.length;i++){
        let temp = -99;
        let j =0;
        while (temp === -99 && j< ranking.length){
            if(gitsScores[i] >= ranking[j]){
                temp = j + 1;
            }
            j++;
        }
        temp === -99 ? temp = ranking.length+1 : ""
        result.push(temp);
    }

    return result;
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];

console.log(denseRanking(scores, gitsScores)); 
