app.views.booksList = Backbone.View.extend({
    initialize:function(options){
        this.options = options;
        this.listenTo(this.collection,'change reset',this.render)
    },
    _findCategoryName(){
        var $categoryName 
        var catId=this.collection.options.catId;
        if(catId=='scifi'){
            $categoryName='Science Fiction';
        }else if(catId=='horror'){
            $categoryName='Horror';
        }
        else if(catId=='sport'){
            $categoryName='Sports';
        }
        else if(catId=='romance'){
            $categoryName='Romance';
        }
        else if(catId=='all'){
            $categoryName='All Books';
        }
        return $categoryName;
    },
    render:function(){
        
        this.$el.html('<ul class="books-list"><h1 data-id="category-info" style="">'+ this._findCategoryName() +'</h1></ul>');
        $ul = this.$('ul');
        var bookPath = "#category/"+this.collection.options.catId+"/book/";
        this.collection.each(function(model){
            $ul.append('<li class="thumb">'+
                '<a href="'+bookPath+model.get('id')+'" class="thumb-link">'+
                    '<span class="overlay"></span>'+
                    '<img src="'+model.get('volumeInfo').imageLinks.thumbnail+'" style="width:128px;height:198px;border-bottom:1px solid black">'+
                '</a>'+
            '</li>')
        })
        console.log('collection :'+this.collection.options.catId);
        
        return this;
    },
    
})