stage {
    backdrop Ruine("gallery:Castle/Ruined Castle")
    backdrop Top_Down_Green_Field_Empty("gallery:Nature/Top Down Green Field Empty")
    default backdrop Negru("gallery:General/Black")
    backdrop Creepy_1("gallery:Halloween/Creepy 1")

    let timer = 0;
    let time = 0;
    let gameOver = false;
    let playerClasses = [ "ninja", "wizard", "warrior", "robot" ];
    let currentClass;
    // Player getters 
    let playerX = 0;
    let playerY = 0;
    let getPlayerLevel = 0;
    let getPlayerXpProcent = 0;
    let playerWeaponDamage = 0;
    let playerWeaponKnockback = 0;
    let getPlayerDir;
    let getPlayerTotalHealth = 0;
    let warriorPassword = "77617272696F72";
    let getPlayerCurrentHealth = 0;
    let getPlayerTotalMana = 0;
    let getPlayerCurrentMana;
    let getPlayerCmanaCost = 0;
    let getPlayerQmanaCost = 0;
    let getPlayerRmanaCost = 0;
    let getPlayerCurrentXP;
    let getPlayerEndurance;
    let getPlayerForce;
    let getPlayerWisdom;
    let getPlayerAgility;
    let getPlayerSpeed;
    let getPlayerIFD;
    let getPlayerResistance;
    let getPlayerRecoveryRate;
    let getSkill_1CD;
    let getSkill_2CD;
    let getSkill_3CD;
    let q_SpellActive = false;
    let canUseRspell = true;
    let xpForKill = 0;
    let levelCap = 20;
    let statCap = 20;
    let getEnemyDamage;
    // Boss variables
    let bellOnCooldown = false;
    let getBossHP;
    let getBossTotalHealth;
    let bellX = 0;
    let bellY = 45;
    let isBossAlive = true;

    function returnMinutes() {
        if(timer % 60 < 10) {
            return this.concat("0", timer % 60)
        }
        else {
            return timer % 60
        }
    }
    when signalReceived("startPlayerValues") {
        this.setScene(this.Top_Down_Green_Field_Empty);
        levelCap = 20;
        statCap = 20;
    }
    when signalReceived("startPlayer") {
        timer = 0;
        showVariable(ref time)
        while(!gameOver) {
            time = this.concat(Math.floor(timer / 60), this.concat(":", this.returnMinutes()));
            this.wait(1);
            timer += 1;
        }
    }
    when started {
        this.setScene(this.Negru);
        currentClass = playerClasses[0];
    }
    when signalReceived("bossStage") {
        while(!!isBossAlive);
        this.broadcast("stagesComplete");
    }
}