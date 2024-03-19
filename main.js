stage {
    backdrop Ruine("gallery:Castle/Ruined Castle")
    backdrop Top_Down_Green_Field_Empty("gallery:Nature/Top Down Green Field Empty")
    default backdrop Negru("gallery:General/Black")
    backdrop Creepy_1("gallery:Halloween/Creepy 1")
    let playerX = 0;
    let playerY = 0;
    let getPlayerLevel = 0;
    let getPlayerXpProcent = 0;
    let timer = 0;
    let time = 0;
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
    let q_SpellActive = false;
    let canUseRspell = true;
    let xpForKill = 0;
    let gameOver = false;
    let getPlayerCurrentXP;
    let levelCap = 20;
    let statCap = 20;
    let bellOnCooldown = false;
    let getPlayerEndurance;
    let getPlayerForce;
    let getPlayerWisdom;
    let getPlayerAgility;
    let getEnemyDamage;
    let playerClasses = [ "ninja", "wizard", "warrior", "robot" ];
    let currentClass;
    let getPlayerSpeed;
    let getPlayerIFD;
    let getPlayerResistance;
    let getPlayerRecoveryRate;
    let getSkill_1CD;
    let getSkill_2CD;
    let getSkill_3CD;
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
    
    actor PlayerWeapon {
        costume Sword_Red("gallery:Misc_Universe/Sword Red")
        costume Sword_Yellow("gallery:Misc_Universe/Sword Yellow")
        costume Prehistoric_Weapons_Axe("gallery:Objects/Prehistoric Weapons Axe")
        costume Prehistoric_Weapons_Club("gallery:Objects/Prehistoric Weapons Club")
        costume Fireball_Fly_1("gallery:Effects/Fireball Fly 1")
        costume Fireball_Fly_2("gallery:Effects/Fireball Fly 2")
        costume Fireball_Fly_3("gallery:Effects/Fireball Fly 3")
        costume Fireball_Fly_4("gallery:Effects/Fireball Fly 4")
        let distanceFromPlayer = 0;
        let orbit_angle = 0;
        let orbit_speed = 0;
        let numberOfDaggers = 5;
        let offsetAngle = 360 / numberOfDaggers;
        function playFlameAnimation() {
            this.setCostume(this.Fireball_Fly_1);
            this.wait(0.1);
            this.setCostume(this.Fireball_Fly_2);
            this.wait(0.1);
            this.setCostume(this.Fireball_Fly_3);
            this.wait(0.1);
            this.setCostume(this.Fireball_Fly_4);
            this.wait(0.1);
        }
        when stage.started {
            this.hide();
            this.heading = 90;
            distanceFromPlayer = 35;
            orbit_angle = 60;
            orbit_speed = 10;
        }
        when stage.signalReceived("hideWeapon") {
            this.hide();
        }
        when stage.signalReceived("showWeapon") {
            this.show();
        }
        when stage.signalReceived("startPlayer") {
            if(currentClass == playerClasses[2]) {
                this.setCostume(this.Prehistoric_Weapons_Axe);
                distanceFromPlayer = 35;
                this.size = 50;
                this.show();
                while(currentClass == playerClasses[2]) {
                    this.rotationStyle = "leftRight";
                    let xOffset = 35;
                    let yOffset = 12;
                    let speed = 1.5;
                    let minY = playerY - 10;
                    let maxY = playerY + yOffset;
                    let movingUp = false;
                    while(currentClass == playerClasses[2]) {
                        if(getPlayerDir == 90) {
                            this.heading = 90;
                            this.x = playerX + xOffset;
                        }
                        else {
                            this.heading = -90;
                            this.x = playerX - xOffset;
                        }
                        if(movingUp) {
                            this.y += speed;
                            if(this.y >= maxY) {
                                movingUp = false;
                            }
                        }
                        else {
                            this.y -= speed;
                            if(this.y <= minY) {
                                movingUp = true;
                            }
                        }
                        this.wait(0.05);
                        minY = playerY - yOffset;
                        maxY = playerY+yOffset;
                    }
                }
            }
            let oscTime = 0;
            let oscSpeed = 15;
            let from_a = -40;
            let to_b = 40;
            let aboveHeadHeight = 20;
            let besidesPlayer = 35;
            while(currentClass == playerClasses[1]) {
                let oscilationRange = (to_b - from_a) / 2;
                let oscilationOffset = from_a + oscilationRange;
                let oscillatingX = playerX + oscilationOffset + Math.sin(oscTime) * oscilationRange + oscilationOffset;
                if(Math.cos(oscTime) > 0) {
                    this.heading = 90;
                }
                else {
                    this.heading = -90;
                }
                this.x = oscillatingX;
                this.y = playerY + aboveHeadHeight;
                oscTime += oscSpeed;
                this.playFlameAnimation();
                if(oscTime > 2 * Math.PI) {
                    oscTime -= 2 * Math.PI;
                }
                this.wait(0.01);
            }
        }
        when stage.signalReceived("startPlayer") {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.Sword_Red);
                distanceFromPlayer = 35;
                this.size = 10;
                this.show();
            }
            if(currentClass == playerClasses[1]) {
                this.setCostume(this.Fireball_Fly_1);
                this.size = 40;
                this.show();
            }
            while(currentClass == playerClasses[0]) {
                this.x = playerX + distanceFromPlayer * Math.cos(orbit_angle);
                this.y = playerY + distanceFromPlayer * Math.sin(orbit_angle);
                orbit_angle += orbit_speed;
                if(orbit_angle > 360) {
                    orbit_angle = orbit_angle - 360;
                }
                if(orbit_angle < 0) {
                    orbit_angle = orbit_angle + 360;
                }
                this.wait(0.15);
            }
        }
        when cloned {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.Sword_Yellow);
                this.opacity = 45;
                let cloneOffsetAngle = this.cloneId * offsetAngle;
                let cloneOrbitAngle = orbit_angle + cloneOffsetAngle;
                for(let is = 1; is <= 55; is++) {
                    this.x = playerX + distanceFromPlayer * Math.cos(cloneOrbitAngle);
                    this.y = playerY + distanceFromPlayer * Math.sin(cloneOrbitAngle);
                    cloneOrbitAngle += orbit_speed;
                    if(cloneOrbitAngle > 360) {
                        cloneOrbitAngle = cloneOrbitAngle - 360;
                    }
                    if(orbit_angle < 0) {
                        cloneOrbitAngle = cloneOrbitAngle + 360;
                    }
                    this.wait(0.05);
                }
                this.deleteClone();
            }
        }
        when cloned {
            if(currentClass == playerClasses[2]) {
                this.setCostume(this.Prehistoric_Weapons_Club);
                this.rotationStyle = "leftRight";
                let xOffset = 35;
                let yOffset = 25;
                let speed = 2.5;
                let minY = playerY - yOffset;
                let maxY = playerY + yOffset;
                let movingUp = false;
                if(getPlayerDir == 90) {
                    this.heading = -90;
                    this.x = playerX - xOffset;
                }
                else {
                    this.heading = 90;
                    this.x = playerX + xOffset;
                }
                this.y = playerY + yOffset;
                while(currentClass == playerClasses[2] && q_SpellActive) {
                    if(getPlayerDir == 90) {
                        this.x = playerX - xOffset;
                    }
                    else {
                        this.x = playerX + xOffset;
                    }
                    if(movingUp) {
                        this.y += speed;
                        if(this.y >= maxY) {
                            movingUp = false;
                        }
                    }
                    else {
                        this.y -= speed;
                        if(this.y <= minY) {
                            movingUp = true;
                        }
                    }
                    this.wait(0.05);
                }
                this.deleteClone(this);
            }
        }
        when stage.signalReceived("performQskill") {
            if(currentClass == playerClasses[0]) {
                q_SpellActive = true;
                this.wait(0.2);
                orbit_speed = 25;
                for(let i = 1; i <= 4; i++) {
                    createClone(this);
                }
                this.wait(4);
                orbit_speed = 10;
                q_SpellActive = false;
            }
            if(currentClass == playerClasses[2]) {
                q_SpellActive = true;
                createClone(this);
                this.wait(10);
                q_SpellActive = false;
            }
        }
    }
    
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
    
    actor PlayerXpBar {
        costume Bar_Empty("gallery:Effects_Universe/Bar Empty")
        costume Bar_1("gallery:Effects_Universe/Bar 1")
        costume Bar_2("gallery:Effects_Universe/Bar 2")
        costume Bar_3("gallery:Effects_Universe/Bar 3")
        costume Bar_4("gallery:Effects_Universe/Bar 4")
        costume Bar_5("gallery:Effects_Universe/Bar 5")
        costume Bar_6("gallery:Effects_Universe/Bar 6")
        costume Bar_7("gallery:Effects_Universe/Bar 7")
        costume Bar_8("gallery:Effects_Universe/Bar 8")
        costume Bar_9("gallery:Effects_Universe/Bar 9")
        costume Bar_Complete("gallery:Effects_Universe/Bar Complete")
        function updateXpBar(XpProcent) {
            if(10 >= XpProcent) {
                this.setCostume(this.Bar_Empty);
            }
            if(XpProcent >= 11 && XpProcent <= 20) {
                this.setCostume(this.Bar_1);
            }
            if(XpProcent >= 21 && XpProcent <= 30) {
                this.setCostume(this.Bar_2);
            }
            if(XpProcent >= 31 && XpProcent <= 40) {
                this.setCostume(this.Bar_3);
            }
            if(XpProcent >= 41 && XpProcent <= 50) {
                this.setCostume(this.Bar_4);
            }
            if(XpProcent >= 51 && XpProcent <= 60) {
                this.setCostume(this.Bar_5);
            }
            if(XpProcent >= 61 && XpProcent <= 70) {
                this.setCostume(this.Bar_6);
            }
            if(XpProcent >= 71 && XpProcent <= 80) {
                this.setCostume(this.Bar_7);
            }
            if(XpProcent >= 81 && XpProcent <= 90) {
                this.setCostume(this.Bar_8);
            }
            if(XpProcent >= 91 && XpProcent <= 94) {
                this.setCostume(this.Bar_9);
            }
            if(XpProcent >= 95) {
                this.setCostume(this.Bar_Complete);
            }
        }
        when pointerOver {
            this.say(concat(getPlayerXpProcent, "%"));
            this.wait(1);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("triggerLevelUp") {
            this.size += 4;
            this.turnRight(2);
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 4;
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 4;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 4;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 4;
            this.wait(0.02);
            this.size -= 4;
            this.turnLeft(2);
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(0, -160);
            while(getPlayerLevel <= levelCap) {
                this.updateXpBar(getPlayerXpProcent);
            }
            this.setCssTint("#fff700");
            this.setCostume(this.Bar_Complete);
        }
        when stage.started {
            this.hide();
            this.resetTint();
        }
    }
    
    actor Proxima_Numbers_Framed {
        costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
        costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
        costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
        costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
        costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
        costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
        costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
        costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
        costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
        costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
        costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
        costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
        costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
        costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
        costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
        costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
        costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
        costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
        costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
        costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("triggerLevelUp") {
            this.size += 2;
            this.turnRight(2);
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 2;
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 2;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 2;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 2;
            this.wait(0.02);
            this.size -= 2;
            this.turnLeft(2);
        }
        when pointerOver {
            this.say(concat(Math.round(getPlayerCurrentXP), " XP"));
            this.size += 10;
            this.setCssTint("#fff700");
            this.stampCostume();
            if(getPlayerLevel <= levelCap) {
                this.resetTint();
            }
            this.size -= 10;
        }
        when pointerOut {
            this.say("");
            clearPenTrails();
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(-75, -160);
            this.resetTint();
            this.size = 35;
            while(getPlayerLevel <= levelCap) {
                this.setCostume(getPlayerLevel);
            }
            this.setCssTint("#fff700");
        }
    }
    
    actor EnduranceStatButton {
        costume Modern_Shield_Purple("gallery:Objects/Modern Shield Purple")
        when stage.started {
            this.hide();
        }
        when pointerOver {
            if(this.opacity == 100) {
                this.say("'1:'+Endurance");
                this.wait(1.5);
                this.say("");
                this.wait(1.5);
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("statPointAvailable") {
            this.opacity = 100;
        }
        when stage.signalReceived("statPointsSpent") {
            this.opacity = 45;
        }
        when clicked {
            if(this.opacity == 100) {
                broadcast("addEndurance");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(290, -72);
            this.size = 12;
        }
        when stage.keyPressed("1") {
            if(this.opacity == 100) {
                broadcast("addEndurance");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("statPointAvailable") {
            if(getPlayerEndurance != statCap) {
                this.opacity = 100;
            }
            else {
                this.opacity = 45;
            }
        }
    }
    
    actor AgilityStatButton {
        costume Feather_White("gallery:Misc_Universe/Feather White")
        costume Feather_Black("gallery:Misc_Universe/Feather Black")
        costume Feather_Yellow("gallery:Misc_Universe/Feather Yellow")
        costume Feather_Red("gallery:Misc_Universe/Feather Red")
        when stage.started {
            this.hide();
        }
        when pointerOver {
            if(this.opacity == 100) {
                this.say("'4:'+Agility");
                this.wait(1.5);
                this.say("");
                this.wait(1.5);
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("statPointsSpent") {
            this.opacity = 45;
        }
        when stage.signalReceived("statPointAvailable") {
            this.opacity = 100;
        }
        when clicked {
            if(this.opacity == 100) {
                broadcast("addAgility");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.setPosition(290, -160);
            this.goToFront();
            this.size = 12;
        }
        when stage.keyPressed("4") {
            if(this.opacity == 100) {
                broadcast("addAgility");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("statPointAvailable") {
            if(getPlayerAgility != statCap) {
                this.opacity = 100;
            }
            else {
                this.opacity = 45;
            }
        }
    }
    
    actor ForceStatButton {
        costume Hammer_Idle("gallery:Misc_Universe/Hammer Idle")
        when stage.started {
            this.hide();
        }
        when pointerOver {
            if(this.opacity == 100) {
                this.say("'2:'+Force");
                this.wait(1.5);
                this.say("");
                this.wait(1.5);
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("statPointsSpent") {
            this.opacity = 45;
        }
        when stage.signalReceived("statPointAvailable") {
            this.opacity = 100;
        }
        when clicked {
            if(this.opacity == 100) {
                broadcast("addForce");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(290, -105);
            this.size = 12;
        }
        when stage.keyPressed("2") {
            if(this.opacity == 100) {
                broadcast("addForce");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("statPointAvailable") {
            if(getPlayerForce != statCap) {
                this.opacity = 100;
            }
            else {
                this.opacity = 45;
            }
        }
    }
    
    actor WisdomStatButton {
        costume Gemstone_Octagon_Blue("gallery:Misc_Universe/Gemstone Octagon Blue")
        costume Gemstone_Octagon_Green("gallery:Misc_Universe/Gemstone Octagon Green")
        costume Gemstone_Octagon_Orange("gallery:Misc_Universe/Gemstone Octagon Orange")
        costume Gemstone_Octagon_Purple("gallery:Misc_Universe/Gemstone Octagon Purple")
        costume Gemstone_Octagon_Red("gallery:Misc_Universe/Gemstone Octagon Red")
        costume Gemstone_Octagon_Turquoise("gallery:Misc_Universe/Gemstone Octagon Turquoise")
        costume Gemstone_Octagon_White("gallery:Misc_Universe/Gemstone Octagon White")
        costume Gemstone_Octagon_Yellow("gallery:Misc_Universe/Gemstone Octagon Yellow")
        costume Gemstone_Diamond_Blue("gallery:Misc_Universe/Gemstone Diamond Blue")
        costume Gemstone_Diamond_Green("gallery:Misc_Universe/Gemstone Diamond Green")
        costume Gemstone_Diamond_Orange("gallery:Misc_Universe/Gemstone Diamond Orange")
        costume Gemstone_Diamond_Pink("gallery:Misc_Universe/Gemstone Diamond Pink")
        costume Gemstone_Diamond_Red("gallery:Misc_Universe/Gemstone Diamond Red")
        costume Gemstone_Diamond_Turquoise("gallery:Misc_Universe/Gemstone Diamond Turquoise")
        costume Gemstone_Diamond_White("gallery:Misc_Universe/Gemstone Diamond White")
        costume Gemstone_Diamond_Yellow("gallery:Misc_Universe/Gemstone Diamond Yellow")
        when stage.started {
            this.hide();
        }
        when pointerOver {
            if(this.opacity == 100) {
                this.say("'3:'+Wisdom");
                this.wait(1.5);
                this.say("");
                this.wait(1.5);
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("statPointsSpent") {
            this.opacity = 45;
        }
        when stage.signalReceived("statPointAvailable") {
            if(getPlayerWisdom != statCap) {
                this.opacity = 100;
            }
            else {
                this.opacity = 45;
            }
        }
        when clicked {
            if(this.opacity == 100) {
                broadcast("addWisdom");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(290, -134);
            this.size = 12;
        }
        when stage.keyPressed("3") {
            if(this.opacity == 100) {
                broadcast("addWisdom");
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size -= 1;
                    this.wait(0.05);
                }
                for(let variable1 = 1; variable1 <= 3; variable1++) {
                    this.size += 1;
                    this.wait(0.05);
                }
                this.wait(1.2);
            }
        }
    }
    
    actor Sageata {
        costume Varf_de_Sageata_Negru("gallery:Shapes/Arrowhead Black")
        costume Varf_de_Sageata_Alb("gallery:Shapes/Arrowhead White")
        when stage.started {
            this.goToFront();
            this.heading = 180;
            this.setPosition(290, 0);
            this.opacity = 0;
        }
        when stage.signalReceived("statPointAvailable") {
            this.opacity = 45;
            while(0 < this.opacity) {
                this.glideSecondsTo(1, 290, -5);
                this.wait(0.1);
                this.glideSecondsTo(1, 290, 20);
                this.wait(0.1);
            }
        }
        when stage.signalReceived("statPointsSpent") {
            this.opacity = 0;
            this.say("");
        }
        when pointerOver {
            if(0 < this.opacity) {
                this.say("Spend Point.");
            }
        }
        when pointerOut {
            if(0 < this.opacity) {
                this.say("");
            }
        }
    }
    
    actor PlayerHealthBar {
        costume Bar_Empty("gallery:Effects_Universe/Bar Empty")
        costume Bar_1("gallery:Effects_Universe/Bar 1")
        costume Bar_2("gallery:Effects_Universe/Bar 2")
        costume Bar_3("gallery:Effects_Universe/Bar 3")
        costume Bar_4("gallery:Effects_Universe/Bar 4")
        costume Bar_5("gallery:Effects_Universe/Bar 5")
        costume Bar_6("gallery:Effects_Universe/Bar 6")
        costume Bar_7("gallery:Effects_Universe/Bar 7")
        costume Bar_8("gallery:Effects_Universe/Bar 8")
        costume Bar_9("gallery:Effects_Universe/Bar 9")
        costume Bar_Complete("gallery:Effects_Universe/Bar Complete")
        function updateHeathBar(totalhealth, currenthealth) {
            if(currenthealth == 0) {
                this.setCostume(this.Bar_Empty);
            }
            if(totalhealth - totalhealth * 0.9 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.8) {
                this.setCostume(this.Bar_1);
            }
            if(totalhealth - totalhealth * 0.8 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.7) {
                this.setCostume(this.Bar_2);
            }
            if(totalhealth - totalhealth * 0.7 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.6) {
                this.setCostume(this.Bar_3);
            }
            if(totalhealth - totalhealth * 0.6 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.5) {
                this.setCostume(this.Bar_4);
            }
            if(totalhealth - totalhealth * 0.5 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.4) {
                this.setCostume(this.Bar_5);
            }
            if(totalhealth - totalhealth * 0.4 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.3) {
                this.setCostume(this.Bar_6);
            }
            if(totalhealth - totalhealth * 0.3 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.2) {
                this.setCostume(this.Bar_7);
            }
            if(totalhealth - totalhealth * 0.2 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.1) {
                this.setCostume(this.Bar_8);
            }
            if(totalhealth - totalhealth * 0.1 <= currenthealth && currenthealth < totalhealth) {
                this.setCostume(this.Bar_9);
            }
            if(totalhealth == currenthealth && totalhealth != 0) {
                this.setCostume(this.Bar_Complete);
            }
        }
        when stage.started {
            this.hide();
        }
        when pointerOver {
            this.say(concat(Math.round(getPlayerCurrentHealth), concat("/", getPlayerTotalHealth)));
            this.wait(0.5);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(-250, -160);
            this.setCssTint("#ff0000");
            while(true) {
                this.updateHeathBar(getPlayerTotalHealth, getPlayerCurrentHealth);
            }
        }
    }
    
    actor PlayerManaBar_1 {
        costume Bar_Empty("gallery:Effects_Universe/Bar Empty")
        costume Bar_1("gallery:Effects_Universe/Bar 1")
        costume Bar_2("gallery:Effects_Universe/Bar 2")
        costume Bar_3("gallery:Effects_Universe/Bar 3")
        costume Bar_4("gallery:Effects_Universe/Bar 4")
        costume Bar_5("gallery:Effects_Universe/Bar 5")
        costume Bar_6("gallery:Effects_Universe/Bar 6")
        costume Bar_7("gallery:Effects_Universe/Bar 7")
        costume Bar_8("gallery:Effects_Universe/Bar 8")
        costume Bar_9("gallery:Effects_Universe/Bar 9")
        costume Bar_Complete("gallery:Effects_Universe/Bar Complete")
        function updateManaBar(currentmana, totalmana) {
            if(currentmana == 0) {
                this.setCostume(this.Bar_Empty);
            }
            if(totalmana - totalmana * 0.9 <= currentmana && currentmana < totalmana - totalmana * 0.8) {
                this.setCostume(this.Bar_1);
            }
            if(totalmana - totalmana * 0.8 <= currentmana && currentmana < totalmana - totalmana * 0.7) {
                this.setCostume(this.Bar_2);
            }
            if(totalmana - totalmana * 0.7 <= currentmana && currentmana < totalmana - totalmana * 0.6) {
                this.setCostume(this.Bar_3);
            }
            if(totalmana - totalmana * 0.6 <= currentmana && currentmana < totalmana - totalmana * 0.5) {
                this.setCostume(this.Bar_4);
            }
            if(totalmana - totalmana * 0.5 <= currentmana && currentmana < totalmana - totalmana * 0.4) {
                this.setCostume(this.Bar_5);
            }
            if(totalmana - totalmana * 0.4 <= currentmana && currentmana < totalmana - totalmana * 0.3) {
                this.setCostume(this.Bar_6);
            }
            if(totalmana - totalmana * 0.3 <= currentmana && currentmana < totalmana - totalmana * 0.2) {
                this.setCostume(this.Bar_7);
            }
            if(totalmana - totalmana * 0.2 <= currentmana && currentmana < totalmana - totalmana * 0.1) {
                this.setCostume(this.Bar_8);
            }
            if(totalmana - totalmana * 0.1 <= currentmana && currentmana < totalmana) {
                this.setCostume(this.Bar_9);
            }
            if(totalmana == currentmana && totalmana != 0) {
                this.setCostume(this.Bar_Complete);
            }
        }
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(-250, -125);
            this.setCssTint("#002fff");
            this.opacity = 100;
            while(true) {
                this.updateManaBar(getPlayerCurrentMana, getPlayerTotalMana);
            }
        }
        when pointerOver {
            this.say(concat(Math.round(getPlayerCurrentMana), concat("/", getPlayerTotalMana)));
            this.wait(0.5);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
    }
    
    actor LevelUpEffect {
        costume Shield_Effect_Intact("gallery:Effects_Universe/Shield Effect Intact")
        costume Shield_Effect_Damaged_1("gallery:Effects_Universe/Shield Effect Damaged 1")
        costume Shield_Effect_Damaged_2("gallery:Effects_Universe/Shield Effect Damaged 2")
        costume Shield_Effect_Damaged_3("gallery:Effects_Universe/Shield Effect Damaged 3")
        costume Shield_Effect_Damaged_4("gallery:Effects_Universe/Shield Effect Damaged 4")
        costume Shield_Effect_Damaged_5("gallery:Effects_Universe/Shield Effect Damaged 5")
        costume Shield_Effect_Damaged_6("gallery:Effects_Universe/Shield Effect Damaged 6")
        costume Shield_Effect_Damaged_7("gallery:Effects_Universe/Shield Effect Damaged 7")
        costume Shield_Effect_Damaged_8("gallery:Effects_Universe/Shield Effect Damaged 8")
        costume Shield_Effect_Damaged_9("gallery:Effects_Universe/Shield Effect Damaged 9")
        when stage.started {
            this.hide();
            this.size = 20;
            this.goBefore(Player);
            this.setCssTint("#2bff00");
        }
        when stage.signalReceived("triggerLevelUp") {
            this.setCostume(this.Shield_Effect_Intact);
            this.show();
            for(let variable1 = 1; variable1 <= 9; variable1++) {
                this.goTo(Player);
                this.wait(0.03);
                this.nextCostume();
                this.size -= 0.6;
            }
            this.size = 20;
            this.hide();
        }
    }
    
    actor Health {
        costume Health_Idle("gallery:Misc_Universe/Health Idle")
        let cooldown = 0;
        when stage.signalReceived("startPlayer") {
            while(!gameOver) {
                this.hide();
                this.wait(Math.randomBetween(10, 75));
                this.show();
                this.setPosition(Math.randomBetween(-300, 300), Math.randomBetween(-160, 160));
                cooldown = Math.randomBetween(10, 20);
                while(!(this.touching(Player) || cooldown <= 0));
            }
        }
        when stage.signalReceived("startPlayer") {
            while(!gameOver) {
                if(cooldown != 0) {
                    this.wait(1);
                    cooldown -= 1;
                }
            }
        }
        when stage.signalReceived("startPlayer") {
            this.goAfter(Enemy);
            this.size = 12;
            while(!gameOver) {
                this.size += 2.5;
                this.wait(0.2);
                this.size -= 2.5;
                this.wait(0.2);
                this.size += 2.5;
                this.wait(0.2);
                this.size -= 2.5;
                this.wait(0.2);
                this.wait(2);
            }
        }
        when stage.started {
            this.hide();
        }
    }
    
    actor C_SpellActor {
        costume dashSpell("dashSpell")
        costume empty("empty")
        let shake = false;
        when stage.started {
            this.setCostume(this.empty);
            this.hide();
            this.size = 25;
            this.opacity = 100;
            this.setPosition(100, -150);
            this.heading = 90;
        }
        when stage.signalReceived("playerSetStateCskill") {
            shake = true;
            this.opacity = 50;
            while(shake) {
                this.turnRight(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnRight(5);
            }
        }
        when stage.signalReceived("enableCspellUI") {
            shake = false;
            this.opacity = 100;
            this.size += 10;
            this.wait(0.1);
            this.size -= 5;
            this.wait(0.2);
            this.size -= 5;
            this.wait(0.2);
            this.turnRight(3);
            this.wait(0.1);
            this.turnLeft(3);
            this.wait(0.1);
        }
        when pointerOver {
            if(currentClass == playerClasses[0]) {
                this.say(concat("'C':Bomb Dash.", concat(" Mana:", concat(getPlayerCmanaCost, concat(" CD: ", Math.round(getSkill_1CD))))));
            }
            if(currentClass == playerClasses[1]) {
                this.say(concat("'C':Teleportation.", concat(" Mana:", concat(getPlayerCmanaCost, concat(" CD: ", Math.round(getSkill_1CD))))));
            }
            if(currentClass == playerClasses[2]) {
                this.say(concat("'C':Spinach.", concat(" Mana:", concat(getPlayerCmanaCost, concat(" CD: ", Math.round(getSkill_1CD))))));
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("startPlayer") {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.dashSpell);
            }
            this.show();
        }
    }
    
    actor Bomb_Sphere {
        costume Bomb_Sphere_Black_Full_Wick("gallery:Misc_Universe/Bomb Sphere Black Full Wick")
        costume Bomb_Sphere_Black_Half_Wick("gallery:Misc_Universe/Bomb Sphere Black Half Wick")
        costume Bomb_Sphere_Black_Idle("gallery:Misc_Universe/Bomb Sphere Black Idle")
        costume Toxic_Cloud_Green_Thickening_5("gallery:Effects/Toxic Cloud Green Thickening 5")
        costume Toxic_Cloud_Green_Thickening_4("gallery:Effects/Toxic Cloud Green Thickening 4")
        costume Toxic_Cloud_Green_Thickening_3("gallery:Effects/Toxic Cloud Green Thickening 3")
        costume Toxic_Cloud_Green_Thickening_2("gallery:Effects/Toxic Cloud Green Thickening 2")
        costume Toxic_Cloud_Green_Thickening_1("gallery:Effects/Toxic Cloud Green Thickening 1")
        when stage.started {
            this.hide();
        }
        when stage.started {
            while(true) {
                if(this.costumeId <= 3) {
                    this.size = 6;
                    this.resetTint();
                    this.opacity = 100;
                }
                if(4 <= this.costumeId) {
                    this.size = 25;
                    this.setCssTint("#ffffff");
                    this.opacity = 25;
                }
            }
        }
        when stage.signalReceived("playerSetStateCskill") {
            if(currentClass == playerClasses[0]) {
                this.show();
                this.goTo(Player);
                this.setCostume(this.Bomb_Sphere_Black_Full_Wick);
                while(this.costumeId < 8) {
                    if(this.costumeId <= 3) {
                        this.nextCostume();
                        this.wait(0.3);
                    }
                    if(4 <= this.costumeId) {
                        this.nextCostume();
                        this.wait(0.05);
                    }
                }
                this.hide();
            }
        }
    }
    
    actor Q_SpellActor_1 {
        costume fiveStarDiscipl("fiveStarDiscipl")
        costume empty("empty")
        let shake = true;
        when stage.started {
            this.hide();
            this.setCostume(this.empty);
            this.size = 25;
            this.opacity = 100;
            this.setPosition(150, -150);
            this.heading = 90;
        }
        when pointerOver {
            if(currentClass == playerClasses[0]) {
                this.say(concat("'Q':Five Star Ninja", concat(" Mana:", concat(getPlayerQmanaCost, concat(" CD: ", Math.round(getSkill_2CD))))));
            }
            if(currentClass == playerClasses[1]) {
                this.say(concat("'Q':Magic zap.", concat(" Mana:", concat(getPlayerQmanaCost, concat(" CD: ", Math.round(getSkill_2CD))))));
            }
            if(currentClass == playerClasses[2]) {
                this.say(concat("'Q':Akimbodat", concat(" Mana:", concat(getPlayerQmanaCost, concat(" CD: ", Math.round(getSkill_2CD))))));
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("enableQskillUI") {
            shake = false;
            this.opacity = 100;
            this.size += 10;
            this.wait(0.1);
            this.size -= 5;
            this.wait(0.2);
            this.size -= 5;
            this.wait(0.2);
            this.turnRight(3);
            this.wait(0.1);
            this.turnLeft(3);
            this.wait(0.1);
        }
        when stage.signalReceived("playerSetStateQskill") {
            shake = true;
            this.opacity = 50;
            while(shake) {
                this.turnRight(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnRight(5);
            }
        }
        when stage.signalReceived("startPlayer") {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.fiveStarDiscipl);
            }
            this.show();
        }
    }
    
    actor R_SpellActor {
        default costume userNinjaDiscip("ninjaDiscip")
        costume userEmpty("empty")
        let shake = true;
        when stage.started {
            this.hide();
            this.setCostume(this.empty);
            this.size = 25;
            this.opacity = 100;
            this.setPosition(200, -150);
            this.heading = 90;
        }
        when pointerOver {
            if(currentClass == playerClasses[0]) {
                this.say(concat("'R':Ninja Discipline.", concat(" Mana:", concat(getPlayerRmanaCost, concat(" CD: ", Math.round(getSkill_3CD))))));
            }
            if(currentClass == playerClasses[1]) {
                this.say(concat("'R':Summon:G.O.L.E.M.", concat(" Mana:", concat(getPlayerRmanaCost, concat(" CD: ", Math.round(getSkill_3CD))))));
            }
            if(currentClass == playerClasses[2]) {
                this.say(concat("'R':HAAAAMMMER.", concat(" Mana:", concat(getPlayerRmanaCost, concat(" CD: ", Math.round(getSkill_3CD))))));
            }
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("enableRspellUI") {
            shake = false;
            this.opacity = 100;
            this.size += 10;
            this.wait(0.1);
            this.size -= 5;
            this.wait(0.2);
            this.size -= 5;
            this.wait(0.2);
            this.turnRight(3);
            this.wait(0.1);
            this.turnLeft(3);
            this.wait(0.1);
        }
        when stage.signalReceived("playerSetStateRskill") {
            shake = true;
            this.opacity = 50;
            while(shake) {
                this.turnRight(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnLeft(5);
                this.wait(0.1);
                this.turnRight(5);
            }
        }
        when stage.signalReceived("startPlayer") {
            if(currentClass == playerClasses[0]) {
                this.setCostume(this.ninjaDiscip);
            }
            this.show();
        }
    }
    
    actor Geisha {
        costume Geisha_Inactiva("gallery:Figures/Geisha Idle")
        costume Geisha_Profil_1("gallery:Figures/Geisha Profile 1")
        costume Geisha_Profil_2("gallery:Figures/Geisha Profile 2")
        when stage.signalReceived("startPlayerValues") {
            this.say("");
            this.hide();
            this.setPosition(0, -60);
        }
        when stage.signalReceived("playerSetStateToDefeat") {
            this.show();
            this.say(concat("My, My, you survived only ", time));
            while(gameOver) {
                this.wait(0.5);
                this.y += 20;
                this.wait(0.5);
                this.y -= 20;
            }
        }
        when stage.sceneChanged(Ruine) {
            this.show();
            this.setPosition(250, -150);
            this.say("Welcome, traveller. Pick your class!");
            this.wait(0.5);
            this.say("");
        }
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("stagesComplete") {
            this.show();
            gameOver = true;
            this.say(concat("What a hero! You saved those lands in ", concat(time, concat(" Password is ", warriorPassword))));
            while(gameOver) {
                this.wait(0.5);
                this.y += 20;
                this.wait(0.5);
                this.y -= 20;
            }
        }
        when stage.sceneChanged(Top_Down_Green_Field_Empty) {
            this.say("");
        }
    }
    
    actor Game_Over {
        costume Game_Over_1("gallery:Text/Game Over 1")
        costume Game_Over_2("gallery:Text/Game Over 2")
        when stage.started {
            this.hide();
            this.setPosition(0, 250);
            this.heading = 90;
        }
        when stage.signalReceived("playerSetStateToDefeat") {
            this.show();
            this.glideSecondsTo(0.5, 0, 150);
            while(gameOver) {
                this.turnRight(15);
                this.wait(0.2);
                this.turnLeft(15);
                this.wait(0.2);
                this.turnLeft(15);
                this.wait(0.2);
                this.turnRight(15);
                this.wait(0.2);
            }
        }
    }
    
    actor EnduranceNumber_ui {
        costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
        costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
        costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
        costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
        costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
        costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
        costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
        costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
        costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
        costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
        costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
        costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
        costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
        costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
        costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
        costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
        costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
        costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
        costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
        costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
        when stage.started {
            this.size = 25;
            this.hide();
        }
        when stage.signalReceived("startPlayerValues") {
            this.setPosition(265, -72);
            this.show();
            this.resetTint();
            while(getPlayerEndurance <= statCap) {
                this.setCostume(getPlayerEndurance);
                if(getPlayerEndurance == statCap) {
                    this.setCssTint("#fff700");
                }
            }
        }
        when pointerOver {
            this.say(concat("Health:", concat(getPlayerTotalHealth, concat(" Resistance:", concat(getPlayerResistance, "%")))));
            this.wait(0.5);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
    }
    
    actor ForceNumber_ui_1 {
        costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
        costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
        costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
        costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
        costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
        costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
        costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
        costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
        costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
        costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
        costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
        costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
        costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
        costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
        costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
        costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
        costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
        costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
        costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
        costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
        when stage.started {
            this.size = 25;
            this.hide();
        }
        when stage.signalReceived("startPlayerValues") {
            this.setPosition(265, -103);
            this.show();
            this.resetTint();
            while(getPlayerForce <= statCap) {
                this.setCostume(getPlayerForce);
                if(getPlayerForce == statCap) {
                    this.setCssTint("#fff700");
                }
            }
        }
        when pointerOver {
            this.say(concat("Damage: ", concat(playerWeaponDamage, concat(" Knockback: ", Math.round(playerWeaponKnockback)))));
            this.wait(0.5);
            this.say("");
        }
    }
    
    actor WisdomNumber_ui_1 {
        costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
        costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
        costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
        costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
        costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
        costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
        costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
        costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
        costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
        costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
        costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
        costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
        costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
        costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
        costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
        costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
        costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
        costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
        costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
        costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
        when stage.started {
            this.size = 25;
            this.hide();
        }
        when stage.signalReceived("startPlayerValues") {
            this.setPosition(265, -134);
            this.show();
            this.resetTint();
            while(getPlayerWisdom <= statCap) {
                this.setCostume(getPlayerWisdom);
                if(getPlayerWisdom == statCap) {
                    this.setCssTint("#fff700");
                }
            }
        }
        when pointerOver {
            this.say(concat("Mana:", getPlayerTotalMana));
            this.wait(0.5);
            this.say("");
        }
    }
    
    actor AgilityNumber_ui_1 {
        costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
        costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
        costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
        costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
        costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
        costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
        costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
        costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
        costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
        costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
        costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
        costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
        costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
        costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
        costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
        costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
        costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
        costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
        costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
        costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
        when stage.started {
            this.size = 25;
            this.hide();
        }
        when stage.signalReceived("startPlayerValues") {
            this.setPosition(265, -165);
            this.show();
            this.resetTint();
            while(getPlayerAgility <= statCap) {
                this.setCostume(getPlayerAgility);
                if(getPlayerAgility == statCap) {
                    this.setCssTint("#fff700");
                }
            }
        }
        when pointerOver {
            this.say(concat("Speed:", concat(Math.round(getPlayerSpeed), concat(" iFrames:", concat(Math.round(getPlayerIFD), concat(" Recovery:", Math.round(getPlayerRecoveryRate)))))));
            this.wait(0.5);
            this.say("");
        }
    }
    
    actor ClassSelector {
        costume Ninja_Cat_White_Without_Hood_Idle("gallery:Animals/Ninja Cat White Without Hood Idle")
        costume White_Robot_Player_Idle("gallery:Aliens_Universe/White Robot Player Idle")
        costume Female_Mage_White_Idle_Empty_Hands("gallery:Figures/Female Mage White Idle Empty Hands")
        costume Knight_4_Idle("gallery:Castle/Knight 4 Idle")
        when pointerOver {
            if(this.cloneId == 1) {
                this.say("Ninja. Nimble and Agile");
                this.size += 2;
            }
            if(this.cloneId == 2) {
                this.say("Wizard. Scholar of casting Spells");
                this.size += 2;
            }
            if(this.cloneId == 3) {
                this.say("Warrior. Never runs from a fight.");
            }
            if(this.cloneId == 4) {
                this.say("Robot. Hexadecimal AI");
                this.size += 2;
            }
        }
        when cloned {
            this.show();
        }
        when pointerOut {
            this.say("");
            this.size -= 2;
        }
        when clicked {
            if(this.cloneId == 1) {
                currentClass = playerClasses[0];
                broadcast("startPlayerValues");
                deleteAllClonesOf(ClassSelector);
            }
            if(this.cloneId == 2) {
                currentClass = playerClasses[1];
                broadcast("startPlayerValues");
                deleteAllClonesOf(ClassSelector);
            }
            if(this.cloneId == 3) {
                let guess = this.ask("Secret password");
                if(guess == warriorPassword) {
                    currentClass = playerClasses[2];
                    broadcast("startPlayerValues");
                    deleteAllClonesOf(ClassSelector);
                }
                else {
                    this.say("Defeat the boss to get the PASSWORD");
                }
            }
            if(this.cloneId == 4) {
                currentClass = playerClasses[3];
                this.say("Sorry, in development");
            }
        }
        when stage.sceneChanged(Ruine) {
            this.resetTint();
            this.size = 25;
            this.setPosition(-190, 100);
            createClone(this);
            this.setPosition(0, 100);
            this.setCostume(this.Female_Mage_White_Idle_Empty_Hands);
            this.size = 50;
            createClone(this);
            this.setPosition(190, 100);
            this.setCostume(this.Knight_4_Idle);
            this.size = 80;
            createClone(this);
            this.setCssTint("#000000");
            this.setPosition(-190, -100);
            this.setCostume(this.White_Robot_Player_Idle);
            this.size = 40;
            createClone(this);
            this.hide();
        }
        when stage.started {
            this.hide();
        }
    }
    
    actor thumbnail {
        default costume THUMBNAILPAPER2("THUMBNAILPAPER2")
        when stage.started {
            this.show();
            this.size = 47;
            this.opacity = 0;
            this.setPosition(0, 0);
            while(this.opacity <= 100) {
                this.opacity += 15;
                this.wait(0.1);
            }
            this.wait(0.2);
            while(25 <= this.opacity) {
                this.opacity -= 15;
                this.wait(0.1);
            }
            setScene(Ruine);
        }
        when stage.sceneChanged(Ruine) {
            this.hide();
            while(sceneName == "Ruine") {
                if(isKeyPressed("0")) {
                    this.size = 46;
                    this.opacity = 100;
                    this.goToFront();
                    this.setCostume(this.THUMBNAILPAPER2);
                    this.show();
                    this.wait(2);
                    this.hide();
                }
            }
        }
        when stage.started {
            
        }
    }
    
    actor Sabretooth {
        costume Sabretooth_idle("gallery:Animals/Sabretooth idle")
        costume Sabretooth_Walk_1("gallery:Animals/Sabretooth Walk 1")
        costume Sabretooth_Walk_2("gallery:Animals/Sabretooth Walk 2")
        costume Sabretooth_Walk_3("gallery:Animals/Sabretooth Walk 3")
        costume Sabretooth_Walk_4("gallery:Animals/Sabretooth Walk 4")
        costume Sabretooth_Walk_5("gallery:Animals/Sabretooth Walk 5")
        costume Sabretooth_Walk_6("gallery:Animals/Sabretooth Walk 6")
        costume Sabretooth_Run_1("gallery:Animals/Sabretooth Run 1")
        costume Sabretooth_Run_2("gallery:Animals/Sabretooth Run 2")
        costume Sabretooth_Run_3("gallery:Animals/Sabretooth Run 3")
        costume Sabretooth_Run_4("gallery:Animals/Sabretooth Run 4")
        costume Sabretooth_Run_5("gallery:Animals/Sabretooth Run 5")
        costume Sabretooth_Jump_1("gallery:Animals/Sabretooth Jump 1")
        costume Sabretooth_Jump_2("gallery:Animals/Sabretooth Jump 2")
        costume Sabretooth_Jump_3("gallery:Animals/Sabretooth Jump 3")
        costume Sabretooth_Jump_4("gallery:Animals/Sabretooth Jump 4")
        costume Sabretooth_Bite_1("gallery:Animals/Sabretooth Bite 1")
        costume Sabretooth_Roar_1("gallery:Animals/Sabretooth Roar 1")
        costume Sabretooth_Roar_2("gallery:Animals/Sabretooth Roar 2")
        costume Sabretooth_Bite_2("gallery:Animals/Sabretooth Bite 2")
        costume Sabretooth_Bite_3("gallery:Animals/Sabretooth Bite 3")
        costume Sabretooth_Slash_1("gallery:Animals/Sabretooth Slash 1")
        costume Sabretooth_Slash_2("gallery:Animals/Sabretooth Slash 2")
        costume Sabretooth_Slash_3("gallery:Animals/Sabretooth Slash 3")
        costume Sabretooth_Slash_4("gallery:Animals/Sabretooth Slash 4")
        costume Sabretooth_Whacked_1("gallery:Animals/Sabretooth Whacked 1")
        costume Sabretooth_Whacked_2("gallery:Animals/Sabretooth Whacked 2")
        costume Sabretooth_Whacked_3("gallery:Animals/Sabretooth Whacked 3")
        costume Sabretooth_Knocked_Out_1("gallery:Animals/Sabretooth Knocked Out 1")
        costume Sabretooth_Knocked_Out_2("gallery:Animals/Sabretooth Knocked Out 2")
        sound Dragon_Raget("gallery:Animals/Dragon Roar")
        let bossStates = [ "idle", "walk", "run", "roar", "bite", "slash", "whacked", "knocked out", "dead" ];
        let bossCurrentState = "idle";
        let walkDuration = 1;
        let bossAngry = false;
        let detectionRange = 90;
        let playerDistance;
        let bossSpeed = 0;
        let biteCooldown = 0;
        let canBite = true;
        let bossHealth = 1;
        let bossBaseHealth = 0;
        let bossTotalHealth = 0;
        let bossAlive = true;
        let bellDistance = 0;
        let bellDetectRadius = 95;
        let bossCanBeDamaged = false;
        function setBossStartingHealth() {
            return 3 * (playerWeaponDamage + bossBaseHealth)
        }
        function changeBossStateTo(stateToChange) {
            bossCurrentState = stateToChange;
            broadcast("bossStateChanged");
        }
        function bossRoar() {
            this.setCostume(this.Sabretooth_idle);
            this.wait(0.2);
            this.setCostume(this.Sabretooth_Roar_1);
            this.playSound(this.Dragon_Raget);
            this.wait(0.5);
            this.setCostume(this.Sabretooth_Roar_2);
            this.wait(0.8);
            this.setCostume(this.Sabretooth_idle);
        }
        function bossWalk() {
            this.setCostume(this.Sabretooth_idle);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_1);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_2);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_3);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_4);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_5);
            this.wait(0.15);
            this.setCostume(this.Sabretooth_Walk_6);
            this.wait(0.15);
        }
        when stage.started {
            this.hide();
            this.size = 50;
            this.rotationStyle = "leftRight";
            bossCurrentState = bossStates[0];
            bossBaseHealth = 600;
            detectionRange = 110;
            bossSpeed = 2;
            biteCooldown = 5;
            bossTotalHealth = this.setBossStartingHealth();
            bossHealth = bossTotalHealth;
        }
        when stage.signalReceived("bossSetToIdle") {
            this.changeBossStateTo(bossStates[0]);
        }
        when stage.signalReceived("bossSetToWhacked") {
            this.changeBossStateTo(bossStates[6]);
        }
        when stage.signalReceived("bossSetToKnocked") {
            this.changeBossStateTo(bossStates[7]);
        }
        when stage.signalReceived("bossSetToBite") {
            this.changeBossStateTo(bossStates[4]);
        }
        when stage.signalReceived("bossSetToWalk") {
            this.changeBossStateTo(bossStates[1]);
        }
        when stage.signalReceived("bossSetToRun") {
            this.changeBossStateTo(bossStates[2]);
        }
        when stage.signalReceived("bossSetToSlash") {
            this.changeBossStateTo(bossStates[5]);
        }
        when stage.signalReceived("bossSetToRoar") {
            this.changeBossStateTo(bossStates[3]);
        }
        when stage.signalReceived("bossStage") {
            while(!gameOver) {
                playerDistance = Math.sqrt(Math.pow(playerX - x, 2) + Math.pow(playerY - y, 2));
                bellDistance = Math.sqrt(Math.pow(bellX - x, 2) + Math.pow(bellY - y, 2));
                getBossTotalHealth = bossTotalHealth;
                isBossAlive = bossAlive;
                getBossHP = bossHealth;
                if(bossCurrentState == bossStates[0]) {
                    this.setCostume(this.Sabretooth_idle);
                }
                if(playerDistance <= detectionRange && !bossAngry && bossAlive && bossCurrentState != bossStates[6]) {
                    bossAngry = true;
                    broadcast("bossSetToRoar");
                    this.wait(1);
                }
                if(bossAlive && bossHealth <= 0) {
                    broadcast("bossSetToKnocked");
                    this.wait(1);
                }
            }
        }
        when stage.signalReceived("bossStateChanged") {
            this.wait(0.1);
            while(!gameOver && !bossAngry && bossHealth > 0) {
                if(bossCurrentState == bossStates[0]) {
                    for(let i = 1; i <= Math.randomBetween(1, 3); i++) {
                        this.heading = 90;
                        this.wait(0.5);
                        this.heading = -90;
                    }
                    this.heading = Math.randomBetween(0, 360);
                    this.wait(3);
                    broadcast("bossSetToWalk");
                }
                if(bossCurrentState == bossStates[1]) {
                    broadcast("queueBossWalking");
                    if(this.touching(Edge.any)) {
                        this.heading = this.heading * -1;
                    }
                    else {
                        this.move(2);
                        this.wait(0.1);
                    }
                }
            }
        }
        when stage.signalReceived("bossSetRandomState") {
            this.changeBossStateTo(bossStates[Math.randomBetween(0, 7)]);
        }
        when stage.signalReceived("bossIntro") {
            this.show();
            this.heading = -90;
            this.setPosition(345, 100);
            this.glideSecondsTo(4, 200, 80);
            this.wait(1.5);
            this.bossRoar();
            this.wait(0.5);
            broadcast("bossStage");
            broadcast("bossSetToIdle");
        }
        when stage.signalReceived("queueBossWalking") {
            walkDuration = Math.randomBetween(2, 4);
            this.wait(walkDuration);
            if(!bossAngry) {
                broadcast("bossSetToIdle");
            }
        }
        when stage.signalReceived("bossStateChanged") {
            while(bossHealth > 0 && !gameOver) {
                if(bossCurrentState == bossStates[1]) {
                    this.bossWalk();
                }
                if(bossCurrentState == bossStates[3]) {
                    this.bossRoar();
                }
                if(bossCurrentState == bossStates[4]) {
                    this.setCostume(this.Sabretooth_idle);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Bite_2);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Bite_3);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_idle);
                    this.wait(0.2);
                    broadcast("bossSetToRun");
                }
                if(bossCurrentState == bossStates[2]) {
                    this.setCostume(this.Sabretooth_Run_1);
                    this.wait(0.17);
                    this.setCostume(this.Sabretooth_Run_2);
                    this.wait(0.17);
                    this.setCostume(this.Sabretooth_Run_3);
                    this.wait(0.17);
                    this.setCostume(this.Sabretooth_Run_4);
                    this.wait(0.17);
                    this.setCostume(this.Sabretooth_Run_5);
                    this.wait(0.17);
                }
                if(bossCurrentState == bossStates[5]) {
                    this.setCostume(this.Sabretooth_Slash_1);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Slash_2);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Slash_3);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Slash_4);
                    this.wait(0.2);
                }
                if(bossCurrentState == bossStates[6]) {
                    this.setCostume(this.Sabretooth_Whacked_1);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Whacked_2);
                    this.wait(0.2);
                    this.setCostume(this.Sabretooth_Whacked_3);
                    this.wait(0.2);
                }
            }
            if(bossCurrentState == bossStates[7]) {
                this.setCostume(this.Sabretooth_idle);
                this.wait(0.5);
                this.setCostume(this.Sabretooth_Knocked_Out_1);
                this.wait(0.5);
                this.setCostume(this.Sabretooth_Knocked_Out_2);
                this.wait(0.5);
                bossAlive = false;
            }
        }
        when stage.signalReceived("bossStateChanged") {
            while(!gameOver && bossAngry && bossHealth > 0) {
                if(bossCurrentState == bossStates[3]) {
                    this.pointTowards(Player);
                    this.wait(3);
                    broadcast("bossSetToRun");
                }
                if(bossCurrentState == bossStates[2]) {
                    while(bossCurrentState != bossStates[6]) {
                        if(playerDistance <= detectionRange + detectionRange * 0.75 && detectionRange * 0.3 <= playerDistance) {
                            this.pointTowards(Player);
                            this.move(bossSpeed + bossSpeed * 0.5);
                            this.wait(0.1);
                            if(playerDistance <= detectionRange - detectionRange * 0.4 && canBite) {
                                broadcast("bossSetToBite");
                                broadcast("queueBiteCooldown");
                                this.wait(1);
                            }
                        }
                    }
                }
                if(detectionRange + detectionRange * 0.75 < playerDistance) {
                    bossAngry = false;
                    broadcast("bossSetToIdle");
                }
                if(bossCurrentState == bossStates[6]) {
                    bossCanBeDamaged = true;
                    this.wait(4);
                    bossCanBeDamaged = false;
                    broadcast("bossSetToRoar");
                }
            }
        }
        when stage.signalReceived("queueBiteCooldown") {
            canBite = false;
            this.wait(biteCooldown);
            canBite = true;
        }
        when stage.signalReceived("shake") {
            if(bellDistance <= bellDetectRadius) {
                broadcast("queueBiteCooldown");
                broadcast("bossSetToWhacked");
                this.wait(0.2);
            }
        }
        when stage.signalReceived("bossStage") {
            while(!gameOver && bossHealth > 0) {
                if(((((this.touching(Bomb_Sphere) || this.touchingActorOrClone(PlayerWeapon)) || this.touching(Toxic_Spell_Green)) || this.touching(Lava_Golem)) || this.touching(Prehistoric_Weapons)) && bossCanBeDamaged) {
                    bossHealth -= playerWeaponDamage;
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
                if(detectionRange * 0.45 > playerDistance && !canBite) {
                    broadcast("playerSetStateHurt");
                    this.wait(getPlayerRecoveryRate);
                    broadcast("playerSetStateToInvFrames");
                }
            }
        }
        when stage.signalReceived("bossIntro") {
            for(let i = 1; i <= 3; i++) {
                this.bossWalk();
            }
        }
    }
    
    actor BossHealthBar {
        costume Bar_Empty("gallery:Effects_Universe/Bar Empty")
        costume Bar_1("gallery:Effects_Universe/Bar 1")
        costume Bar_2("gallery:Effects_Universe/Bar 2")
        costume Bar_3("gallery:Effects_Universe/Bar 3")
        costume Bar_4("gallery:Effects_Universe/Bar 4")
        costume Bar_5("gallery:Effects_Universe/Bar 5")
        costume Bar_6("gallery:Effects_Universe/Bar 6")
        costume Bar_7("gallery:Effects_Universe/Bar 7")
        costume Bar_8("gallery:Effects_Universe/Bar 8")
        costume Bar_9("gallery:Effects_Universe/Bar 9")
        costume Bar_Complete("gallery:Effects_Universe/Bar Complete")
        function updateHeathBar(totalhealth, currenthealth) {
            if(currenthealth == 0) {
                this.setCostume(this.Bar_Empty);
            }
            if(totalhealth - totalhealth * 0.9 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.8) {
                this.setCostume(this.Bar_1);
            }
            if(totalhealth - totalhealth * 0.8 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.7) {
                this.setCostume(this.Bar_2);
            }
            if(totalhealth - totalhealth * 0.7 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.6) {
                this.setCostume(this.Bar_3);
            }
            if(totalhealth - totalhealth * 0.6 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.5) {
                this.setCostume(this.Bar_4);
            }
            if(totalhealth - totalhealth * 0.5 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.4) {
                this.setCostume(this.Bar_5);
            }
            if(totalhealth - totalhealth * 0.4 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.3) {
                this.setCostume(this.Bar_6);
            }
            if(totalhealth - totalhealth * 0.3 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.2) {
                this.setCostume(this.Bar_7);
            }
            if(totalhealth - totalhealth * 0.2 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.1) {
                this.setCostume(this.Bar_8);
            }
            if(totalhealth - totalhealth * 0.1 <= currenthealth && currenthealth < totalhealth) {
                this.setCostume(this.Bar_9);
            }
            if(totalhealth == currenthealth) {
                this.setCostume(this.Bar_Complete);
            }
        }
        when stage.started {
            this.hide();
        }
        when pointerOver {
            this.say(concat(Math.round(getBossHP), concat("/", getBossTotalHealth)));
            this.wait(0.5);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("bossIntro") {
            this.show();
            this.size = 150;
            this.goToFront();
            this.setCssTint("#ff4a0c");
            this.setPosition(0, 250);
            this.glideSecondsTo(0.5, 0, 155);
            this.glideSecondsTo(0.25, 0, 147);
            this.glideSecondsTo(0.25, 0, 151);
            this.glideSecondsTo(0.25, 0, 149);
            this.glideSecondsTo(0.25, 0, 150);
            while(true) {
                this.updateHeathBar(getBossTotalHealth, getBossHP);
            }
        }
    }
    
    actor Greutate {
        costume Greutate_blank("gallery:Objects/Weight Blank")
        sound Gong("gallery:Effects/Gong")
        let bellCooldown = 5;
        when stage.signalReceived("shake") {
            bellOnCooldown = true;
            this.playSound(this.Gong);
            for(let i = 1; i <= 2; i++) {
                this.turnRight(15);
                this.wait(0.06);
                this.turnLeft(15);
                this.wait(0.06);
                this.turnLeft(15);
                this.wait(0.06);
                this.turnRight(15);
                this.wait(0.06);
            }
            this.wait(bellCooldown);
            bellOnCooldown = false;
        }
        when stage.signalReceived("bossIntro") {
            this.show();
            while(!gameOver);
        }
        when stage.started {
            this.hide();
            this.goAfter(Player);
            this.resetTint();
            this.heading = 90;
            this.size = 17;
            this.setPosition(bellX, bellY);
        }
        when stage.signalReceived("bossIntro") {
            this.show();
            bellCooldown = 5;
            bellX = 0;
            bellY = 45;
            while(!gameOver) {
                if(this.touching(Player) && !bellOnCooldown) {
                    this.say("'E': Interact");
                    if(isKeyPressed("e")) {
                        broadcast("shake");
                        this.say("");
                    }
                }
                if(!this.touching(Player)) {
                    this.say("");
                }
                if(this.touching(Player) && bellOnCooldown) {
                    this.wait(0.2);
                    if(isKeyPressed("e")) {
                        this.say("Can't use it right now.");
                    }
                }
            }
        }
    }
    
    actor Light {
        costume Balloon_Shape_Green_Top("gallery:Objects/Balloon Shape Green Top")
        costume Balloon_Shape_Red_Top("gallery:Objects/Balloon Shape Red Top")
        when stage.started {
            this.hide();
            this.goAfter(Player);
            this.goBefore(Greutate);
            this.resetTint();
            this.size = 10;
            this.setPosition(bellX, bellY);
        }
        when stage.signalReceived("bossIntro") {
            this.setPosition(bellX, bellY);
            this.show();
            while(true) {
                if(!bellOnCooldown) {
                    this.setCostume(this.Balloon_Shape_Green_Top);
                }
                else {
                    this.setCostume(this.Balloon_Shape_Red_Top);
                }
            }
        }
    }
    
    actor Toxic_Spell_Green {
        costume Toxic_Spell_Purple_Cast_1("gallery:Effects/Toxic Spell Purple Cast 1")
        costume Toxic_Spell_Purple_Cast_2("gallery:Effects/Toxic Spell Purple Cast 2")
        costume Toxic_Spell_Purple_Cast_3("gallery:Effects/Toxic Spell Purple Cast 3")
        costume Toxic_Spell_Purple_Cast_4("gallery:Effects/Toxic Spell Purple Cast 4")
        costume Toxic_Spell_Purple_Cast_5("gallery:Effects/Toxic Spell Purple Cast 5")
        let distanceFromPlayer = 35;
        when stage.started {
            this.setCssTint("#ff186d");
            this.rotationStyle = "leftRight";
            this.hide();
            this.size = 60;
        }
        when stage.signalReceived("performQskill") {
            if(currentClass == playerClasses[1]) {
                if(getPlayerDir == 90) {
                    this.setPosition(playerX + distanceFromPlayer, playerY);
                    this.heading = 90;
                }
                if(getPlayerDir == -90) {
                    this.setPosition(playerX - distanceFromPlayer, playerY);
                    this.heading = -90;
                }
                this.show();
                this.setCostume(this.Toxic_Spell_Purple_Cast_1);
                while(this.costumeId < 5) {
                    this.nextCostume();
                    this.wait(0.07);
                }
                this.hide();
            }
        }
    }
    
    actor Lava_Golem {
        costume Lava_Golem_Slam_1("gallery:Monsters/Lava Golem Slam 1")
        costume Lava_Golem_Slam_2("gallery:Monsters/Lava Golem Slam 2")
        costume Lava_Golem_Slam_3("gallery:Monsters/Lava Golem Slam 3")
        costume Lava_Golem_Slam_4("gallery:Monsters/Lava Golem Slam 4")
        let distanceFromPlayer = 65;
        when stage.started {
            this.goAfter(Enemy);
            this.hide();
            this.size = 35;
            this.setPosition(0, 100);
            this.rotationStyle = "leftRight";
        }
        when stage.signalReceived("performRspell") {
            if(currentClass == playerClasses[1]) {
                if(getPlayerDir == 90) {
                    this.setPosition(playerX + distanceFromPlayer, playerY);
                    this.heading = 90;
                }
                if(getPlayerDir == -90) {
                    this.setPosition(playerX - distanceFromPlayer, playerY);
                    this.heading = -90;
                }
                this.show();
                for(let variable1 = 1; variable1 <= 8; variable1++) {
                    this.setCostume(this.Lava_Golem_Slam_1);
                    this.wait(0.1);
                    this.setCostume(this.Lava_Golem_Slam_2);
                    this.wait(0.1);
                    this.setCostume(this.Lava_Golem_Slam_3);
                    this.wait(0.1);
                    this.setCostume(this.Lava_Golem_Slam_4);
                    this.wait(0.1);
                }
                this.hide();
            }
        }
    }
    
    actor Prehistoric_Weapons {
        costume Prehistoric_Weapons_Hammer("gallery:Objects/Prehistoric Weapons Hammer")
        let offsetY = 125;
        when stage.started {
            this.hide();
            this.size = 200;
        }
        when stage.signalReceived("performRspell") {
            if(currentClass == playerClasses[2]) {
                this.setPosition(playerX, playerY - offsetY);
                this.show();
                this.glideSecondsTo(0.8, playerX, playerY + playerY - offsetY - offsetY * 0.2);
                this.glideSecondsTo(6, playerX, playerY + offsetY * 10);
                this.hide();
            }
        }
    }
}