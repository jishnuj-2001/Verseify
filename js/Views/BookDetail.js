app.views.bookDetail = Backbone.View.extend({
    initialize:function(){
        this.listenTo(this.model,'change',this.render);
    },
    render:function(){
        var info = this.model.get('volumeInfo');
        var images = this.model.get('volumeInfo').imageLinks;
        this.$el.html('<div class="book-details">'+
            '<header class="book-header">'+
                '<img src="'+ images.thumbnail +'" alt=""class="thumb-link">'+
                '<span class="book-title">'+ info.title +'</span>'+
                '<span class="light"><span class="author ">'+ (info.authors.join(' - ')?info.authors.join(' - '):'Author details unavailable') +'</span> - <span class="publish-date">'+ (info.publishedDate?info.publishedDate:'Published date unavailable') +'</span></span>'+
                '<span class="light"><span class="publisher-name">'+ (info.publisher?info.publisher:'Publisher details unavailable') +'</span> - Publisher </span>'+
            '</header>'+
            '<div  class="book-content"><h1 style="padding-top: .3em;padding-bottom: .3em;">Details</h1><p class="book-description">'+ (info.description?info.description:'Description not available') +'</p></div>'+
            '</div> ')

        return  this;
    }
})