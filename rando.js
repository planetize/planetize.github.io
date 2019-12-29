console.log("hello");

$(document).ready(function(){
    $('.submit').click(function (event) { 
        event.preventDefault()
        console.log('Clicked button')
        
        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        if (email.includes('@')==false && email.includes('.')==false && email.length<5){
             statusElm.append('<div>Your email is not valid</div>')
        }
    
        if (name.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0') && name.length<2){
            statusElm.append('<div>Your name is not valid. </div>')
        }
        
        if (name.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')==false && name.length>1 && email.includes('@')==true && email.includes('.')==true && email.length>5){
            statusElm.append('<div>Thanks for submitting! We will get back to you soon. </div>')
        }
     
    })
    
    
})
