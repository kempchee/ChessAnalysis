EngineEval.EditView = Ember.View.extend({
    willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(250, 1, done);
    },

    animateOut : function (done) {
        this.$().fadeTo(250, 0, done);
    }
})