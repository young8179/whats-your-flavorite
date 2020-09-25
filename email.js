//sending email

(function () {
    emailjs.init('user_Yly3D94PnWgld8pSSVdq7');
})();




window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        let address = document.getElementById("inlineFormInputGroup").value
        let name = document.getElementById("inlineFormInput").value
        let joinedLink = ""
        emailChecked()

        function emailChecked() {
            const checkBoxes = document.getElementsByClassName("hearted");
            for (let index = 0; index < checkBoxes.length; index++) {
                const element = checkBoxes[index];
                if (element.checked) {
                    joinedLink += `<a href="${$(element).data("href")}">${$(element).data("title")}</a>` + "\n <br>"
                    console.log(joinedLink)
                }

            }
        }
        //get info from localStorage
        // function grabInfoFromLocal(local){
        //     const lisLocalArray = local.map((list) => {
        //         return joinedLink += `<a href="${list.Link}">${list.Title}</a>` + "\n <br>"
        //     })
        //     return lisLocalArray.join("")
        // }
        // console.log(joinedLink)





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
        }).done(function () {
            alert('Your mail is sent!');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });

        // this.contact_number.value = Math.random() * 100000 | 0;

    });


}