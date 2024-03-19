
actor Sageata {
    costume Varf_de_Sageata_Negru("gallery:Shapes/Arrowhead Black")
    costume Varf_de_Sageata_Alb("gallery:Shapes/Arrowhead White")
    when stage.started {
        this.goToFront();
        this.heading = 180;
        this.setPosition(290, 0);
        this.opacity = 0;
    }
    when stage.signalReceived("statPointAvailable") {
        this.opacity = 45;
        while(0 < this.opacity) {
            this.glideSecondsTo(1, 290, -5);
            this.wait(0.1);
            this.glideSecondsTo(1, 290, 20);
            this.wait(0.1);
        }
    }
    when stage.signalReceived("statPointsSpent") {
        this.opacity = 0;
        this.say("");
    }
    when pointerOver {
        if(0 < this.opacity) {
            this.say("Spend Point.");
        }
    }
    when pointerOut {
        if(0 < this.opacity) {
            this.say("");
        }
    }
}
