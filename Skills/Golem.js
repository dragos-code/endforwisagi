
actor Lava_Golem {
    costume Lava_Golem_Slam_1("gallery:Monsters/Lava Golem Slam 1")
    costume Lava_Golem_Slam_2("gallery:Monsters/Lava Golem Slam 2")
    costume Lava_Golem_Slam_3("gallery:Monsters/Lava Golem Slam 3")
    costume Lava_Golem_Slam_4("gallery:Monsters/Lava Golem Slam 4")
    let distanceFromPlayer = 65;
    when stage.started {
        this.goAfter(Enemy);
        this.hide();
        this.size = 35;
        this.setPosition(0, 100);
        this.rotationStyle = "leftRight";
    }
    when stage.signalReceived("performRspell") {
        if(currentClass == playerClasses[1]) {
            if(getPlayerDir == 90) {
                this.setPosition(playerX + distanceFromPlayer, playerY);
                this.heading = 90;
            }
            if(getPlayerDir == -90) {
                this.setPosition(playerX - distanceFromPlayer, playerY);
                this.heading = -90;
            }
            this.show();
            for(let variable1 = 1; variable1 <= 8; variable1++) {
                this.setCostume(this.Lava_Golem_Slam_1);
                this.wait(0.1);
                this.setCostume(this.Lava_Golem_Slam_2);
                this.wait(0.1);
                this.setCostume(this.Lava_Golem_Slam_3);
                this.wait(0.1);
                this.setCostume(this.Lava_Golem_Slam_4);
                this.wait(0.1);
            }
            this.hide();
        }
    }
}
