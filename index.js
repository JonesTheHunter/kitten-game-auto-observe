setInterval(() => {
const observe = document.getElementById('observeButton');

if(observe.children.length > 0) {
console.log('Observe found')
    observe.querySelector('input').click()
} else {
	console.log('No Observe found.')
}
}, 3000);