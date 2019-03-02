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
            score: 0,
        };
        var userAnswers = req.body;
        var friendFactor;
        console.log("This is the user's strange answers.....", userAnswers);
        //loops through friends data
        for (var i = 0; i < friends.length; i++) {
            var chosenFriend = friends[i];
            friendFactor = 0;
            //loops through friends data scores
            for (var j = 0; j < chosenFriend.scores.length; j++) {
                var chosenFriendScore = chosenFriend.scores[j];
                var userScores = userAnswers.scores[j];
                //comparing userdata to array
                //returns number to set friendFactor equal to
                // if differences are less than current bestMatch score, 
                // reset bestMatch to the new option
                friendFactor += Math.abs(parseInt(userScores) - parseInt(chosenFriendScore));
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
    })

}