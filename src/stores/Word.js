var Word = function(name, meaning) {
    this.name = name;
    this.meaning = meaning;
};

Word.fromItem = function(item) {
    return new Word(item['word']['S'], item['meaning']['S']);
};

Word.prototype.toItemOfUser = function(userId) {
    return {
        user: {
            S: userId
        },
        word: {
            S: this.name
        },
        meaning: {
            S: this.meaning
        }
    }
};


module.exports = Word;
