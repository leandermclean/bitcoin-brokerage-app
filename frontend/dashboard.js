import { db, collection, getDocs } from './firebase-config.js';
import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function() {
    fetchBitcoinData();
});

async function fetchBitcoinData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad');
        const data = await response.json();
        const price = data.bitcoin.cad;
        document.getElementById('bitcoin-price').innerText = `$${price.toFixed(2)}`;

        fetchWalletData(price);
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
    }
}

async function fetchWalletData(price) {
    try {
        const querySnapshot = await getDocs(collection(db, 'wallets'));
        let walletBalance = 0;
        let weeklyVolume = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            walletBalance += data.balance;
            weeklyVolume += data.volume;
        });

        document.getElementById('wallet-balance').innerText = `${walletBalance} BTC`;
        document.getElementById('weekly-volume').innerText = `${weeklyVolume} BTC`;

        populateCharts();
    } catch (error) {
        console.error('Error fetching wallet data:', error);
    }
}

function populateCharts() {
    const transactionsChartCtx = document.getElementById('transactions-chart').getContext('2d');
    const volumeChartCtx = document.getElementById('volume-chart').getContext('2d');

    new Chart(transactionsChartCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Transactions',
                data: [30, 45, 28, 50, 40, 60, 70, 65, 80, 55, 75, 95], // Placeholder data
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(volumeChartCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Volume',
                data: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65], // Placeholder data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
