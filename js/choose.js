var inp = document.querySelectorAll('.inp')


function add (num) { // 点第几个+
    inp[num].innerText ++ //点击+后，对应的输入框value+1
    if (inp[num].innerText > 5) {
        // alert('不在减少了')
        inp[num].innerText = 5
    }
}
function minus (num) {
    inp[num].innerText -- //点击-后，对应的输入框value-1
    if (inp[num].innerText < 1) {
        // alert('不在减少了')
        inp[num].innerText = 0
    }
}