
var luke = $('<div class="character" atk=5 hp=100><div>Luke Skywalker</div><img class="charaImg" src="assets/images/luke.jpg"><div id="hpLuke">100</div></div>');
var kenobi = $('<div class="character" atk=8 hp=120><div>Obi-Wan Kenobi</div><img class="charaImg" src="assets/images/obiwan.png"><div id="hpKenobi">120</div></div>');
var sidious = $('<div class="character" atk=20 hp=150><div>Darth Sidious</div><img class="charaImg" src="assets/images/sidious.jpg"><div id="hpSidious">150</div></div>');
var maul = $('<div class="character" atk=25 hp=180><div>Darth Maul</div><img class="charaImg" src="assets/images/maul.png"><div id="hpMaul">180</div></div>');
var player;
var defender;
var choosing = true;
var fighting = false;

$( document ).ready(function() {
    $("#fighters").append(luke);
    $("#fighters").append(kenobi);
    $("#fighters").append(sidious);
    $("#fighters").append(maul);

    $(luke).on("click", function(){
        if (choosing === true){
        $("#player").append(luke);
        $("#enemies").append(kenobi);
        $("#enemies").append(sidious);
        $("#enemies").append(maul);
        choosing = false;
        player = "luke;"
        }
        else if (fighting === false && choosing === false) {
            $("#defender").append(luke);
            fighting = true;
            defender = "luke";
        }
    });
    $(kenobi).on("click", function(){
        if (choosing === true){
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
    $(sidious).on("click", function(){
        if (choosing === true){ 
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
    $(maul).on("click", function(){
        if (choosing === true){
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

    $("#attackBtn").on("click", function(){
        if (fighting === true){
            switch(player){
                case "luke":
                switch(defender){
                    case "kenobi":
                        //code
                        $(luke).attr("hp", -$(kenobi).attr("atk"));
                        alert("uhh... " + $(luke).attr("hp"));
                        break;
                }

            }
        }
    });

});