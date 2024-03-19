actor Bomb_Sphere {
    costume Bomb_Sphere_Black_Full_Wick("gallery:Misc_Universe/Bomb Sphere Black Full Wick")
    costume Bomb_Sphere_Black_Half_Wick("gallery:Misc_Universe/Bomb Sphere Black Half Wick")
    costume Bomb_Sphere_Black_Idle("gallery:Misc_Universe/Bomb Sphere Black Idle")
    costume Toxic_Cloud_Green_Thickening_5("gallery:Effects/Toxic Cloud Green Thickening 5")
    costume Toxic_Cloud_Green_Thickening_4("gallery:Effects/Toxic Cloud Green Thickening 4")
    costume Toxic_Cloud_Green_Thickening_3("gallery:Effects/Toxic Cloud Green Thickening 3")
    costume Toxic_Cloud_Green_Thickening_2("gallery:Effects/Toxic Cloud Green Thickening 2")
    costume Toxic_Cloud_Green_Thickening_1("gallery:Effects/Toxic Cloud Green Thickening 1")
    when stage.started {
        this.hide();
    }
    when stage.started {
        while(true) {
            if(this.costumeId <= 3) {
                this.size = 6;
                this.resetTint();
                this.opacity = 100;
            }
            if(4 <= this.costumeId) {
                this.size = 25;
                this.setCssTint("#ffffff");
                this.opacity = 25;
            }
        }
    }
    when stage.signalReceived("playerSetStateCskill") {
        if(currentClass == playerClasses[0]) {
            this.show();
            this.goTo(Player);
            this.setCostume(this.Bomb_Sphere_Black_Full_Wick);
            while(this.costumeId < 8) {
                if(this.costumeId <= 3) {
                    this.nextCostume();
                    this.wait(0.3);
                }
                if(4 <= this.costumeId) {
                    this.nextCostume();
                    this.wait(0.05);
                }
            }
            this.hide();
        }
    }
}
