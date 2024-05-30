document.addEventListener('DOMContentLoaded', function() {
    fetchBitcoinQuote();
});

async function fetchBitcoinQuote() {
    const buyMargin = 1.05; // 5% buy margin
    const sellMargin = 0.95; // 5% sell margin

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad');
        const data = await response.json();
        const livePrice = data.bitcoin.cad;
        const buyPrice = livePrice * buyMargin;
        const sellPrice = livePrice * sellMargin;

        document.getElementById('buy-price').innerText = `$${buyPrice.toFixed(2)}`;
        document.getElementById('sell-price').innerText = `$${sellPrice.toFixed(2)}`;

        document.getElementById('buy-btn').addEventListener('click', () => {
            window.location.href = `buy.html?price=${buyPrice}`;
        });

        document.getElementById('sell-btn').addEventListener('click', () => {
            window.location.href = `sell.html?price=${sellPrice}`;
        });
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
    }
}
