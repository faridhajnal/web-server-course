
    
    var middleware = {
    
    requireAuthentication: function(req,res,next){
        //adding middleware to express...
        console.log('private route hit!');
        next();
    },
    
    logger : function(req,res,next){
        
        console.log('REQUEST: ' + req.method+' ' + req.originalUrl +' DATE: ' + new Date().toString());
        next();
        
    }
    
    
};

module.exports = middleware;
