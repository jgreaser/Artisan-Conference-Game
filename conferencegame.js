$(document).ready(function() {




    //////////////////////////////////////////////////////////////////////////
    //////MODEL STUFF/////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    var userArray = [];
    var userSecretCode = '';
    var userName = '';
    var userScore = '';
    var userHandoffPath = '';

    getUserData();

    function getUserData() {
        userArray = getUser();

        userSecretCode = userArray[0];
        userName = userArray[1];
        userScore = userArray[2];
        userHandoffPath = userArray[3];
    }

    console.log("user secret code is " + userSecretCode);

    function getUser() { //CHECK SERVER FOR USERNAME, GET SCORE
        var user = getCookie("username");
        var userScoreFromServer = 0;

        userScoreFromServer = $.ajax({ //MIKE ROCKS
            url: "users_findUser.php",
            async: false,
            data: "name=" + user,
            type: "GET"
        });
        return JSON.parse(userScoreFromServer.responseText); //the [2] is the score! Woo!
    }


    function addToSecretPath(newPath) { //CHECK SERVER FOR USERNAME, GET SCORE
        var user = getCookie("username");


        success = $.ajax({ //MIKE ROCKS
            url: "users_addToHandoffPath.php",
            async: false,
            data: "name=" + user + "&&newPath=" + newPath,
            //data: "newPath=" + newPath,
            type: "GET"
        });
        return success;

    }




    //////////////////////////////////////////////////////////////////////////
    //////NO MORE USER MODEL MODEL///////////
    //////////////////////////////////////////////////////////////////////////




    //////////////////////////////////////////////////////////////////////////
    /////VIEW TYPE THINGS LIKE VIEWS AND ALSO VIEWS HAVE YOU VIEWS????////////
    //////////////////////////////////////////////////////////////////////////

    buildViews(); //get all da stuff on da views

    //set initial views
    $('#userView').show();
    $('#handoffPathView').hide();
    $('#addPathView').hide();

    function buildViews() {
        buildNavigationView();
        buildUserView();
        buildHandoffPathView();
        buildAddPathView();
    }

    function buildNavigationView() {
        $('#userViewLink').click(function() {
            $('#userView').show();
            $('#handoffPathView').hide();
            $('#addPathView').hide();
        });
        $('#addPathLink').click(function() {
            $('#userView').hide();
            $('#handoffPathView').hide();
            $('#addPathView').show();
        });
        $('#handoffPathViewLink').click(function() {
            goToHandoffPathView();
        });
    }

    function goToHandoffPathView() {
        $('.handoffPath').text(userHandoffPath); //EMBER NEED YOU NOW BABY

        $('#userView').hide();
        $('#handoffPathView').show();
        $('#addPathView').hide();
    }


    function buildUserView() {
        //add score to screen - references model
        $('.score').text(userScore);
        $('.userName').text(userName);
        $(".secretCode").text(userSecretCode);
        $(".secretCode").hide();
        $('.tapToHide').click(function() {
            $(".secretCode").toggle();
        });
    }

    function buildAddPathView() {
        $("#ajaxform").submit(function(event) {
            event.preventDefault();
            var secretCodeToSwap = $('#secretCodeInputBox').val();

            addToSecretPath(userHandoffPath + ", " + secretCodeToSwap);

            getUserData();

            goToHandoffPathView();


            //PROBABLY NEED TO RESET ALL THE DANG VIEWS NOW
        });
    }




    function buildHandoffPathView() {
        $('#handoffPathView').show();
        $('.handoffPath').text(userHandoffPath);
    }

    //////////////////////////////////////////////////////////////////////////
    ///////////I HEREBEY DECLARE THE VIEWS SECTION TO BE DONE/////////////////
    //////////////////////////////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////
    ////////////////////////COOKIE STUFF HERE NOM NOM NOM/////////////////////
    //////////////////////////////////////////////////////////////////////////


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            return true;
        } else {
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////
    ///////////////////THIS IS THE END, MY ONLY FRIEND THE END////////////////
    ////////////////////////////(what a loser)////////////////////////////////
});