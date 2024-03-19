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
