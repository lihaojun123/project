var Toast = function(config){
        this.context = config.context==null?$('body'):config.context;
        this.message = config.message;
        this.time = config.time==null?5000:config.time;
        this.left = config.left;
        this.top = config.top;
        this.init();
        }
        var msgEntity;

        Toast.prototype = {
        
        init : function(){
        $("#toastMessage").remove();
        
        var msgDIV = new Array();
        msgDIV.push('<div id="toastMessage">');
        msgDIV.push('<span>'+this.message+'</span>');
        msgDIV.push('</div>');
        msgEntity = $(msgDIV.join('')).appendTo(this.context);
        
        var left = this.left == null ? this.context.width()/2-msgEntity.find('span').width()/2 : this.left;
        //var top = this.top == null ? '20px' : this.top;
        var topClient=document.documentElement.clientHeight;
            
        var top = this.top == null ? topClient/2-msgEntity.find('span').height()/2 : this.top;
        msgEntity.css({position:'absolute',top:top,'z-index':'99',left:left,'background-color':'black',color:'white','font-size':'0.85rem',padding:'0.55rem',margin:'0.55rem'});
        msgEntity.hide();
        },
        
        show :function(){
        msgEntity.fadeIn(this.time/2);
        msgEntity.fadeOut(this.time/2);
        }

 }