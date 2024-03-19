
    actor Proxima_Numbers_Framed {
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
            this.hide();
        }
        when stage.signalReceived("triggerLevelUp") {
            this.size += 2;
            this.turnRight(2);
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 2;
            this.wait(0.02);
            this.turnLeft(2);
            this.size += 2;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 2;
            this.wait(0.02);
            this.turnRight(2);
            this.size -= 2;
            this.wait(0.02);
            this.size -= 2;
            this.turnLeft(2);
        }
        when pointerOver {
            this.say(concat(Math.round(getPlayerCurrentXP), " XP"));
            this.size += 10;
            this.setCssTint("#fff700");
            this.stampCostume();
            if(getPlayerLevel <= levelCap) {
                this.resetTint();
            }
            this.size -= 10;
        }
        when pointerOut {
            this.say("");
            clearPenTrails();
        }
        when stage.signalReceived("startPlayerValues") {
            this.show();
            this.goToFront();
            this.setPosition(-75, -160);
            this.resetTint();
            this.size = 35;
            while(getPlayerLevel <= levelCap) {
                this.setCostume(getPlayerLevel);
            }
            this.setCssTint("#fff700");
        }
    }
    