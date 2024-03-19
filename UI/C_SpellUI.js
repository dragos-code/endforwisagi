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
