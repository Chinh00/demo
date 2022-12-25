
document.getElementById("box-center").addEventListener("click", () => {
    document.getElementById("box").style.animation = "animate 2s forwards"
    document.getElementById("box-1").style.animation = "animate_left 2s forwards"
    document.getElementById("box-2").style.animation = "animate_right 2s forwards"
    document.getElementById("box-3").style.animation = "animate_top 2s forwards"
    setTimeout(() => {
        document.getElementById("box-center").style.animation = "animate_show 1s both"
    }, 1500)
    
})
const box = document.getElementById("box-content")
$("#box-centent").hover(function () {
            box.style.height = "100px"
            
        }, function () {
            // out
        }
    );