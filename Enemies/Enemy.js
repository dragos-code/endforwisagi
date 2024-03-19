actor Enemy {
    costume SlimeIdle("gallery:Monsters/Angry Slime Black Idle")
    costume SlimeWalk1("gallery:Monsters/Angry Slime Black Move 1")
    costume SlimeWalk2("gallery:Monsters/Angry Slime Black Move 2")
    costume SlimeWalk3("gallery:Monsters/Angry Slime Black Move 3")
    costume SlimeWalk4("gallery:Monsters/Angry Slime Black Move 4")
    costume Varcolac_maro_Mers_1("gallery:Monsters/Werewolf Brown Walk 1")
    costume Varcolac_maro_Mers_2("gallery:Monsters/Werewolf Brown Walk 2")
    costume Varcolac_maro_Mers_3("gallery:Monsters/Werewolf Brown Walk 3")
    costume Varcolac_maro_Mers_4("gallery:Monsters/Werewolf Brown Walk 4")
    costume Skeleton_Warrior_Knight_Walk_1("gallery:Monsters/Skeleton Warrior Knight Walk 1")
    costume Skeleton_Warrior_Knight_Walk_2("gallery:Monsters/Skeleton Warrior Knight Walk 2")
    costume Skeleton_Warrior_Knight_Walk_3("gallery:Monsters/Skeleton Warrior Knight Walk 3")
    costume Skeleton_Warrior_Knight_Walk_4("gallery:Monsters/Skeleton Warrior Knight Walk 4")
    costume Skeleton_Warrior_Knight_Walk_5("gallery:Monsters/Skeleton Warrior Knight Walk 5")
    costume Skeleton_Warrior_Knight_Walk_6("gallery:Monsters/Skeleton Warrior Knight Walk 6")
    costume Skeleton_Warrior_Knight_Walk_7("gallery:Monsters/Skeleton Warrior Knight Walk 7")
    default costume Liliac_negru_zboara_gura_inchisa_1("gallery:Animals/Bat Black Fly Mouth Closed 1")
    costume Liliac_negru_zboara_gura_inchisa_2("gallery:Animals/Bat Black Fly Mouth Closed 2")
    costume Liliac_negru_zboara_gura_inchisa_3("gallery:Animals/Bat Black Fly Mouth Closed 3")
    costume Liliac_negru_zboara_gura_inchisa_4("gallery:Animals/Bat Black Fly Mouth Closed 4")
    costume Baiat_vampir_plimbare_1("gallery:Figures/Vampire Boy Walk 1")
    costume Baiat_vampir_plimbare_2("gallery:Figures/Vampire Boy Walk 2")
    costume Baiat_vampir_plimbare_3("gallery:Figures/Vampire Boy Walk 3")
    costume Baiat_vampir_plimbare_4("gallery:Figures/Vampire Boy Walk 4")
    costume Skeleton_Warrior_Pirate_Walk_1("gallery:Monsters/Skeleton Warrior Pirate Walk 1")
    costume Skeleton_Warrior_Pirate_Walk_2("gallery:Monsters/Skeleton Warrior Pirate Walk 2")
    costume Skeleton_Warrior_Pirate_Walk_3("gallery:Monsters/Skeleton Warrior Pirate Walk 3")
    costume Skeleton_Warrior_Pirate_Walk_4("gallery:Monsters/Skeleton Warrior Pirate Walk 4")
    costume Skeleton_Warrior_Pirate_Walk_5("gallery:Monsters/Skeleton Warrior Pirate Walk 5")
    costume Skeleton_Warrior_Pirate_Walk_6("gallery:Monsters/Skeleton Warrior Pirate Walk 6")
    costume Skeleton_Warrior_Pirate_Walk_7("gallery:Monsters/Skeleton Warrior Pirate Walk 7")
    costume Firemonster_Moving_1("gallery:Monsters/Firemonster Moving 1")
    costume Firemonster_Moving_2("gallery:Monsters/Firemonster Moving 2")
    costume Firemonster_Moving_3("gallery:Monsters/Firemonster Moving 3")
    let enemy_HealthPoints = 1;
    let spawnRate = 0;
    let enemySpeed = 0;
    let bestiary = [ "bat", "slime", "skelly", "werewolf", "vampire", "lord", "flame", "skeleton king" ];
    let currentMonster = "bat";
    let canEnemyMove = true;
    let enemyCurrentHealthProcent;
    let baseEnemyHealth = 150;
    let totalEnemyHealth = 0;
    function getTotalXP(level) {
        return 12 * Math.pow(level, 2.1) - 12
    }
    function costumeIsSlimeWalking() {
        this.setCostume(this.SlimeWalk1);
        this.wait(0.1);
        this.setCostume(this.SlimeWalk2);
        this.wait(0.1);
        this.setCostume(this.SlimeWalk3);
        this.wait(0.1);
        this.setCostume(this.SlimeWalk4);
        this.wait(0.1);
    }
    function costumeIsWerewolfWalking() {
        this.setCostume(this.Varcolac_maro_Mers_1);
        this.wait(0.1);
        this.setCostume(this.Varcolac_maro_Mers_2);
        this.wait(0.1);
        this.setCostume(this.Varcolac_maro_Mers_3);
        this.wait(0.1);
        this.setCostume(this.Varcolac_maro_Mers_4);
        this.wait(0.1);
    }
    function costumeIsBatFlying() {
        this.setCostume(this.Liliac_negru_zboara_gura_inchisa_1);
        this.wait(0.1);
        this.setCostume(this.Liliac_negru_zboara_gura_inchisa_2);
        this.wait(0.1);
        this.setCostume(this.Liliac_negru_zboara_gura_inchisa_3);
        this.wait(0.1);
        this.setCostume(this.Liliac_negru_zboara_gura_inchisa_4);
        this.wait(0.1);
    }
    function costumeIsSkeletonKnight() {
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_1);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_2);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_3);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_4);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_5);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_6);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Knight_Walk_7);
        this.wait(0.05);
    }
    function costumeIsVampire() {
        this.setCostume(this.Baiat_vampir_plimbare_1);
        this.wait(0.1);
        this.setCostume(this.Baiat_vampir_plimbare_2);
        this.wait(0.1);
        this.setCostume(this.Baiat_vampir_plimbare_3);
        this.wait(0.1);
        this.setCostume(this.Baiat_vampir_plimbare_4);
        this.wait(0.1);
    }
    function costumeIsFlame() {
        this.setCostume(this.Firemonster_Moving_1);
        this.wait(0.05);
        this.setCostume(this.Firemonster_Moving_2);
        this.wait(0.05);
        this.setCostume(this.Firemonster_Moving_3);
        this.wait(0.05);
    }
    function switchToSlime() {
        currentMonster = bestiary[1];
        this.size = 15;
        totalEnemyHealth = baseEnemyHealth * 0.66;
        enemy_HealthPoints = totalEnemyHealth;
    }
    function switchToBat() {
        currentMonster = bestiary[0];
        this.size = 15;
        totalEnemyHealth = baseEnemyHealth * 0.33;
        enemy_HealthPoints = totalEnemyHealth;
    }
    function switchToSkeleton() {
        currentMonster = bestiary[7];
        this.size = 50;
        totalEnemyHealth = this.setSkeletonKingTotalHealth();
        enemy_HealthPoints = totalEnemyHealth;
    }
    function switchToWerewolf() {
        currentMonster = bestiary[3];
        this.size = 25;
        totalEnemyHealth = this.setWerewolfTotalHealth();
        enemy_HealthPoints = totalEnemyHealth;
    }
    function setWerewolfTotalHealth() {
        return 1.5 * playerWeaponDamage + (baseEnemyHealth * 0.5)
    }
    function setVampireTotalHealth() {
        return playerWeaponDamage + baseEnemyHealth
    }
    function setVampireLordTotalHealth() {
        return 2 * playerWeaponDamage + baseEnemyHealth
    }
    function setFlameTotalHealth() {
        return 3 * playerWeaponDamage + baseEnemyHealth
    }
    function setSkeletonKingTotalHealth() {
        return 4 * playerWeaponDamage + baseEnemyHealth * 2
    }
    function spawnRandomX() {
        let x_coord = 0;
        if(Math.randomBetween(1, 2) == 1) {
            x_coord = Math.randomBetween(-360, -340);
        }
        else {
            x_coord = Math.randomBetween(360, 340);
        }
        return x_coord
    }
    function spawnRandomY() {
        let y_coord = 0;
        if(Math.randomBetween(1, 2) == 1) {
            y_coord = Math.randomBetween(240, 220);
        }
        else {
            y_coord = Math.randomBetween(-240, -220);
        }
        return y_coord
    }
    function stageOne() {
        spawnRate = 2;
        enemySpeed = 1.2;
        this.switchToBat();
        for(let i = 1; i <= 20; i++) {
            createClone(this);
            this.wait(spawnRate);
        }
        while(!(this.cloneCount == 0));
    }
    function stageTwo() {
        spawnRate = 2;
        enemySpeed = 1.2;
        for(let i = 1; i <= 10; i++) {
            this.switchToBat();
            createClone(this);
            this.wait(spawnRate);
            this.switchToSlime();
            createClone(this);
            this.wait(spawnRate);
        }
        while(!(this.cloneCount == 0));
    }
    function stageThree() {
        spawnRate = 2;
        enemySpeed = 1.2;
        for(let i = 1; i <= 5; i++) {
            this.switchToSkelly();
            createClone(this);
            this.wait(spawnRate);
            this.switchToBat();
            createClone(this);
            this.wait(spawnRate);
            this.switchToSlime();
            createClone(this);
            this.wait(spawnRate);
            this.switchToBat();
            createClone(this);
            this.wait(spawnRate);
        }
        while(!(this.cloneCount == 0));
    }
    function stageFour() {
        spawnRate = 2;
        enemySpeed = 1.3;
        this.switchToWerewolf();
        for(let i = 1; i <= 10; i++) {
            createClone(this);
            this.wait(spawnRate / 2);
        }
        while(!(this.cloneCount == 0));
    }
    function stageFive() {
        spawnRate = 2;
        enemySpeed = 1.3;
        for(let i = 1; i <= 5; i++) {
            this.switchToWerewolf();
            createClone(this);
            this.wait(spawnRate / 2);
            this.switchToVampire();
            createClone(this);
            this.wait(spawnRate / 2);
        }
        while(!(this.cloneCount == 0));
    }
    function stageSix() {
        spawnRate = 0.2;
        enemySpeed = 1.5;
        for(let i = 1; i <= 3; i++) {
            this.switchToWerewolf();
            createClone(this);
            this.wait(spawnRate);
        }
        for(let i = 1; i <= 3; i++) {
            this.switchToVampire();
            createClone(this);
            this.wait(spawnRate);
        }
        this.wait(3);
        this.switchToVampireLord();
        createClone(this);
        while(!(this.cloneCount == 0));
    }
    function stageSeven() {
        spawnRate = 0.2;
        enemySpeed = 0.7;
        this.switchToFlame();
        for(let i = 1; i <= 20; i++) {
            createClone(this);
            this.wait(spawnRate);
        }
        while(!(this.cloneCount == 0));
    }
    function stageEight() {
        spawnRate = 0.2;
        enemySpeed = 0.7;
        for(let i = 1; i <= 6; i++) {
            this.switchToFlame();
            createClone(this);
            this.wait(spawnRate);
        }
        this.wait(2);
        this.switchToSkeleton();
        createClone(this);
        this.wait(2);
        this.switchToSkeleton();
        createClone(this);
        while(!(this.cloneCount == 0));
    }
    function switchToMonster(monsterToSwitch) {
        currentMonster = monsterToSwitch;
    }
    function switchToSkelly() {
        currentMonster = bestiary[2];
        this.size = 30;
        enemy_HealthPoints = baseEnemyHealth;
    }
    function switchToVampire() {
        currentMonster = bestiary[4];
        this.size = 25;
        totalEnemyHealth = this.setVampireTotalHealth();
        enemy_HealthPoints = totalEnemyHealth;
    }
    function switchToVampireLord() {
        currentMonster = bestiary[5];
        this.size = 65;
        totalEnemyHealth = this.setVampireLordTotalHealth();
        enemy_HealthPoints = totalEnemyHealth;
    }
    function switchToFlame() {
        currentMonster = bestiary[6];
        this.size = 15;
        totalEnemyHealth = this.setFlameTotalHealth();
        enemy_HealthPoints = totalEnemyHealth;
    }
    function costumeIsSkelly() {
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_1);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_2);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_3);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_4);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_5);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_6);
        this.wait(0.05);
        this.setCostume(this.Skeleton_Warrior_Pirate_Walk_7);
        this.wait(0.05);
    }
    function newCurrentHealth(oldTotalHealth, newTotalFormula) {
        enemyCurrentHealthProcent = enemy_HealthPoints / oldTotalHealth * 100;
        return (enemyCurrentHealthProcent / 100) * newTotalFormula
    }
    when stage.started {
        this.setPosition(0, 220);
        this.size = 15;
        this.hide();
        this.goBackwardBy(1);
        this.rotationStyle = "leftRight";
    }
    when cloned {
        while(!gameOver) {
            this.wait(0.05);
            if(this.touching(Bomb_Sphere) || this.touchingActorOrClone(PlayerWeapon) || this.touching(Toxic_Spell_Green) || this.touching(Lava_Golem) || this.touching(Prehistoric_Weapons)) {
                enemy_HealthPoints -= playerWeaponDamage;
                if(this.heading > 0 && this.heading < 180) {
                    this.setPosition(this.x - playerWeaponKnockback, this.y - Math.randomBetween(-1, 1) * playerWeaponKnockback);
                    this.wait(0.1);
                }
                if(0 > this.heading && this.heading > -180) {
                    this.setPosition(this.x + playerWeaponKnockback, this.y - Math.randomBetween(-1, 1) * playerWeaponKnockback);
                    this.wait(0.1);
                }
                this.tintShade = 50;
                this.wait(0.1);
                this.tintShade = 100;
                this.wait(0.4);
            }
            if(enemy_HealthPoints <= 0) {
                broadcast("enemySlained");
                this.deleteClone();
            }
        }
        this.deleteClone();
    }
    when cloned {
        this.goAfter(Health);
        this.show();
        if(Math.randomBetween(1, 2) == 1) {
            this.setPosition(this.spawnRandomX(), Math.randomBetween(-180, 180));
        }
        else {
            this.setPosition(Math.randomBetween(-320, 320), this.spawnRandomY());
        }
        while(!gameOver) {
            if(currentMonster == bestiary[0]) {
                this.costumeIsBatFlying();
            }
            if(currentMonster == bestiary[1]) {
                this.costumeIsSlimeWalking();
            }
            if(currentMonster == bestiary[2]) {
                this.costumeIsSkelly();
            }
            if(currentMonster == bestiary[3]) {
                this.costumeIsWerewolfWalking();
            }
            if(currentMonster == bestiary[4] || currentMonster == bestiary[5]) {
                this.costumeIsVampire();
            }
            if(currentMonster == bestiary[6]) {
                this.costumeIsFlame();
            }
            if(currentMonster == bestiary[7]) {
                this.costumeIsSkeletonKnight();
            }
        }
    }
    when stage.signalReceived("startWaves") {
        baseEnemyHealth = 150;
        this.wait(2);
        xpForKill = this.getTotalXP(4) / 20;
        this.stageOne();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(7) - getPlayerCurrentXP) / 20;
        this.stageTwo();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(10) - getPlayerCurrentXP) / 20;
        this.stageThree();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(11) - getPlayerCurrentXP) / 10;
        this.stageFour();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(13) - getPlayerCurrentXP) / 10;
        this.stageFive();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(15) - getPlayerCurrentXP) / 7;
        this.stageSix();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(18) - getPlayerCurrentXP) / 20;
        this.stageSeven();
        this.wait(1.5);
        xpForKill = (this.getTotalXP(21) - getPlayerCurrentXP) / 8;
        this.stageEight();
        this.wait(3);
        broadcast("bossIntro");
        while(!!isBossAlive);
    }
    when cloned {
        while(!gameOver) {
            if(canEnemyMove) {
                this.pointTowards(Player);
                this.move(enemySpeed);
                this.wait(0.05);
            }
            else {
                
            }
        }
    }
    when stage.signalReceived("valuesUpdate") {
        let oldTotalEnemyHealth = totalEnemyHealth;
        if(currentMonster == bestiary[3]) {
            enemy_HealthPoints = this.newCurrentHealth(oldTotalEnemyHealth, this.setWerewolfTotalHealth());
        }
        if(currentMonster == bestiary[4]) {
            enemy_HealthPoints = this.newCurrentHealth(oldTotalEnemyHealth, this.setVampireTotalHealth());
        }
        if(currentMonster == bestiary[5]) {
            enemy_HealthPoints = this.newCurrentHealth(oldTotalEnemyHealth, this.setVampireLordTotalHealth());
        }
        if(currentMonster == bestiary[6]) {
            enemy_HealthPoints = this.newCurrentHealth(oldTotalEnemyHealth, this.setFlameTotalHealth());
        }
        if(currentMonster == bestiary[7]) {
            enemy_HealthPoints = this.newCurrentHealth(oldTotalEnemyHealth, this.setSkeletonKingTotalHealth());
        }
        if(currentMonster == bestiary[0] && currentMonster == bestiary[1] && currentMonster == bestiary[2]) {
            enemy_HealthPoints += 1;
        }
    }
}
