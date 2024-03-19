actor PlayerWeapon {
    costume Sword_Red("gallery:Misc_Universe/Sword Red")
    costume Sword_Yellow("gallery:Misc_Universe/Sword Yellow")
    costume Prehistoric_Weapons_Axe("gallery:Objects/Prehistoric Weapons Axe")
    costume Prehistoric_Weapons_Club("gallery:Objects/Prehistoric Weapons Club")
    costume Fireball_Fly_1("gallery:Effects/Fireball Fly 1")
    costume Fireball_Fly_2("gallery:Effects/Fireball Fly 2")
    costume Fireball_Fly_3("gallery:Effects/Fireball Fly 3")
    costume Fireball_Fly_4("gallery:Effects/Fireball Fly 4")
    let distanceFromPlayer = 0;
    let orbit_angle = 0;
    let orbit_speed = 0;
    let numberOfDaggers = 5;
    let offsetAngle = 360 / numberOfDaggers;
    function playFlameAnimation() {
        this.setCostume(this.Fireball_Fly_1);
        this.wait(0.1);
        this.setCostume(this.Fireball_Fly_2);
        this.wait(0.1);
        this.setCostume(this.Fireball_Fly_3);
        this.wait(0.1);
        this.setCostume(this.Fireball_Fly_4);
        this.wait(0.1);
    }
    when stage.started {
        this.hide();
        this.heading = 90;
        distanceFromPlayer = 35;
        orbit_angle = 60;
        orbit_speed = 10;
    }
    when stage.signalReceived("hideWeapon") {
        this.hide();
    }
    when stage.signalReceived("showWeapon") {
        this.show();
    }
    when stage.signalReceived("startPlayer") {
        if(currentClass == playerClasses[2]) {
            this.setCostume(this.Prehistoric_Weapons_Axe);
            distanceFromPlayer = 35;
            this.size = 50;
            this.show();
            while(currentClass == playerClasses[2]) {
                this.rotationStyle = "leftRight";
                let xOffset = 35;
                let yOffset = 12;
                let speed = 1.5;
                let minY = playerY - 10;
                let maxY = playerY + yOffset;
                let movingUp = false;
                while(currentClass == playerClasses[2]) {
                    if(getPlayerDir == 90) {
                        this.heading = 90;
                        this.x = playerX + xOffset;
                    }
                    else {
                        this.heading = -90;
                        this.x = playerX - xOffset;
                    }
                    if(movingUp) {
                        this.y += speed;
                        if(this.y >= maxY) {
                            movingUp = false;
                        }
                    }
                    else {
                        this.y -= speed;
                        if(this.y <= minY) {
                            movingUp = true;
                        }
                    }
                    this.wait(0.05);
                    minY = playerY - yOffset;
                    maxY = playerY+yOffset;
                }
            }
        }
        let oscTime = 0;
        let oscSpeed = 15;
        let from_a = -40;
        let to_b = 40;
        let aboveHeadHeight = 20;
        let besidesPlayer = 35;
        while(currentClass == playerClasses[1]) {
            let oscilationRange = (to_b - from_a) / 2;
            let oscilationOffset = from_a + oscilationRange;
            let oscillatingX = playerX + oscilationOffset + Math.sin(oscTime) * oscilationRange + oscilationOffset;
            if(Math.cos(oscTime) > 0) {
                this.heading = 90;
            }
            else {
                this.heading = -90;
            }
            this.x = oscillatingX;
            this.y = playerY + aboveHeadHeight;
            oscTime += oscSpeed;
            this.playFlameAnimation();
            if(oscTime > 2 * Math.PI) {
                oscTime -= 2 * Math.PI;
            }
            this.wait(0.01);
        }
    }
    when stage.signalReceived("startPlayer") {
        if(currentClass == playerClasses[0]) {
            this.setCostume(this.Sword_Red);
            distanceFromPlayer = 35;
            this.size = 10;
            this.show();
        }
        if(currentClass == playerClasses[1]) {
            this.setCostume(this.Fireball_Fly_1);
            this.size = 40;
            this.show();
        }
        while(currentClass == playerClasses[0]) {
            this.x = playerX + distanceFromPlayer * Math.cos(orbit_angle);
            this.y = playerY + distanceFromPlayer * Math.sin(orbit_angle);
            orbit_angle += orbit_speed;
            if(orbit_angle > 360) {
                orbit_angle = orbit_angle - 360;
            }
            if(orbit_angle < 0) {
                orbit_angle = orbit_angle + 360;
            }
            this.wait(0.15);
        }
    }
    when cloned {
        if(currentClass == playerClasses[0]) {
            this.setCostume(this.Sword_Yellow);
            this.opacity = 45;
            let cloneOffsetAngle = this.cloneId * offsetAngle;
            let cloneOrbitAngle = orbit_angle + cloneOffsetAngle;
            for(let is = 1; is <= 55; is++) {
                this.x = playerX + distanceFromPlayer * Math.cos(cloneOrbitAngle);
                this.y = playerY + distanceFromPlayer * Math.sin(cloneOrbitAngle);
                cloneOrbitAngle += orbit_speed;
                if(cloneOrbitAngle > 360) {
                    cloneOrbitAngle = cloneOrbitAngle - 360;
                }
                if(orbit_angle < 0) {
                    cloneOrbitAngle = cloneOrbitAngle + 360;
                }
                this.wait(0.05);
            }
            this.deleteClone();
        }
    }
    when cloned {
        if(currentClass == playerClasses[2]) {
            this.setCostume(this.Prehistoric_Weapons_Club);
            this.rotationStyle = "leftRight";
            let xOffset = 35;
            let yOffset = 25;
            let speed = 2.5;
            let minY = playerY - yOffset;
            let maxY = playerY + yOffset;
            let movingUp = false;
            if(getPlayerDir == 90) {
                this.heading = -90;
                this.x = playerX - xOffset;
            }
            else {
                this.heading = 90;
                this.x = playerX + xOffset;
            }
            this.y = playerY + yOffset;
            while(currentClass == playerClasses[2] && q_SpellActive) {
                if(getPlayerDir == 90) {
                    this.x = playerX - xOffset;
                }
                else {
                    this.x = playerX + xOffset;
                }
                if(movingUp) {
                    this.y += speed;
                    if(this.y >= maxY) {
                        movingUp = false;
                    }
                }
                else {
                    this.y -= speed;
                    if(this.y <= minY) {
                        movingUp = true;
                    }
                }
                this.wait(0.05);
            }
            this.deleteClone(this);
        }
    }
    when stage.signalReceived("performQskill") {
        if(currentClass == playerClasses[0]) {
            q_SpellActive = true;
            this.wait(0.2);
            orbit_speed = 25;
            for(let i = 1; i <= 4; i++) {
                createClone(this);
            }
            this.wait(4);
            orbit_speed = 10;
            q_SpellActive = false;
        }
        if(currentClass == playerClasses[2]) {
            q_SpellActive = true;
            createClone(this);
            this.wait(10);
            q_SpellActive = false;
        }
    }
}