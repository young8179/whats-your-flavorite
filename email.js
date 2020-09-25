//sending email

(function(){
    emailjs.init('user_Yly3D94PnWgld8pSSVdq7');
 })();




window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        // let address = document.getElementById("address").value
        // let message = document.getElementById("message").value
        // let name = document.getElementById("name").value
        // let $recipe = $("#recipe").text()
        // let $img = $("#img").attr("src")
        // const urlEncodedSearchString = encodeURIComponent($img)
        // let $image = `https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg`
        // let plainText = document.getElementById("plainText")
        // let $plainText = $("#plainText").text()
        // // let checkVal = $(".message").val()
        // let checkedM = $('input[name="checkBox"]:checked').siblings(".message")
        
        // grab info from localStorage
        // const recipeStorage = JSON.parse(localStorage.getItem("recipeStorage"))
    // 
        let address = document.getElementById("inlineFormInputGroup").value
        let name = document.getElementById("inlineFormInput").value
        let joinedLink = ""
        grabInfoFromLocal(localJSON)
        
        //get info from localStorage
        function grabInfoFromLocal(local){
            const lisLocalArray = local.map((list) => {
                return joinedLink += `<a href="${list.Link}">${list.Title}</a>` + "\n <br>"
            })
            return lisLocalArray.join("")
        }
        console.log(joinedLink)
        

        
        
    
        // let toString = JSON.stringify(recipeStorage);
        // localStorage.setItem("recipeStorage", toString);
        
        
        var data = {
            service_id: 'service_az2em3y',
            template_id: 'template_xw2yr1p',
            user_id: 'user_Yly3D94PnWgld8pSSVdq7',
            
            template_params: {
                'user_email': address,
                'user_name': name,
                "recipe": joinedLink,
                
                
                
                
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

        // this.contact_number.value = Math.random() * 100000 | 0;
        
    });
        
    
}