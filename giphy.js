$(function(){
    
    $("#searchGiphy").keypress(function(event){
        if(event.which === 13){
            var query = $(this).val();
            searchGiphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC";
            ajaxRequest(searchGiphyUrl);
            $(this).val("");
        }
    });
    
    function ajaxRequest(address){
        var xhr = $.get(address);
        xhr.done(function(response) {
            var content = "";
            for(var i=0;i<response.data.length;i++){
                content +=  '<div class="card">';
                content += '<img src="'+ response.data[i].images.downsized.url + '"';
                content += 'alt="'+ response.data[i].title + '"/>'
                content += '</div>';
            }
            $('.container').html(content);
     });
    }
    trendingGif();
    function trendingGif(){
        var tUrl = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
        ajaxRequest(tUrl);
    }

    function trendingSticker(){
        var tsUrl = "http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC";
        ajaxRequest(tsUrl);
    }
    
    $("#searchSticker").keypress(function(event){
        if(event.which === 13){
            var sQuery = $(this).val();
            searchStickerUrl = "http://api.giphy.com/v1/stickers/search?q=" + sQuery + "&api_key=dc6zaTOxFJmzC";
            
            ajaxRequest(searchStickerUrl);
        }
    });

    
    $('#st').on('click', function(){
          $('#giphy').hide();
          $('#sticker').show();
          trendingSticker();
    });

    

});

