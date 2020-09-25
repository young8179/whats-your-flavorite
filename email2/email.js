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
        let $recipe = $("#recipe").text()
        let $img = $("#img").attr("src")
        const urlEncodedSearchString = encodeURIComponent($img)
        let $image = `https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg`
        let plainText = document.getElementById("plainText")
        let $plainText = $("#plainText").text()
        // let checkVal = $(".message").val()
        let checkedM = $('input[name="checkBox"]:checked').siblings(".message")
        let joinedM = ""
        
        checkedM.each(function(index, message){
            joinedM += message.value + "\n <br>"

        })
        let checkedName = $('input[name="checkBox"]:checked').name
        
        console.log(checkedM)
        
        console.log(recipe)
        console.log(address)
        var data = {
            service_id: 'service_az2em3y',
            template_id: 'template_pyijtql',
            user_id: 'user_Yly3D94PnWgld8pSSVdq7',
            
            template_params: {
                'user_email': address,
                "recipe": $recipe,
                "img": $image,
                "message": $plainText,
                "user_name": checkedName,
                "checkedBox": joinedM
                
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