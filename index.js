let pink = document.getElementById('pinkCircle')
        let blue = document.getElementById('blueCircle')
        let yellow = document.getElementById('yellowCircle')
        let image = document.getElementById('image')
        let inputs = document.getElementById('upload')
        let blank = document.getElementById('blank')
        let load = document.getElementById('load')
        let hide = document.getElementById('hide')
 
        blank.classList.add('leftMain')

        pink.addEventListener('click', ()=>{
            image.src = './public/Pink umbrella.png'
            document.body.style.backgroundImage = "linear-gradient(to right," + 'white' + ", " + 'pink' + ")";
        })
        blue.addEventListener('click',()=>{
            image.src = './public/Blue umbrella.png'
            document.body.style.backgroundImage =  "linear-gradient(to right, " + 'white' + ", "  + 'rgb(178, 240, 251' + ")";
        })
        yellow.addEventListener('click',()=>{
            image.src = './public/Yello umbrella.png'
            document.body.style.backgroundImage =  "linear-gradient(to right, " + 'white' + ", "  + 'yellow' + ")";
        })

        inputs.addEventListener('change',()=>{
            var read = new FileReader();
            read.readAsDataURL(inputs.files[0])
            read.onload = function(){
                localStorage.setItem("image", read.result);
                blank.setAttribute("src", localStorage.getItem("image"))
            }
            if(localStorage.getItem("image")){
                blank.setAttribute("src", localStorage.getItem("image"))

            }
            load.classList.remove('leftMain')
            hide.classList.add('leftMain')
            setTimeout(()=>{
                load.classList.add('leftMain')
                hide.classList.remove('leftMain')
                blank.classList.remove('leftMain')
            },4000)
        })