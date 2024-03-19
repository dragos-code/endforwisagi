actor Player {
    default costume NinjaIdle("gallery:Animals/Ninja Cat White Without Hood Idle")
    costume NinjaWalk1("gallery:Animals/Ninja Cat White Without Hood Walk 1")
    costume NinjaWalk2("gallery:Animals/Ninja Cat White Without Hood Walk 2")
    costume NinjaWalk3("gallery:Animals/Ninja Cat White Without Hood Walk 3")
    costume NinjaWalk4("gallery:Animals/Ninja Cat White Without Hood Walk 4")
    costume NinjaStunned1("gallery:Animals/Ninja Cat White Without Hood Whacked 1")
    costume NinjaStunned2("gallery:Animals/Ninja Cat White Without Hood Whacked 2")
    costume NinjaStunned3("gallery:Animals/Ninja Cat White Without Hood Whacked 3")
    costume Ninja_Cat_White_Without_Hood_Horizontal_Slide_3("gallery:Animals/Ninja Cat White Without Hood Horizontal Slide 3")
    costume Ninja_Cat_White_Without_Hood_Horizontal_Slide_2("gallery:Animals/Ninja Cat White Without Hood Horizontal Slide 2")
    costume Ninja_Cat_White_Without_Hood_Horizontal_Slide_1("gallery:Animals/Ninja Cat White Without Hood Horizontal Slide 1")
    costume Pisica_Ninja_Albă_Fără_Glugă_Rotire_1("gallery:Animals/Ninja Cat White Without Hood Spinning Loop 1")
    costume Pisica_Ninja_Albă_Fără_Glugă_Rotire_2("gallery:Animals/Ninja Cat White Without Hood Spinning Loop 2")
    costume Pisica_Ninja_Albă_Fără_Glugă_Rotire_3("gallery:Animals/Ninja Cat White Without Hood Spinning Loop 3")
    costume Pisica_Ninja_Albă_Fără_Glugă_Rotire_4("gallery:Animals/Ninja Cat White Without Hood Spinning Loop 4")
    costume Female_Mage_White_Walk_1("gallery:Figures/Female Mage White Walk 1")
    costume Female_Mage_White_Walk_2("gallery:Figures/Female Mage White Walk 2")
    costume Female_Mage_White_Walk_3("gallery:Figures/Female Mage White Walk 3")
    costume Female_Mage_White_Walk_4("gallery:Figures/Female Mage White Walk 4")
    costume Female_Mage_White_Walk_5("gallery:Figures/Female Mage White Walk 5")
    costume Female_Mage_White_Walk_6("gallery:Figures/Female Mage White Walk 6")
    costume Female_Mage_White_Throw_1("gallery:Figures/Female Mage White Throw 1")
    costume Female_Mage_White_Throw_2("gallery:Figures/Female Mage White Throw 2")
    costume Female_Mage_White_Throw_3("gallery:Figures/Female Mage White Throw 3")
    costume Female_Mage_White_Idle_Empty_Hands("gallery:Figures/Female Mage White Idle Empty Hands")
    costume Female_Mage_White_Summon_Pose_1("gallery:Figures/Female Mage White Summon Pose 1")
    costume Female_Mage_White_Summon_Pose_2("gallery:Figures/Female Mage White Summon Pose 2")
    costume Female_Mage_White_Summon_Pose_3("gallery:Figures/Female Mage White Summon Pose 3")
    costume Female_Mage_White_Make_Staff_Glow("gallery:Figures/Female Mage White Make Staff Glow")
    costume Female_Mage_White_Glowing_Staff_4("gallery:Figures/Female Mage White Glowing Staff 4")
    costume Female_Mage_White_Glowing_Staff_3("gallery:Figures/Female Mage White Glowing Staff 3")
    costume Female_Mage_White_Glowing_Staff_2("gallery:Figures/Female Mage White Glowing Staff 2")
    costume Female_Mage_White_Glowing_Staff_1("gallery:Figures/Female Mage White Glowing Staff 1")
    costume Female_Mage_White_Defend("gallery:Figures/Female Mage White Defend")
    costume Female_Mage_White_Idle("gallery:Figures/Female Mage White Idle")
    costume White_Robot_Player_Hurt("gallery:Aliens_Universe/White Robot Player Hurt")
    costume White_Robot_Player_Idle("gallery:Aliens_Universe/White Robot Player Idle")
    costume White_Robot_Player_Walk_1("gallery:Aliens_Universe/White Robot Player Walk 1")
    costume White_Robot_Player_Walk_2("gallery:Aliens_Universe/White Robot Player Walk 2")
    costume White_Robot_Player_Walk_3("gallery:Aliens_Universe/White Robot Player Walk 3")
    costume White_Robot_Player_Walk_4("gallery:Aliens_Universe/White Robot Player Walk 4")
    costume White_Robot_Player_Shoot_Walk_1("gallery:Aliens_Universe/White Robot Player Shoot Walk 1")
    costume White_Robot_Player_Shoot_Walk_2("gallery:Aliens_Universe/White Robot Player Shoot Walk 2")
    costume White_Robot_Player_Shoot_Walk_3("gallery:Aliens_Universe/White Robot Player Shoot Walk 3")
    costume White_Robot_Player_Shoot_Walk_4("gallery:Aliens_Universe/White Robot Player Shoot Walk 4")
    costume White_Robot_Player_Defend("gallery:Aliens_Universe/White Robot Player Defend")
    costume White_Robot_Player_Slide_3("gallery:Aliens_Universe/White Robot Player Slide 3")
    costume White_Robot_Player_Slide_2("gallery:Aliens_Universe/White Robot Player Slide 2")
    costume White_Robot_Player_Slide_1("gallery:Aliens_Universe/White Robot Player Slide 1")
    costume Knight_4_Idle("gallery:Castle/Knight 4 Idle")
    costume Knight_4_Walk_1("gallery:Castle/Knight 4 Walk 1")
    costume Knight_4_Walk_2("gallery:Castle/Knight 4 Walk 2")
    costume Knight_4_Walk_3("gallery:Castle/Knight 4 Walk 3")
    costume Knight_4_Walk_4("gallery:Castle/Knight 4 Walk 4")
    costume Knight_4_Walk_5("gallery:Castle/Knight 4 Walk 5")
    costume Knight_4_Walk_6("gallery:Castle/Knight 4 Walk 6")
    let player_currentState = state_idle;
    let state_idle = "idle";
    let state_moving = "moving";
    let state_hurt = "hurt";
    let state_defeat = "defeated";
    let player_health = 1;
    let player_Level = 1;
    let player_Speed = 0;
    let currentXP = 0;
    let xpForNextLevel = 0;
    let nextLevelPercentage = 0;
    let baseEndurance = 10;
    let baseForce = 10;
    let baseWisdom = 10;
    let baseAgility = 10;
    let statPoint = 0;
    let totalHealth = 100;
    let damageResistance = 0;
    let enemyDamage = 55;
    let state_invincibilityFrames = "iframes";
    let canBeDamaged = true;
    let InvicibilityFramesDuration = 0;
    let RecoveryRate = 0;
    let playerBaseRecovery;
    let playerBaseDamage;
    let playerBaseSpeed;
    let playerBaseHP;
    let playerBaseResist;
    let playerBaseKnockback;
    let playerBaseIFD;
    let playerRecoveryMultiplier;
    let playerDamageMultiplier;
    let playerDir;
    let glideDist = 60;
    let playerSpeedMultiplier;
    let playerHealthMultiplier;
    let playerResistMultiplier;
    let playerKnockMultiplier;
    let playerIFDMultiplier;
    let state_c_spell = "c spell";
    let canUseCspell = true;
    let playerBaseMana;
    let playerMana;
    let totalMana;
    let manaRechargeRate;
    let manaRechargeDelay;
    let playerManaMultiplier;
    let delayOver = true;
    let state_q_spell = "q spell";
    let canUseQspell = true;
    let state_r_spell = "r spell";
    let c_Cooldown = 4;
    let q_Cooldown = 16;
    let r_Cooldown = 18;
    let q_manaCost = 50;
    let r_manaCost = 50;
    let c_manaCost = 50;
    let c_spellActive = false;
    let r_spellActive = false;
    let glideTime = 0.25;
    function changeStateTo(stateToChange) {
        player_currentState = stateToChange;
        broadcast("playerStateChanged");
    }
    function calculateSkillCooldown(skillCD) {
        return skillCD / (baseWisdom * 0.1)
    }
    function setDefaultMultipliersAndStats() {
        playerBaseRecovery = 15.62;
        playerBaseDamage = 50;
        playerBaseSpeed = -1;
        playerBaseHP = 100;
        playerBaseMana = 100;
        playerBaseResist = 0.8;
        playerBaseKnockback = 5;
        playerBaseIFD = -10.76;
        playerRecoveryMultiplier = 6.81;
        playerDamageMultiplier = 10;
        playerSpeedMultiplier = 0.19;
        playerHealthMultiplier = 10;
        playerResistMultiplier = 0.03;
        playerKnockMultiplier = 1.7;
        playerIFDMultiplier = 5.98;
        playerManaMultiplier = 10;
    }
    function calculateProgressValue(currentXP, player_Level) {
        let xpRequiredForCurrentLevel = this.xpGrowth(player_Level);
        let xpRequiredForNextLevel = this.xpGrowth(player_Level + 1);
        let totalXPForNextLevel = xpRequiredForNextLevel - xpRequiredForCurrentLevel;
        let currentProgressXP = currentXP - xpRequiredForCurrentLevel;
        let progressValue = (currentProgressXP / totalXPForNextLevel) * 100;
        progressValue = Math.max(0, Math.min(progressValue, 100));
        return progressValue
    }
    function xpGrowth(currentLevel) {
        return 12 * Math.pow(currentLevel, 2.1) - 12
    }
    function setPlayerHp() {
        return playerBaseHP + (baseEndurance * playerHealthMultiplier)
    }
    function setPlayerMana() {
        return playerBaseMana + (baseWisdom * playerManaMultiplier)
    }
    function setPlayerSpeed() {
        return playerBaseSpeed + (baseAgility * playerSpeedMultiplier)
    }
    function setPlayerDamageResistance() {
        return playerBaseResist - (baseEndurance * playerResistMultiplier)
    }
    function setPlayerRecoveryRate() {
        return playerBaseRecovery - ((Math.log(baseAgility) + 1) * playerRecoveryMultiplier)
    }
    function setPlayerInvFramesDuration() {
        return playerBaseIFD + ((Math.log(baseAgility) + 1) * playerIFDMultiplier)
    }
    function setPlayerDamage() {
        return playerBaseDamage + ((baseForce - 10) * playerDamageMultiplier)
    }
    function setPlayerWeaponKnock(baseKnock) {
        return playerBaseKnockback + (baseForce * playerKnockMultiplier)
    }
    function xpGain(currentLevel) {
        return 20 * (Math.floor((currentLevel - 1) / 10) + 1)
    }
    function setPlayerValues() {
        totalHealth = this.setPlayerHp();
        totalMana = this.setPlayerMana();
        player_Speed = this.setPlayerSpeed();
        damageResistance = this.setPlayerDamageResistance();
        RecoveryRate = this.setPlayerRecoveryRate();
        InvicibilityFramesDuration = this.setPlayerInvFramesDuration();
        playerWeaponDamage = this.setPlayerDamage();
        playerWeaponKnockback = this.setPlayerWeaponKnock();
        broadcast("valuesUpdate");
    }
    function startingPlayerValues() {
        if(currentClass == playerClasses[0]) {
            glideDist = 60;
            this.startingClassValues(10, 9, 10, 11, 50, 65, 100, 4, 16, 18);
            manaRechargeDelay = 4;
            manaRechargeRate = 10;
        }
        if(currentClass == playerClasses[1]) {
            this.startingClassValues(10, 9, 11, 10, 15, 70, 110, 3, 5, 15);
            manaRechargeDelay = 1.5;
            manaRechargeRate = 15;
        }
        if(currentClass == playerClasses[2]) {
            this.startingClassValues(10, 11, 10, 9, 35, 50, 75, 7, 15, 8);
            manaRechargeDelay = 4;
            manaRechargeRate = 10;
        }
        if(currentClass == playerClasses[3]) {
            glideDist = 45;
            this.startingClassValues(11, 11, 9, 9, 24, 24, 24, 2, 2, 2);
        }
        statPoint = 0;
        totalHealth = this.setPlayerHp();
        totalMana = this.setPlayerMana();
        player_health = totalHealth;
        playerMana = totalMana;
        player_Level = 1;
        currentXP = 0;
        canBeDamaged = true;
    }
    function startingClassValues(end, forc, wis, agi, c_cost, q_cost, r_cost, c_cd, q_cd, r_cd) {
        baseEndurance = end;
        baseForce = forc;
        baseWisdom = wis;
        baseAgility = agi;
        c_manaCost = c_cost;
        q_manaCost = q_cost;
        r_manaCost = r_cost;
        c_Cooldown = c_cd;
        q_Cooldown = q_cd;
        r_Cooldown = r_cd;
    }
    function updateGlobalValues() {
        getPlayerDir = this.heading;
        getPlayerTotalHealth = totalHealth;
        getPlayerCurrentHealth = player_health;
        getPlayerTotalMana = totalMana;
        getPlayerCurrentMana = playerMana;
        getPlayerCmanaCost = c_manaCost;
        getPlayerQmanaCost = q_manaCost;
        getPlayerRmanaCost = r_manaCost;
        playerX = this.x;
        playerY = this.y;
        getPlayerLevel = player_Level;
        getPlayerCurrentXP = currentXP;
        getPlayerXpProcent = nextLevelPercentage;
        nextLevelPercentage = Math.round(calculateProgressValue(currentXP, player_Level));
        getPlayerEndurance = baseEndurance;
        getPlayerForce = baseForce;
        getPlayerWisdom = baseWisdom;
        getPlayerAgility = baseAgility;
        getPlayerResistance = Math.round((1 - damageResistance) * 100);
        getSkill_1CD = this.calculateSkillCooldown(c_Cooldown);
        getSkill_2CD = this.calculateSkillCooldown(q_Cooldown);
        getSkill_3CD = this.calculateSkillCooldown(r_Cooldown);
        getPlayerSpeed = player_Speed;
        getPlayerIFD = InvicibilityFramesDuration;
        getPlayerRecoveryRate = RecoveryRate;
    }
    when stage.signalReceived("playerSetStateIdle") {
        this.changeStateTo(state_idle);
    }
    when stage.signalReceived("playerSetStateMoving") {
        this.changeStateTo(state_moving);
    }
    when stage.signalReceived("playerSetStateHurt") {
        this.changeStateTo(state_hurt);
    }
    when stage.signalReceived("playerSetStateToDefeat") {
        this.changeStateTo(state_defeat);
    }
    when stage.signalReceived("playerStateChanged") {
        if(currentClass == playerClasses[0]) {
            while(player_currentState == state_moving && !q_SpellActive) {
                this.setCostume(this.NinjaWalk1);
                this.wait(0.1);
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.wait(0.1);
                    this.nextCostume();
                }
            }
        }
        if(currentClass == playerClasses[1]) {
            while(player_currentState == state_moving && (!q_SpellActive && (!c_spellActive && !r_spellActive))) {
                this.setCostume(this.Female_Mage_White_Walk_1);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Walk_2);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Walk_3);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Walk_4);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Walk_5);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Walk_6);
                this.wait(0.1);
            }
        }
        if(currentClass == playerClasses[2]) {
            while(player_currentState == state_moving) {
                this.setCostume(this.Knight_4_Walk_1);
                for(let variable1 = 1; variable1 <= 5; variable1++) {
                    this.wait(0.2);
                    this.nextCostume();
                }
            }
        }
        if(currentClass == playerClasses[3] && !q_SpellActive) {
            while(player_currentState == state_moving) {
                this.setCostume(this.White_Robot_Player_Walk_1);
                this.wait(0.2);
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.wait(0.1);
                    this.nextCostume();
                }
            }
        }
        while(player_currentState == state_hurt) {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.NinjaStunned1);
                this.wait(0.2);
                this.setCostume(this.NinjaStunned2);
                this.wait(0.2);
                this.setCostume(this.NinjaStunned3);
                this.wait(0.2);
            }
            if(currentClass == playerClasses[1]) {
                this.setCostume(this.Female_Mage_White_Defend);
            }
            if(currentClass == playerClasses[2]) {
                this.tintShade = 50;
                this.wait(0.2);
                this.tintShade = 100;
                this.wait(0.2);
                this.tintShade = 50;
                this.wait(0.2);
                this.tintShade = 100;
                this.wait(0.2);
            }
            if(currentClass == playerClasses[3]) {
                this.setCostume(this.White_Robot_Player_Defend);
            }
        }
        while(player_currentState == state_c_spell) {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.Ninja_Cat_White_Without_Hood_Horizontal_Slide_1);
                this.wait(0.1);
                this.setCostume(this.Ninja_Cat_White_Without_Hood_Horizontal_Slide_2);
                this.wait(0.1);
                this.setCostume(this.Ninja_Cat_White_Without_Hood_Horizontal_Slide_3);
                this.wait(0.1);
            }
            if(currentClass == playerClasses[3]) {
                this.setCostume(this.White_Robot_Player_Slide_1);
                this.wait(0.1);
                this.setCostume(this.White_Robot_Player_Slide_2);
                this.wait(0.1);
                this.setCostume(this.White_Robot_Player_Slide_3);
                this.wait(0.1);
            }
        }
        while(q_SpellActive) {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.Pisica_Ninja_Albă_Fără_Glugă_Rotire_1);
                this.wait(0.1);
                this.setCostume(this.Pisica_Ninja_Albă_Fără_Glugă_Rotire_2);
                this.wait(0.1);
                this.setCostume(this.Pisica_Ninja_Albă_Fără_Glugă_Rotire_3);
                this.wait(0.1);
                this.setCostume(this.Pisica_Ninja_Albă_Fără_Glugă_Rotire_4);
                this.wait(0.1);
            }
            if(currentClass == playerClasses[1]) {
                this.setCostume(this.Female_Mage_White_Throw_1);
                this.wait(0.4);
                this.setCostume(this.Female_Mage_White_Throw_2);
                this.wait(0.4);
                this.setCostume(this.Female_Mage_White_Throw_3);
                this.wait(0.4);
            }
            if(currentClass == playerClasses[3]) {
                this.setCostume(this.White_Robot_Player_Shoot_Walk_1);
                this.wait(0.15);
                this.setCostume(this.White_Robot_Player_Shoot_Walk_2);
                this.wait(0.15);
                this.setCostume(this.White_Robot_Player_Shoot_Walk_3);
                this.wait(0.15);
            }
        }
    }
    when stage.signalReceived("performCskill") {
        if(currentClass == playerClasses[1]) {
            c_spellActive = true;
            this.setPosition(this.x * -1, this.y * -1);
            if(currentClass == playerClasses[1]) {
                this.setCostume(this.Female_Mage_White_Glowing_Staff_1);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Glowing_Staff_2);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Glowing_Staff_3);
                this.wait(0.1);
                this.setCostume(this.Female_Mage_White_Glowing_Staff_4);
                this.wait(0.1);
            }
            this.wait(0.05);
            c_spellActive = false;
        }
        if(currentClass == playerClasses[2]) {
            c_spellActive = true;
            playerWeaponDamage += 150;
            playerWeaponKnockback += 60;
            for(let i = 1; i <= 10; i++) {
                this.setCssTint("#00ff19");
                this.size += 5;
                this.wait(0.2);
                this.size -= 5;
                this.resetTint();
                this.wait(0.2);
            }
            playerWeaponDamage = this.setPlayerDamage();
            playerWeaponKnockback = this.setPlayerWeaponKnock();
        }
    }
    when stage.signalReceived("enemySlained") {
        if(getPlayerLevel <= levelCap) {
            currentXP += xpForKill;
        }
    }
    when stage.signalReceived("statsUpdated") {
        this.setPlayerValues();
    }
    when stage.signalReceived("playerSetStateToInvFrames") {
        this.changeStateTo(state_invincibilityFrames);
    }
    when stage.signalReceived("queueInvincibilityFrames") {
        canBeDamaged = false;
        this.wait(InvicibilityFramesDuration);
        canBeDamaged = true;
    }
    when stage.signalReceived("addEndurance") {
        if(statPoint >= 1 && baseEndurance < statCap) {
            baseEndurance += 1;
            statPoint -= 1;
            broadcast("statsUpdated");
            this.wait(0.7);
        }
    }
    when stage.signalReceived("addForce") {
        if(statPoint >= 1 && baseForce < statCap) {
            baseForce += 1;
            statPoint -= 1;
            broadcast("statsUpdated");
            this.wait(0.7);
        }
    }
    when stage.signalReceived("addAgility") {
        if(statPoint >= 1 && baseAgility < statCap) {
            baseAgility += 1;
            statPoint -= 1;
            broadcast("statsUpdated");
            this.wait(0.7);
        }
    }
    when touched {
        if(this.touching(Health)) {
            if(player_health >= totalHealth * 0.3) {
                player_health += totalHealth * 0.3;
            }
            else {
                player_health = totalHealth * 0.3;
            }
            this.wait(1);
            broadcast("hideHealth");
        }
    }
    when stage.signalReceived("startPlayerValues") {
        this.setDefaultMultipliersAndStats();
        this.startingPlayerValues();
        this.setPlayerValues();
        this.updateGlobalValues();
        this.opacity = 100;
        this.show();
        this.rotationStyle = "leftRight";
        if(currentClass == playerClasses[0]) {
            this.size = 10;
            this.setCostume(this.NinjaIdle);
        }
        if(currentClass == playerClasses[1]) {
            this.size = 20;
            this.setCostume(this.Female_Mage_White_Idle);
        }
        if(currentClass == playerClasses[2]) {
            this.size = 32;
            this.setCostume(this.Knight_4_Idle);
        }
        if(currentClass == playerClasses[3]) {
            this.size = 15;
            this.setCostume(this.White_Robot_Player_Idle);
        }
        this.setPosition(0, 0);
        broadcast("startPlayer");
        broadcast("startWaves");
    }
    when stage.signalReceived("startPlayer") {
        while(!gameOver) {
            while(!canBeDamaged) {
                this.opacity = 50;
                this.wait(0.1);
                this.opacity = 100;
                this.wait(0.1);
            }
            if(isKeyPressed("c") && playerMana < c_manaCost) {
                this.say("Not enough mana");
                this.wait(0.5);
            }
            else {
                this.say("");
            }
            if(isKeyPressed("q") && playerMana < q_manaCost) {
                this.say("Not enough mana");
                this.wait(0.5);
            }
            else {
                this.say("");
            }
            if(isKeyPressed("r") && playerMana < r_manaCost) {
                this.say("Not enough mana");
                this.wait(0.5);
            }
            else {
                this.say("");
            }
        }
    }
    when stage.signalReceived("startPlayer") {
        while(getPlayerLevel <= levelCap) {
            if(currentXP >= this.xpGrowth(player_Level + 1)) {
                player_Level += 1;
                broadcast("triggerLevelUp");
                statPoint += 1;
            }
            if(player_Level >= 2) {
                let next_level = this.xpGrowth(player_Level + 1);
                xpForNextLevel = next_level - currentXP;
            }
            else {
                xpForNextLevel = this.xpGrowth(2);
            }
        }
    }
    when stage.signalReceived("startPlayer") {
        this.wait(1);
        while(!gameOver) {
            this.wait(0.4);
            this.updateGlobalValues();
            if(player_health > totalHealth) {
                player_health = totalHealth;
            }
            if(playerMana > totalMana) {
                playerMana = totalMana;
            }
            if(playerMana < 0) {
                playerMana = 0;
            }
            if(totalMana > playerMana && delayOver) {
                playerMana += manaRechargeRate;
                this.wait(1);
            }
        }
    }
    when stage.started {
        this.resetTint();
        this.hide();
    }
    when stage.signalReceived("startPlayer") {
        while(!gameOver) {
            this.wait(0.01);
            if(player_health >= 1) {
                this.bounceOffEdge();
                if(player_currentState != state_hurt) {
                    if(!isKeyPressed("w") && !isKeyPressed("a") && !isKeyPressed("s") && !isKeyPressed("d")) {
                        broadcast("playerSetStateIdle");
                    }
                    if(isKeyPressed("a") || isKeyPressed("w") || isKeyPressed("s") || isKeyPressed("d")) {
                        broadcast("playerSetStateMoving");
                    }
                    if(isKeyPressed("c") && playerMana >= c_manaCost && canUseCspell) {
                        broadcast("playerSetStateCskill");
                        playerMana -= 50;
                        broadcast("queueC_Cooldown");
                        broadcast("queueManaDelay");
                        this.wait(0.4);
                    }
                    if(isKeyPressed("q") && playerMana >= q_manaCost && canUseQspell) {
                        broadcast("playerSetStateQskill");
                        playerMana -= 65;
                        broadcast("queueQ_Cooldown");
                        broadcast("queueManaDelay");
                        this.wait(0.4);
                    }
                    if(isKeyPressed("r") && playerMana >= r_manaCost && canUseRspell) {
                        broadcast("playerSetStateRskill");
                        playerMana -= 100;
                        broadcast("queueManaDelay");
                        this.wait(0.4);
                    }
                }
                if(this.touchingActorOrClone(Enemy) && canBeDamaged) {
                    broadcast("playerSetStateHurt");
                    if(RecoveryRate > 0) {
                        broadcast("hideWeapon");
                        this.wait(RecoveryRate);
                        broadcast("showWeapon");
                    }
                    broadcast("playerSetStateToInvFrames");
                }
            }
            else {
                broadcast("playerSetStateToDefeat");
                this.wait(1);
            }
        }
    }
    when stage.signalReceived("playerSetStateCskill") {
        this.changeStateTo(state_c_spell);
    }
    when stage.signalReceived("playerStateChanged") {
        if(player_currentState == state_idle) {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.NinjaIdle);
            }
            if(currentClass == playerClasses[1]) {
                this.wait(0.2);
                this.setCostume(this.Female_Mage_White_Idle);
            }
            if(currentClass == playerClasses[2]) {
                this.setCostume(this.Knight_4_Idle);
            }
            if(currentClass == playerClasses[3]) {
                this.setCostume(this.White_Robot_Player_Idle);
            }
        }
        if(player_currentState == state_moving && !r_spellActive) {
            if(isKeyPressed("w")) {
                this.y += player_Speed;
            }
            if(isKeyPressed("s")) {
                this.y -= player_Speed;
            }
            if(isKeyPressed("d")) {
                this.x += player_Speed;
                this.heading = 90;
            }
            if(isKeyPressed("a")) {
                this.x -= player_Speed;
                this.heading = -90;
            }
        }
        if(player_currentState == state_hurt) {
            this.wait(0.05);
            if(player_health >= totalHealth * 0.3) {
                player_health -= enemyDamage;
            }
            else {
                player_health -= enemyDamage * damageResistance;
            }
            this.wait(0.05);
        }
        if(player_currentState == state_defeat) {
            this.hide();
            gameOver = true;
            broadcast("hideWeapon");
            this.wait(0.5);
        }
        if(player_currentState == state_invincibilityFrames) {
            broadcast("queueInvincibilityFrames");
            this.wait(0.1);
        }
        if(player_currentState == state_q_spell) {
            broadcast("performQskill");
            this.wait(0.1);
        }
        if(player_currentState == state_c_spell && (currentClass == playerClasses[1] || currentClass == playerClasses[2])) {
            broadcast("performCskill");
            this.wait(0.1);
        }
        if(player_currentState == state_r_spell) {
            broadcast("performRspell");
            this.wait(0.1);
        }
    }
    when stage.signalReceived("performQskill") {
        if(currentClass == playerClasses[1]) {
            q_SpellActive = true;
            this.setCostume(this.Female_Mage_White_Throw_1);
            this.wait(0.1);
            this.setCostume(this.Female_Mage_White_Throw_2);
            this.wait(0.1);
            this.setCostume(this.Female_Mage_White_Throw_3);
            this.wait(0.5);
            q_SpellActive = false;
        }
    }
    when stage.signalReceived("queueManaDelay") {
        delayOver = false;
        this.wait(manaRechargeDelay);
        delayOver = true;
    }
    when stage.signalReceived("queueC_Cooldown") {
        canUseCspell = false;
        this.wait(this.calculateSkillCooldown(c_Cooldown));
        canUseCspell = true;
        broadcast("enableCspellUI");
    }
    when stage.signalReceived("addWisdom") {
        if(statPoint >= 1 && baseWisdom < statCap) {
            baseWisdom += 1;
            statPoint -= 1;
            broadcast("statsUpdated");
            this.wait(0.7);
        }
    }
    when stage.signalReceived("playerSetStateQskill") {
        this.changeStateTo(state_q_spell);
    }
    when stage.signalReceived("queueQ_Cooldown") {
        canUseQspell = false;
        this.wait(q_Cooldown);
        canUseQspell = true;
        broadcast("enableQskillUI");
    }
    when stage.signalReceived("playerStateChanged") {
        if(player_currentState == state_c_spell && (currentClass == playerClasses[0] || currentClass == playerClasses[3])) {
            if(isKeyPressed("w") && isKeyPressed("a")) {
                this.glideSecondsTo(glideTime, this.x - glideDist, this.y + glideDist);
                this.wait(0.1);
            }
            else {
                if(isKeyPressed("w") && isKeyPressed("d")) {
                    this.glideSecondsTo(glideTime, this.x + glideDist, this.y + glideDist);
                    this.wait(0.1);
                }
                else {
                    if(isKeyPressed("s") && isKeyPressed("a")) {
                        this.glideSecondsTo(glideTime, this.x - glideDist, this.y - glideDist);
                        this.wait(0.1);
                    }
                    else {
                        if(isKeyPressed("s") && isKeyPressed("d")) {
                            this.glideSecondsTo(glideTime, this.x + glideDist, this.y - glideDist);
                            this.wait(0.1);
                        }
                        else {
                            if(isKeyPressed("w") && (!isKeyPressed("a") || !isKeyPressed("d"))) {
                                this.glideSecondsTo(glideTime, this.x, this.y + glideDist);
                                this.wait(0.1);
                            }
                            else {
                                if(isKeyPressed("s") && (!isKeyPressed("a") || !isKeyPressed("d"))) {
                                    this.glideSecondsTo(glideTime, this.x, this.y - glideDist);
                                    this.wait(0.1);
                                }
                                else {
                                    if(isKeyPressed("d") && (!isKeyPressed("w") || !isKeyPressed("s"))) {
                                        this.glideSecondsTo(glideTime, this.x + glideDist, this.y);
                                        this.wait(0.1);
                                    }
                                    else {
                                        if(isKeyPressed("a") && (!isKeyPressed("w") || !isKeyPressed("s"))) {
                                            this.glideSecondsTo(glideTime, this.x - glideDist, this.y);
                                            this.wait(0.1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    when stage.signalReceived("playerSetStateRskill") {
        this.changeStateTo(state_r_spell);
    }
    when stage.signalReceived("playerSetStateRskill") {
        canUseRspell = false;
        this.wait(r_Cooldown);
        canUseRspell = true;
        broadcast("enableRspellUI");
    }
    when stage.signalReceived("performRspell") {
        if(currentClass == playerClasses[0]) {
            playerBaseSpeed = 0.9;
            playerBaseRecovery = 14.72;
            playerBaseIFD = -8.96;
            this.setCssTint("#00ffc3");
            player_Speed = this.setPlayerSpeed();
            InvicibilityFramesDuration = this.setPlayerInvFramesDuration();
            RecoveryRate = this.setPlayerRecoveryRate();
            playerWeaponKnockback = 0;
            this.wait(10);
            playerBaseSpeed = -1;
            playerBaseRecovery = 15.62;
            playerBaseIFD = -10.76;
            this.resetTint();
            player_Speed = this.setPlayerSpeed();
            InvicibilityFramesDuration = this.setPlayerInvFramesDuration();
            RecoveryRate = this.setPlayerRecoveryRate();
            playerWeaponKnockback = this.setPlayerWeaponKnock();
        }
        if(currentClass == playerClasses[1]) {
            r_spellActive = true;
            playerWeaponKnockback = 0;
            this.setCostume(this.Female_Mage_White_Summon_Pose_1);
            this.wait(0.4);
            this.setCostume(this.Female_Mage_White_Summon_Pose_1);
            this.wait(0.4);
            this.setCostume(this.Female_Mage_White_Summon_Pose_1);
            this.wait(0.4);
            this.setCostume(this.Female_Mage_White_Summon_Pose_1);
            this.wait(0.4);
            playerWeaponKnockback = this.setPlayerWeaponKnock();
            r_spellActive = false;
        }
    }
    when stage.signalReceived("startPlayer") {
        while(!gameOver) {

            if(0 < statPoint) {
                broadcast("statPointAvailable");
            }
            else {
                broadcast("statPointsSpent");
            }
        }
    }
}
