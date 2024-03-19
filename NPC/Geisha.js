
actor Geisha {
    costume Geisha_Inactiva("gallery:Figures/Geisha Idle")
    costume Geisha_Profil_1("gallery:Figures/Geisha Profile 1")
    costume Geisha_Profil_2("gallery:Figures/Geisha Profile 2")
    when stage.signalReceived("startPlayerValues") {
        this.say("");
        this.hide();
        this.setPosition(0, -60);
    }
    when stage.signalReceived("playerSetStateToDefeat") {
        this.show();
        this.say(concat("My, My, you survived only ", time));
        while(gameOver) {
            this.wait(0.5);
            this.y += 20;
            this.wait(0.5);
            this.y -= 20;
        }
    }
    when stage.sceneChanged(Ruine) {
        this.show();
        this.setPosition(250, -150);
        this.say("Welcome, traveller. Pick your class!");
        this.wait(0.5);
        this.say("");
    }
    when stage.started {
        this.hide();
    }
    when stage.signalReceived("stagesComplete") {
        this.show();
        gameOver = true;
        this.say(concat("What a hero! You saved those lands in ", concat(time, concat(" Password is ", warriorPassword))));
        while(gameOver) {
            this.wait(0.5);
            this.y += 20;
            this.wait(0.5);
            this.y -= 20;
        }
    }
    when stage.sceneChanged(Top_Down_Green_Field_Empty) {
        this.say("");
    }
}
