
const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data: {
            labels: ["Thistle", "Rose", "Violet"],
            datasets: [
                {
                    label: "Votes",
                    data:  [12, 19,3],
                    borderWidth: 2,
                    backgroundColor: ["#d1b3c4", "#b392ac", "#735d78"],
                    borderColor: ["Black"]
                }
            ]
        }
    }
)