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
