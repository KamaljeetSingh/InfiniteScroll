var lazyload = lazyload || {};
(function($, lazyload){
    
    $.fn.infiniteScroll = function(){
        var self = this;
        var counter = 0;
        var rowHeight = 40;
        var storeScrollTop;
        $(self).scroll(function($event){
            //  console.log(self);
            //if it touches the bottom
            if((self[0].scrollHeight - self[0].scrollTop) == self[0].clientHeight ){
                // console.log(self);
                let div = document.createElement('div');
                let fChild = self[0].firstElementChild;
                div.innerHTML = "Kamaljeet";
                div.className = "data";
                $(fChild).css({
                    'transform': 'translateY(-'+ (rowHeight) + 'px)',
                })
                $(fChild).append(div);
                counter++;
                storeScrollTop = self[0].scrollTop;
            }
            
            //check if scrollTop diffrence is greater than rowHeight
            if(storeScrollTop - self[0].scrollTop > rowHeight){
                console.log('removing');
                allElements = $('.data');
                $(allElements[allElements.length - 1]).remove();
                storeScrollTop = self[0].scrollTop;
            }

            //check if it has reached the top
            if((self[0].scrollTop == 0) && counter>0){
                let fChild = self[0].firstElementChild;
                $(fChild).css({
                    'transform': 'translateY(0px)',
                })
            }

        })

        return this;
    }

})(jQuery, lazyload);