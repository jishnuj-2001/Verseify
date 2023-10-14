app.routers.Router = Backbone.Router.extend({
    routes:{
        'category/:id/book/:bookId':'book',
        'category/:id':'category',
        '' :'home' ,     
        '*default':'unknown'
    },
    home:function(){
        console.log('home all category');
        this._cleanupCurrentView();
        app.data.currentView = new app.views.homeView({
        });
        app.data.currentView.render();
        $('[data-id=home-page]').empty().append(app.data.currentView.$el);
        this._activateHomePagePanel();
    },
    book:function(id,bookId){
        console.log("book "+ bookId +" category "+ id);
        app.data.book = new app.models.Book({id:bookId});
        this._cleanupCurrentView();
        app.data.currentView = new app.views.bookDetail({
            model: app.data.book
        });
        this._activateBookDetailPanel();
        $('[data-id=book-detail]').empty().append(app.data.currentView.$el);
        app.data.book.fetch();

    },
    category:function(id){
        app.data.books = new app.models.Books(null,{catId:id});
        console.log(app.data.books.url());
        this._cleanupCurrentView();
        app.data.currentView = new app.views.booksList({
            collection: app.data.books
        });
        $('[data-id=books-list]').empty().append(app.data.currentView.$el);
        app.data.books.fetch({reset:true});
        this._activateBooksListPanel();

    },
    unknown:function(){
        console.log('unknown');
    },
    _activateBooksListPanel:function(selector){
        $('[data-id=book-detail]').removeClass('is-visible'); 
        $('[data-id=books-list]').addClass('is-visible');
        $('[data-id=home-page]').removeClass('is-visible'); 
    },
    _activateBookDetailPanel:function(selector){
        $('[data-id=books-list]').removeClass('is-visible'); 
        $('[data-id=book-detail]').addClass('is-visible');   
        $('[data-id=home-page]').removeClass('is-visible');            
    },
    _activateHomePagePanel:function(selector){
        $('[data-id=books-list]').removeClass('is-visible'); 
        $('[data-id=book-detail]').removeClass('is-visible'); 
        $('[data-id=home-page]').addClass('is-visible'); 
    },
    _cleanupCurrentView:function(){
        if(app.data.currentView){
            app.data.currentView = null;
        }
    }

})