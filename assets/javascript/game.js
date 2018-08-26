

//This is broken pretty badly





var luke = $('<div class="character"><div>Luke Skywalker</div><img class="charaImg" src="assets/images/luke.jpg"><div id="hpLuke">100</div></div>');
var kenobi = $('<div class="character"><div>Obi-Wan Kenobi</div><img class="charaImg" src="assets/images/obiwan.png"><div id="hpKenobi">120</div></div>');
var sidious = $('<div class="character"><div>Darth Sidious</div><img class="charaImg" src="assets/images/sidious.jpg"><div id="hpSidious">150</div></div>');
var maul = $('<div class="character"><div>Darth Maul</div><img class="charaImg" src="assets/images/maul.png"><div id="hpMaul">180</div></div>');
var player;
var defender;
var choosing = true;
var fighting = false;
var lukeHP = 100;
var kenobiHP = 120;
var sidiousHP = 150;
var maulHP = 180;
var lukeATK = 15;
var kenobiATK = 8;
var sidiousATK = 12;
var maulATK = 25;

$(document).ready(function () {
    $("#fighters").append(luke);
    $("#fighters").append(kenobi);
    $("#fighters").append(sidious);
    $("#fighters").append(maul);

    $(luke).on("click", function () {
        if (choosing === true) {
            $("#player").append(luke);
            $("#enemies").append(kenobi);
            $("#enemies").append(sidious);
            $("#enemies").append(maul);
            choosing = false;
            player = "luke";
        }
        else if (fighting === false && choosing === false) {
            $("#defender").append(luke);
            fighting = true;
            defender = "luke";
        }
    });
    $(kenobi).on("click", function () {
        if (choosing === true) {
            $("#player").append(kenobi);
            $("#enemies").append(luke);
            $("#enemies").append(sidious);
            $("#enemies").append(maul);
            choosing = false;
            player = "kenobi";
        }
        else if (fighting === false && choosing === false) {
            $("#defender").append(kenobi);
            fighting = true;
            defender = "kenobi";
        }
    });
    $(sidious).on("click", function () {
        if (choosing === true) {
            $("#player").append(sidious);
            $("#enemies").append(luke);
            $("#enemies").append(kenobi);
            $("#enemies").append(maul);
            choosing = false;
            player = "sidious";
        }
        else if (fighting === false && choosing === false) {
            $("#defender").append(sidious);
            fighting = true;
            defender = "sidious";
        }
    });
    $(maul).on("click", function () {
        if (choosing === true) {
            $("#player").append(maul);
            $("#enemies").append(luke);
            $("#enemies").append(kenobi);
            $("#enemies").append(sidious);
            choosing = false;
            player = "maul";
        }
        else if (fighting === false && choosing === false) {
            $("#defender").append(maul);
            fighting = true;
            defender = "maul";
        }
    });

    $("#attackBtn").on("click", function () {
        if (fighting === true) {
            switch (player) {
                case "luke":
                    switch (defender) {
                        case "kenobi":
                            //code
                            lukeHP -= kenobiATK;
                            kenobiHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpKenobi").text(kenobiHP);
                            $("#battleText1").text("You attacked Obi-Wan Kenobi for " + lukeATK + " damage.");
                            $("#battleText2").text("Obi-Wan Kenobi attacked you for " + kenobiATK + " damage.");
                            lukeATK += 5;
                            if (lukeHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (kenobiHP <= 0) {
                                $(kenobi).remove();
                                fighting = false;
                            }
                            break;

                        case "sidious":
                            //code
                            lukeHP -= sidiousATK;
                            sidiousHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpSidious").text(sidiousHP);
                            $("#battleText1").text("You attacked Darth Sidious for " + lukeATK + " damage.");
                            $("#battleText2").text("Darth Sidious attacked you for " + sidiousATK + " damage.");
                            lukeATK += 5;
                            if (lukeHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (sidiousHP <= 0) {
                                $(sidious).remove();
                                fighting = false;
                            }
                            break;

                        case "maul":
                            //code
                            lukeHP -= maulATK;
                            maulHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpMaul").text(maulHP);
                            $("#battleText1").text("You attacked Darth Maul for " + lukeATK + " damage.");
                            $("#battleText2").text("Darth Maul attacked you for " + maulATK + " damage.");
                            lukeATK += 5;
                            if (lukeHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (maulHP <= 0) {
                                $(maul).remove();
                                fighting = false;
                            }
                            break;


                    }








                case "kenobi":
                    switch (defender) {
                        case "luke":
                            //code
                            lukeHP -= kenobiATK;
                            kenobiHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpKenobi").text(kenobiHP);
                            $("#battleText1").text("You attacked Luke for " + kenobiATK + " damage.");
                            $("#battleText2").text("Luke attacked you for " + lukeATK + " damage.");
                            kenobiATK += 5;
                            if (kenobiHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (lukeHP <= 0) {
                                $(luke).remove();
                                fighting = false;
                            }
                            break;

                        case "sidious":
                            //code
                            kenobiHP -= sidiousATK;
                            sidiousHP -= kenobiATK;
                            $("#hpKenobi").text(kenobiHP);
                            $("#hpSidious").text(sidiousHP);
                            $("#battleText1").text("You attacked Darth Sidious for " + kenobiATK + " damage.");
                            $("#battleText2").text("Darth Sidious attacked you for " + sidiousATK + " damage.");
                            kenobiATK += 5;
                            if (kenobiHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (sidiousHP <= 0) {
                                $(sidious).remove();
                                fighting = false;
                            }
                            break;

                        case "maul":
                            //code
                            kenobiHP -= maulATK;
                            maulHP -= kenobiATK;
                            $("#hpKenobi").text(kenobiHP);
                            $("#hpMaul").text(maulHP);
                            $("#battleText1").text("You attacked Darth Maul for " + kenobiATK + " damage.");
                            $("#battleText2").text("Darth Maul attacked you for " + maulATK + " damage.");
                            kenobiATK += 5;
                            if (kenobiHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (maulHP <= 0) {
                                $(maul).remove();
                                fighting = false;
                            }
                            break;


                    }







                case "sidious":
                    switch (defender) {
                        case "kenobi":
                            //code
                            sidiousHP -= kenobiATK;
                            kenobiHP -= sidiousATK;
                            $("#hpSidious").text(sidiousHP);
                            $("#hpKenobi").text(kenobiHP);
                            $("#battleText1").text("You attacked Obi-Wan Kenobi for " + sidiousATK + " damage.");
                            $("#battleText2").text("Obi-Wan Kenobi attacked you for " + kenobiATK + " damage.");
                            sidiousATK += 5;
                            if (sidiousHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (kenobiHP <= 0) {
                                $(kenobi).remove();
                                fighting = false;
                            }
                            break;

                        case "luke":
                            //code
                            lukeHP -= sidiousATK;
                            sidiousHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpSidious").text(sidiousHP);
                            $("#battleText1").text("You attacked Luke for " + sidiousATK + " damage.");
                            $("#battleText2").text("Luke attacked you for " + lukeATK + " damage.");
                            sidiousATK += 5;
                            if (sidiousHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (lukeHP <= 0) {
                                $(luke).remove();
                                fighting = false;
                            }
                            break;

                        case "maul":
                            //code
                            sidiousHP -= maulATK;
                            maulHP -= sidiousATK;
                            $("#hpLuke").text(sidiousHP);
                            $("#hpMaul").text(maulHP);
                            $("#battleText1").text("You attacked Darth Maul for " + sidiousATK + " damage.");
                            $("#battleText2").text("Darth Maul attacked you for " + maulATK + " damage.");
                            sidiousATK += 5;
                            if (sidiousHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (maulHP <= 0) {
                                $(maul).remove();
                                fighting = false;
                            }
                            break;


                    }







                case "maul":
                    switch (defender) {
                        case "kenobi":
                            //code
                            maulHP -= kenobiATK;
                            kenobiHP -= maulATK;
                            $("#hpMaul").text(maulHP);
                            $("#hpKenobi").text(kenobiHP);
                            $("#battleText1").text("You attacked Obi-Wan Kenobi for " + maulATK + " damage.");
                            $("#battleText2").text("Obi-Wan Kenobi attacked you for " + kenobiATK + " damage.");
                            maulATK += 5;
                            if (maulHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (kenobiHP <= 0) {
                                $(kenobi).remove();
                                fighting = false;
                            }
                            break;

                        case "sidious":
                            //code
                            maulHP -= sidiousATK;
                            sidiousHP -= maulATK;
                            $("#hpMaul").text(maulHP);
                            $("#hpSidious").text(sidiousHP);
                            $("#battleText1").text("You attacked Darth Sidious for " + maulATK + " damage.");
                            $("#battleText2").text("Darth Sidious attacked you for " + sidiousATK + " damage.");
                            maulATK += 5;
                            if (maulHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (sidiousHP <= 0) {
                                $(sidious).remove();
                                fighting = false;
                            }
                            break;

                        case "luke":
                            //code
                            lukeHP -= maulATK;
                            maulHP -= lukeATK;
                            $("#hpLuke").text(lukeHP);
                            $("#hpMaul").text(maulHP);
                            $("#battleText1").text("You attacked Luke for " + maulATK + " damage.");
                            $("#battleText2").text("Luke attacked you for " + lukeATK + " damage.");
                            maulATK += 5;
                            if (maulHP <= 0) {
                                document.write("<h1>You Lose!</h1>");
                            }
                            else if (lukeHP <= 0) {
                                $(luke).remove();
                                fighting = false;
                            }
                            break;


                    }

            }
        }
    });

});