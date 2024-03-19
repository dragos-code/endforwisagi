
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
