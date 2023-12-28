let i=1;
do{
    let nomeHeroi=prompt("Informe o Nome do "+i+"º Herói? ");
    let xp=Number(prompt("Informe a Pontuação do "+i+"º Heroi? "));
            if (xp<=1000){
                xp="FERRO";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=1001 && xp<=2000){
                xp="BRONZE";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=2001 && xp<=5000){
                xp="PRATA";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=5001 && xp<=7000){
                xp="OURO";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=7001 && xp<=8000){
                xp="PLATINA";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=8001 && xp<=9000){
                xp="ASCENDENTE";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=9001 && xp<=10000){
                xp="IMORTAL";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            } else if (xp>=10001){
                xp="RADIANTE";
                console.log("O Herói de Nome: " + nomeHeroi+ "! Tem como Classificação Atual o Nivel: " +xp);
            }
    i++;
}while (i<=3);
