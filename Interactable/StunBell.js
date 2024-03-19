actor Greutate {
    costume Greutate_blank("gallery:Objects/Weight Blank")
    sound Gong("gallery:Effects/Gong")
    let bellCooldown = 5;
    when stage.signalReceived("shake") {
        bellOnCooldown = true;
        this.playSound(this.Gong);
        for(let i = 1; i <= 2; i++) {
            this.turnRight(15);
            this.wait(0.06);
            this.turnLeft(15);
            this.wait(0.06);
            this.turnLeft(15);
            this.wait(0.06);
            this.turnRight(15);
            this.wait(0.06);
        }
        this.wait(bellCooldown);
        bellOnCooldown = false;
    }
    when stage.signalReceived("bossIntro") {
        this.show();
        while(!gameOver);
    }
    when stage.started {
        this.hide();
        this.goAfter(Player);
        this.resetTint();
        this.heading = 90;
        this.size = 17;
        this.setPosition(bellX, bellY);
    }
    when stage.signalReceived("bossIntro") {
        this.show();
        bellCooldown = 5;
        bellX = 0;
        bellY = 45;
        while(!gameOver) {
            if(this.touching(Player) && !bellOnCooldown) {
                this.say("'E': Interact");
                if(isKeyPressed("e")) {
                    broadcast("shake");
                    this.say("");
                }
            }
            if(!this.touching(Player)) {
                this.say("");
            }
            if(this.touching(Player) && bellOnCooldown) {
                this.wait(0.2);
                if(isKeyPressed("e")) {
                    this.say("Can't use it right now.");
                }
            }
        }
    }
}
