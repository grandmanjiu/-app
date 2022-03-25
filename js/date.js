		var t = document.querySelector('#zojia')
		var moeny = 3159
		console.log(moeny.innerText)
		var inp = document.querySelectorAll('.shuzi') //获取输入框对象
		var price = 3159 //获取单价
		console.log(price)
		
		function add (num) { // 点第几个+
			inp[0].innerText ++ //点击+后，对应的输入框value+1
			if (inp[0].innerText > 12) {
				// alert('不在减少了')
				inp[0].innerText = 12
			}
			var sum = price * inp[0].innerText
			t.innerText = sum
			console.log(sum)
		}
		function minus (num) {
			inp[0].innerText -- //点击-后，对应的输入框value-1
			if (inp[0].innerText < 1) {
				// alert('不在减少了')
				inp[0].innerText = 0
			}
			var sum = price * inp[0].innerText
			t.innerText = sum
			console.log(sum)
		}
		function minu (numm) {
			inp[1].innerText -- //点击-后，对应的输入框value-1
			if (inp[1].innerText < 1) {
				// alert('不在减少了')
				inp[1].innerText = 0
			}
		}
		function addd (numm) { // 点第几个+
			inp[1].innerText ++ //点击+后，对应的输入框value+1
			if (inp[1].innerText > 3) {
				inp[1].innerText = 3
			}
		}