let tweets = [
    {
        username: "hardcorecoder",
        tweet: "Economy doesn't look good"
    },
    {
        username: '420hardcorecoder',
        tweet: 'Everything is fine here'
    },
    {
        username: "hardcorecoder69",
        tweet: "Things are great. There is nothing to worry about"
    },
    {
        username: "hardcore69coder",
        tweet: "Unemployment is at its peak"
    }
]

let badWords = ["economy", "unemployment"]

tweets = tweets.map( tweet => {
    let words = tweet.tweet.split(' ')
    words = words.map( word => word.trim().toLowerCase())
    badWords.forEach( badWord => {
        if (words.includes(badWord)) {
            tweet.badTweet = true
        } else {
            tweet.badTweet = false
        }
    })
    return tweet
})

console.log(tweets)