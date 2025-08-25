document.getElementById('login-btn').addEventListener('click',function(e){
            e.preventDefault();
            setMobileNumber = '01712345678';
            setPin = '0201'
            const mobileNumber = document.getElementById('mobile-number').value;
            const pin = document.getElementById('pin').value;
            
            if( setMobileNumber === mobileNumber && setPin === pin){
                window.location.href = "./home.html"
            }
            else{
                alert('wrong pin or mobile number')
            }

            
        })