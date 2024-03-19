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
