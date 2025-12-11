function updateCountdown() {
      const target = new Date("December 14, " + new Date().getFullYear() + " 00:00:00").getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        document.getElementById("countdown").textContent = "🎉 It's your day! Happy Birthday! 🎉";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();