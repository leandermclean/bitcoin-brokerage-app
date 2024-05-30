import { db, collection, getDocs } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', function() {
    fetchClients();
});

async function fetchClients() {
    try {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        const tbody = document.querySelector('table tbody');

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = document.createElement('tr');
            Object.values(data).forEach(value => {
                const cell = document.createElement('td');
                cell.innerText = value;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching clients:', error);
    }
}
