import { db, collection, addDoc } from './firebase-config.js';

document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const settings = {
        buyMargin: formData.get('buy-margin'),
        sellMargin: formData.get('sell-margin'),
        xpub: formData.get('xpub')
    };

    saveSettingsToFirebase(settings);
});

async function saveSettingsToFirebase(settings) {
    try {
        await addDoc(collection(db, 'settings'), settings);
        console.log('Settings saved:', settings);
    } catch (error) {
        console.error('Error saving settings:', error);
    }
}
