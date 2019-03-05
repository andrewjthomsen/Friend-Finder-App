const friends = require('../data/friends.js')
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        console.log("testing post")
        var bestMatch = {
            name: "",
            photo: "",
            score: Infinity
        };
        var userAnswers = req.body;
        var userScores = userAnswers.scores;
        var friendFactor;
        console.log("This is the user's strange answers.....", userAnswers);
        //loops through friends data
        for (var i = 0; i < friends.length; i++) {
            var chosenFriend = friends[i];
            console.log(chosenFriend.name)
            friendFactor = 0;
            //loops through friends data scores
            for (var j = 0; j < chosenFriend.scores.length; j++) {
                console.log(chosenFriendScore)
                var chosenFriendScore = chosenFriend.scores[j];
                var chosenUserScores = userScores[j];
                console.log(userScores)
                //comparing userdata to array
                //returns number to set friendFactor equal to
                // if differences are less than current bestMatch score, 
                // reset bestMatch to the new option
                friendFactor += Math.abs(parseInt(chosenUserScores) - parseInt(chosenFriendScore));
            }
            if (friendFactor <= bestMatch.score) {
                bestMatch.name = chosenFriend.name;
                bestMatch.photo = chosenFriend.photo;
                bestMatch.score = friendFactor;
            }
        }
        //pushes userdata into friends.js
        friends.push(userAnswers);
        res.json(bestMatch);
        console.log("This match", bestMatch);
    })

}