actor AgilityNumber_ui_1 {
    costume Proxima_Numbers_Framed_One("gallery:Text/Proxima Numbers Framed One")
    costume Proxima_Numbers_Framed_Two("gallery:Text/Proxima Numbers Framed Two")
    costume Proxima_Numbers_Framed_Three("gallery:Text/Proxima Numbers Framed Three")
    costume Proxima_Numbers_Framed_Four("gallery:Text/Proxima Numbers Framed Four")
    costume Proxima_Numbers_Framed_Five("gallery:Text/Proxima Numbers Framed Five")
    costume Proxima_Numbers_Framed_Six("gallery:Text/Proxima Numbers Framed Six")
    costume Proxima_Numbers_Framed_Seven("gallery:Text/Proxima Numbers Framed Seven")
    costume Proxima_Numbers_Framed_Eight("gallery:Text/Proxima Numbers Framed Eight")
    costume Proxima_Numbers_Framed_Nine("gallery:Text/Proxima Numbers Framed Nine")
    costume Proxima_Numbers_Framed_Ten("gallery:Text/Proxima Numbers Framed Ten")
    costume Proxima_Numbers_Framed_Eleven("gallery:Text/Proxima Numbers Framed Eleven")
    costume Proxima_Numbers_Framed_Twelve("gallery:Text/Proxima Numbers Framed Twelve")
    costume Proxima_Numbers_Framed_Thirteen("gallery:Text/Proxima Numbers Framed Thirteen")
    costume Proxima_Numbers_Framed_Fourteen("gallery:Text/Proxima Numbers Framed Fourteen")
    costume Proxima_Numbers_Framed_Fifteen("gallery:Text/Proxima Numbers Framed Fifteen")
    costume Proxima_Numbers_Framed_Sixteen("gallery:Text/Proxima Numbers Framed Sixteen")
    costume Proxima_Numbers_Framed_Seventeen("gallery:Text/Proxima Numbers Framed Seventeen")
    costume Proxima_Numbers_Framed_Eighteen("gallery:Text/Proxima Numbers Framed Eighteen")
    costume Proxima_Numbers_Framed_Nineteen("gallery:Text/Proxima Numbers Framed Nineteen")
    costume Proxima_Numbers_Framed_Twenty("gallery:Text/Proxima Numbers Framed Twenty")
    when stage.started {
        this.size = 25;
        this.hide();
    }
    when stage.signalReceived("startPlayerValues") {
        this.setPosition(265, -165);
        this.show();
        this.resetTint();
        while(getPlayerAgility <= statCap) {
            this.setCostume(getPlayerAgility);
            if(getPlayerAgility == statCap) {
                this.setCssTint("#fff700");
            }
        }
    }
    when pointerOver {
        this.say(concat("Speed:", concat(Math.round(getPlayerSpeed), concat(" iFrames:", concat(Math.round(getPlayerIFD), concat(" Recovery:", Math.round(getPlayerRecoveryRate)))))));
        this.wait(0.5);
        this.say("");
    }
}
