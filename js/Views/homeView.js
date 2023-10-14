app.views.homeView = Backbone.View.extend({
    render:function(){
        this.$el.html('<img src="images/logo3.png" style="width: 50vw;padding-top: 4em;" alt="">'+
        '<h1 class="home-text" style="">Explore Our Diverse Collection!!!</h1>'+
        '<a href="#category/all"><button class="btn">Explore  now</button></a>')
    }
})