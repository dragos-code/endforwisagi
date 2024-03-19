
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
