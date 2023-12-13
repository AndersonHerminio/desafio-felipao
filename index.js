const heroName = 'Herminio';
const powerXp = 199999;

switch (true) {
    case powerXp <= 1000:
        console.log(`O Herói ${heroName} está no nível Ferro`);
        break;
        case powerXp >= 1001 && powerXp <= 2000:
        console.log(`O Herói ${heroName} está no nível Bronze`);
        break;
        case powerXp >= 2001 && powerXp <= 5000:
        console.log(`O Herói ${heroName} está no nível Prata`);
        break;
        case powerXp >= 6001 && powerXp <= 7000:
        console.log(`O Herói ${heroName} está no nível Ouro`);
        break;
        case powerXp >= 7001 && powerXp <= 8000:
        console.log(`O Herói ${heroName} está no nível Platina`);
        break;
        case powerXp >= 8001 && powerXp <= 9000:
        console.log(`O Herói ${heroName} está no nível Ascendente`);
        break;
        case powerXp >= 9001 && powerXp <= 10000:
        console.log(`O Herói ${heroName} está no nível Imortal`);
        break;
        case powerXp >= 10000 && powerXp <= 99999:
        console.log(`O Herói ${heroName} está no nível Radiante`);
        break;
    default:
        console.log(`O Herói ${heroName} é um deus`);
}
