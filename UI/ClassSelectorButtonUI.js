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