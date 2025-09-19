
const observe = document.getElementById('observeButton');
const inputParent = document.createElement('div');
inputParent.setAttribute('id', 'toggle-parent');
inputParent.style.display = 'flex';
inputParent.style.flexDirection = 'column';

const inputLabel = document.createElement('label');
inputLabel.setAttribute('id', 'auto-observe-toggle-label');
inputLabel.setAttribute('for', 'auto-observe-toggle');

inputParent.appendChild(inputLabel);

const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'auto-observe-toggle');

inputParent.appendChild(input);

let autoObserver;

input.addEventListener('change', (e) => {
    if(e.target.checked) {
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
observe.insertAdjacentElement('beforebegin', inputParent);


