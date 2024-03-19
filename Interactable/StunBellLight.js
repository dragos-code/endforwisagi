actor Light {
    costume Balloon_Shape_Green_Top("gallery:Objects/Balloon Shape Green Top")
    costume Balloon_Shape_Red_Top("gallery:Objects/Balloon Shape Red Top")
    when stage.started {
        this.hide();
        this.goAfter(Player);
        this.goBefore(Greutate);
        this.resetTint();
        this.size = 10;
        this.setPosition(bellX, bellY);
    }
    when stage.signalReceived("bossIntro") {
        this.setPosition(bellX, bellY);
        this.show();
        while(true) {
            if(!bellOnCooldown) {
                this.setCostume(this.Balloon_Shape_Green_Top);
            }
            else {
                this.setCostume(this.Balloon_Shape_Red_Top);
            }
        }
    }
}