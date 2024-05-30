import { generateKey, encryptData } from './encryption.js';
import { db, collection, addDoc } from './firebase-config.js';

document.getElementById('setup-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const adminData = {
        name: formData.get('adminName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        employeeId: formData.get('employeeId'),
        password: formData.get('password'),
        firebaseConfig: formData.get('firebaseConfig')
    };

    try {
        // Generate encryption key
        const key = await generateKey();

        // Encrypt admin data
        const encryptedData = await encryptData(key, adminData);

        // Save encrypted data to Firebase
        await addDoc(collection(db, 'admins'), encryptedData);

        // Redirect to dashboard after successful setup
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error encrypting data:', error);
    }
});
