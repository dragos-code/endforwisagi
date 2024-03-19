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
