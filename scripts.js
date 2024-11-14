// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Glow effect on hover for roadmap milestones
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseover', () => {
        milestone.style.boxShadow = '0px 0px 15px 5px rgba(78, 253, 257, 0.6)';
    });
    
    milestone.addEventListener('mouseleave', () => {
        milestone.style.boxShadow = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// rocket
const rocket = document.querySelector('.rocket');
window.addEventListener('scroll', () => {
    if (window.scrollY > 800){
        const scrollY = window.scrollY - 800;
        const movement = scrollY * 0.7;
        rocket.style.transform = `translateY(-${movement}px)`;
    }
});

async function requestAccount() {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
        alert('MetaMask is not installed');
    }
}

async function interactWithContract() {
    if (1 == 1) {
        await requestAccount();

        const contractAddress = 'contract-address';
        const contractABI = [
            // put abi later
        ];

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        try {
            const transaction = await contract.function_name(); //solidity function name
            await transaction.wait(); // Wait for the transaction to be mined
            console.log('Transaction successful:', transaction);
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    }
}

