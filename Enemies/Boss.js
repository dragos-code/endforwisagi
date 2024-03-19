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

