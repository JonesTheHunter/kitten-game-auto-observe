
const observe = document.getElementById('observeButton');
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'auto-observe-toggle');
let autoObserver;

input.addEventListener('change', () => {
    if(this.checked) {
            autoObserver = setInterval(() => {
            

            if(observe.children.length > 0) {
            console.log('Observe found')
                observe.querySelector('input').click()
            } else {
                console.log('No Observe found.')
            }
        }, 3000);
    } else {
        clearInterval(autoObserver)
    }
})
observe.insertAdjacentElement('beforebegin', input);


