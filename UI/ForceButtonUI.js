 
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
    