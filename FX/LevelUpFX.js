actor LevelUpEffect {
    costume Shield_Effect_Intact("gallery:Effects_Universe/Shield Effect Intact")
    costume Shield_Effect_Damaged_1("gallery:Effects_Universe/Shield Effect Damaged 1")
    costume Shield_Effect_Damaged_2("gallery:Effects_Universe/Shield Effect Damaged 2")
    costume Shield_Effect_Damaged_3("gallery:Effects_Universe/Shield Effect Damaged 3")
    costume Shield_Effect_Damaged_4("gallery:Effects_Universe/Shield Effect Damaged 4")
    costume Shield_Effect_Damaged_5("gallery:Effects_Universe/Shield Effect Damaged 5")
    costume Shield_Effect_Damaged_6("gallery:Effects_Universe/Shield Effect Damaged 6")
    costume Shield_Effect_Damaged_7("gallery:Effects_Universe/Shield Effect Damaged 7")
    costume Shield_Effect_Damaged_8("gallery:Effects_Universe/Shield Effect Damaged 8")
    costume Shield_Effect_Damaged_9("gallery:Effects_Universe/Shield Effect Damaged 9")
    when stage.started {
        this.hide();
        this.size = 20;
        this.goBefore(Player);
        this.setCssTint("#2bff00");
    }
    when stage.signalReceived("triggerLevelUp") {
        this.setCostume(this.Shield_Effect_Intact);
        this.show();
        for(let variable1 = 1; variable1 <= 9; variable1++) {
            this.goTo(Player);
            this.wait(0.03);
            this.nextCostume();
            this.size -= 0.6;
        }
        this.size = 20;
        this.hide();
    }
}
