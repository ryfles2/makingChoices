function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function(answer) {
    answerGlobal=answer;
    this.questionIndex++;
};

Quiz.prototype.isEnded = function() {
    return this.questionIndex === stage; //this.questions.length;
};
