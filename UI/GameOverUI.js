actor Game_Over {
    costume Game_Over_1("gallery:Text/Game Over 1")
    costume Game_Over_2("gallery:Text/Game Over 2")
    when stage.started {
        this.hide();
        this.setPosition(0, 250);
        this.heading = 90;
    }
    when stage.signalReceived("playerSetStateToDefeat") {
        this.show();
        this.glideSecondsTo(0.5, 0, 150);
        while(gameOver) {
            this.turnRight(15);
            this.wait(0.2);
            this.turnLeft(15);
            this.wait(0.2);
            this.turnLeft(15);
            this.wait(0.2);
            this.turnRight(15);
            this.wait(0.2);
        }
    }
}
