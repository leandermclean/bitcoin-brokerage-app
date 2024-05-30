const crypto = window.crypto || window.msCrypto; // For IE11 support

/**
 * Generates a random key for AES encryption.
 * @returns {Promise<CryptoKey>} The generated key.
 */
async function generateKey() {
    return crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256
        },
        true, // extractable
        ["encrypt", "decrypt"]
    );
}

/**
 * Encrypts data using the provided key.
 * @param {CryptoKey} key - The key to use for encryption.
 * @param {Object} data - The data to encrypt.
 * @returns {Promise<Object>} The encrypted data.
 */
async function encryptData(key, data) {
    const encodedData = new TextEncoder().encode(JSON.stringify(data));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        encodedData
    );
    return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
    };
}

/**
 * Decrypts data using the provided key.
 * @param {CryptoKey} key - The key to use for decryption.
 * @param {Object} encryptedData - The data to decrypt.
 * @returns {Promise<Object>} The decrypted data.
 */
async function decryptData(key, encryptedData) {
    const iv = new Uint8Array(encryptedData.iv);
    const data = new Uint8Array(encryptedData.data);
    const decryptedData = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        data
    );
    return JSON.parse(new TextDecoder().decode(decryptedData));
}

export { generateKey, encryptData, decryptData };
