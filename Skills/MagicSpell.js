actor Toxic_Spell_Green {
    costume Toxic_Spell_Purple_Cast_1("gallery:Effects/Toxic Spell Purple Cast 1")
    costume Toxic_Spell_Purple_Cast_2("gallery:Effects/Toxic Spell Purple Cast 2")
    costume Toxic_Spell_Purple_Cast_3("gallery:Effects/Toxic Spell Purple Cast 3")
    costume Toxic_Spell_Purple_Cast_4("gallery:Effects/Toxic Spell Purple Cast 4")
    costume Toxic_Spell_Purple_Cast_5("gallery:Effects/Toxic Spell Purple Cast 5")
    let distanceFromPlayer = 35;
    when stage.started {
        this.setCssTint("#ff186d");
        this.rotationStyle = "leftRight";
        this.hide();
        this.size = 60;
    }
    when stage.signalReceived("performQskill") {
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
            this.setCostume(this.Toxic_Spell_Purple_Cast_1);
            while(this.costumeId < 5) {
                this.nextCostume();
                this.wait(0.07);
            }
            this.hide();
        }
    }
}
