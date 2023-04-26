// Récupération des éléments HTML nécessaires
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const score= document.querySelector('.score');


// Ajout des événements drag and drop aux éléments draggables
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Ajout des événements drag and drop aux éléments dropzones
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.classList.add('hovered');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('hovered');
    });

    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const correct = JSON.parse(draggable.getAttribute('data-correct'));

        if (correct) {
            dropzone.innerHTML = 'Bonne réponse !';
            dropzone.classList.add('correct');
            dropzone.style.backgroundColor = 'green';
            score.innerHTML = parseInt(score.innerHTML) + 1;

        } else {
            dropzone.innerHTML = 'Mauvaise réponse';
            dropzone.classList.add('incorrect');
            dropzone.style.backgroundColor = 'red';
            score.innerHTML = parseInt(score.innerHTML) - 1;
            score


        }

        if (score.innerHTML == 3) {
            alert('Bravo ! Vous avez réussi le quiz !');
        }
        if (score.innerHTML == -1 ) {
            score.innerHTML = parseInt(score.innerHTML) + 1;
        }
    });
});


