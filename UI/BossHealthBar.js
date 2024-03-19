    
    actor BossHealthBar {
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
        function updateHeathBar(totalhealth, currenthealth) {
            if(currenthealth == 0) {
                this.setCostume(this.Bar_Empty);
            }
            if(totalhealth - totalhealth * 0.9 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.8) {
                this.setCostume(this.Bar_1);
            }
            if(totalhealth - totalhealth * 0.8 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.7) {
                this.setCostume(this.Bar_2);
            }
            if(totalhealth - totalhealth * 0.7 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.6) {
                this.setCostume(this.Bar_3);
            }
            if(totalhealth - totalhealth * 0.6 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.5) {
                this.setCostume(this.Bar_4);
            }
            if(totalhealth - totalhealth * 0.5 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.4) {
                this.setCostume(this.Bar_5);
            }
            if(totalhealth - totalhealth * 0.4 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.3) {
                this.setCostume(this.Bar_6);
            }
            if(totalhealth - totalhealth * 0.3 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.2) {
                this.setCostume(this.Bar_7);
            }
            if(totalhealth - totalhealth * 0.2 <= currenthealth && currenthealth < totalhealth - totalhealth * 0.1) {
                this.setCostume(this.Bar_8);
            }
            if(totalhealth - totalhealth * 0.1 <= currenthealth && currenthealth < totalhealth) {
                this.setCostume(this.Bar_9);
            }
            if(totalhealth == currenthealth) {
                this.setCostume(this.Bar_Complete);
            }
        }
        when stage.started {
            this.hide();
        }
        when pointerOver {
            this.say(concat(Math.round(getBossHP), concat("/", getBossTotalHealth)));
            this.wait(0.5);
            this.say("");
        }
        when pointerOut {
            this.say("");
        }
        when stage.signalReceived("bossIntro") {
            this.show();
            this.size = 150;
            this.goToFront();
            this.setCssTint("#ff4a0c");
            this.setPosition(0, 250);
            this.glideSecondsTo(0.5, 0, 155);
            this.glideSecondsTo(0.25, 0, 147);
            this.glideSecondsTo(0.25, 0, 151);
            this.glideSecondsTo(0.25, 0, 149);
            this.glideSecondsTo(0.25, 0, 150);
            while(true) {
                this.updateHeathBar(getBossTotalHealth, getBossHP);
            }
        }
    }
    