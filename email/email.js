(function(){
    emailjs.init('user_Yly3D94PnWgld8pSSVdq7');
 })();




window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        let address = document.getElementById("address").value
        let message = document.getElementById("message").value
        let name = document.getElementById("name").value
        let recipe = document.getElementById("recipe")
        let img = document.getElementById("img")
        let plainText = document.getElementById("plainText")
        console.log(recipe)
        console.log(address)
        var data = {
            service_id: 'service_az2em3y',
            template_id: 'template_pyijtql',
            user_id: 'user_Yly3D94PnWgld8pSSVdq7',
            
            template_params: {
                'user_email': address,
                "recipe": recipe,
                "img": img,
                "message": plainText,
                "user_name": name
                
            }
        };
        
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });    

        this.contact_number.value = Math.random() * 100000 | 0;
        
    });
        
    
}

// //------------------------------------------------------------------
// $('#send').on('submit', function(event) {
//     event.preventDefault(); // prevent reload
    
//     var formData = new FormData(this);
//     formData.append('service_id', 'service_az2em3y');
//     formData.append('template_id', 'template_pyijtql');
//     formData.append('user_id', 'user_Yly3D94PnWgld8pSSVdq7');
 
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });