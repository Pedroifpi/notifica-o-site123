document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Enviar dados para o banco de dados (exemplo usando fetch)
    fetch('API_URL/submitReview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, review }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Avaliação enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar avaliação:', error);
    });
});

document.getElementById('notificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const notifications = Array.from(document.querySelectorAll('input[name="notifications"]:checked')).map(checkbox => checkbox.value);

    // Enviar dados para o banco de dados (exemplo usando fetch)
    fetch('API_URL/saveNotifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notifications }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Configurações de notificações salvas com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao salvar notificações:', error);
    });
});