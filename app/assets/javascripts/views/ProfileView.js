EngineEval.ProfileView = Ember.View.extend({
	didInsertElement: function() {

    $("#followers_link").text(this.controller.get("followers_count"))
    $("#followed_link").text(this.controller.get("followed_count"))
	$("#followed_link").click(function(){
	$("#followed_list").modal({keyboard:false,backdrop:'static'});
	})
	$("#followers_link").click(function(){
		$("#followers_list").modal({keyboard:false,backdrop:'static'});
	})
	$("#boardedge")
	    .height($("#boardedge")
	        .width())
	$("#user-board")
	    .height($("#boardedge")
	        .width())
	//var userId=this.get("controller").get("user").id

	

	 var list=["a","b","c","d","e","f","g","h"]
   var numlist=[8,7,6,5,4,3,2,1];

    for(var x=0;x<8;x++){
      for(var y=0;y<8;y++){
        if(y%2==0&&x%2==0){
          $("#board").append("<div class='square whitesquare' id='"+list[y]+numlist[x]+"s'></div>")
        }
        else if(x%2!=0&&y%2!=0){
          $("#board").append("<div class='square whitesquare' id='"+list[y]+numlist[x]+"s'></div>")
        }
        else{
        $("#board").append("<div class='square blacksquare' id='"+list[y]+numlist[x]+"s'></div>")

        }
    }
    }
    setup("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
	addpieces();
	},
	    willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(250,1,done);
    },

    animateOut : function (done) {

        this.$().fadeTo(250, 0, done);
    }
})