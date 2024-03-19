actor Prehistoric_Weapons {
    costume Prehistoric_Weapons_Hammer("gallery:Objects/Prehistoric Weapons Hammer")
    let offsetY = 125;
    when stage.started {
        this.hide();
        this.size = 200;
    }
    when stage.signalReceived("performRspell") {
        if(currentClass == playerClasses[2]) {
            this.setPosition(playerX, playerY - offsetY);
            this.show();
            this.glideSecondsTo(0.8, playerX, playerY + playerY - offsetY - offsetY * 0.2);
            this.glideSecondsTo(6, playerX, playerY + offsetY * 10);
            this.hide();
        }
    }
}