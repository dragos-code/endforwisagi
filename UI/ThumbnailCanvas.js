actor thumbnail {
    default costume THUMBNAILPAPER2("THUMBNAILPAPER2")
    when stage.started {
        this.show();
        this.size = 47;
        this.opacity = 0;
        this.setPosition(0, 0);
        while(this.opacity <= 100) {
            this.opacity += 15;
            this.wait(0.1);
        }
        this.wait(0.2);
        while(25 <= this.opacity) {
            this.opacity -= 15;
            this.wait(0.1);
        }
        setScene(Ruine);
    }
    when stage.sceneChanged(Ruine) {
        this.hide();
        while(sceneName == "Ruine") {
            if(isKeyPressed("0")) {
                this.size = 46;
                this.opacity = 100;
                this.goToFront();
                this.setCostume(this.THUMBNAILPAPER2);
                this.show();
                this.wait(2);
                this.hide();
            }
        }
    }
    when stage.started {
        
    }
}
