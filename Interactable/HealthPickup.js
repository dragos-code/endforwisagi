actor Health {
    costume Health_Idle("gallery:Misc_Universe/Health Idle")
    let cooldown = 0;
    when stage.signalReceived("startPlayer") {
        while(!gameOver) {
            this.hide();
            this.wait(Math.randomBetween(10, 75));
            this.show();
            this.setPosition(Math.randomBetween(-300, 300), Math.randomBetween(-160, 160));
            cooldown = Math.randomBetween(10, 20);
            while(!(this.touching(Player) || cooldown <= 0));
        }
    }
    when stage.signalReceived("startPlayer") {
        while(!gameOver) {
            if(cooldown != 0) {
                this.wait(1);
                cooldown -= 1;
            }
        }
    }
    when stage.signalReceived("startPlayer") {
        this.goAfter(Enemy);
        this.size = 12;
        while(!gameOver) {
            this.size += 2.5;
            this.wait(0.2);
            this.size -= 2.5;
            this.wait(0.2);
            this.size += 2.5;
            this.wait(0.2);
            this.size -= 2.5;
            this.wait(0.2);
            this.wait(2);
        }
    }
    when stage.started {
        this.hide();
    }
}
