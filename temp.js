function readyFight(player, foe) {
    let inCombat = true;
    while (inCombat = true) {
        playerCombatMenu(player, foe)
        function playerCombatMenu(player, foe) {
            let indecisive = true;
            while (indecisive = true) { 
                let firstSelection = readline.question(`A ${foe.name} is attacking! \nQuickly, ${player.name}; take action! \nAttack \nFlee \n`);
                switch (firstSelection) {
                    case "Attack".toLowerCase():
                        let dmg = foe.hp - (Math.floor(Math.random() * 20) + 1) 
                        console.log(`${foe.name} takes ${dmg} damage!`)
                        foe.hp = foe.hp - dmg;
                        if (foe.hp > 0) {
                            foeCombat(player, foe)
                        } else if (foe.hp < 0) {
                            console.log(`The ${foe.name} is defeated; rejoice!`)
                            player.inventory.push("Health Potion")
                            indecisive = false
                            inCombat = false;
                            adventureMenuSelection(player)
                        }
                        break; 
                    case "Flee".toLowerCase():
                        let cowardice = false;
                        if (cowardice === false) {
                            console.log(`You attempt to flee from the ${foe.name}...`)
                            results(player, foe)
                        } else if (cowardice === true) {
                            console.log(`You already tried to run from this ${foe.name}, remember?! \nHere's a reminder: it didn't work`)
                        }
                        function results(player, foe) {
                            let finalResults = Math.floor(Math.random() * 10)
                            switch (finalResults) {
                                case (finalResults >= 5):
                                    console.log(`You manage to outrun the ${foe.name}, and make it to safety!`)
                                    pauseMenu()
                                    break;
                                default:
                                    console.log(`You can't outrun the ${foe.name}. \nYou must stand and fight, ${player.name}!`)
                                    cowardice = true;
                                    break;
                                }
                            }
                        break; 
                    }
                }  
            }
        function foeCombat(player, foe) {
            let dmg = player.hp - (Math.floor(Math.random() * foe.atk) + 1) 
            console.log(`${player.name} takes ${dmg} damage!`)
            if (player.hp > 0) {
                playerCombatMenu(player, foe)
            } else {
                console.log(`${player.name}, the ${player.race} ${player.profession} has been slain by a ${foe.name}! \nBetter luck next time, ${player.name}`)
                inCombat = false;
                inGame = false;
            }
        }
    }   
}