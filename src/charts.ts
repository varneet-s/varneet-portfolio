import Chart from 'chart.js/auto';

const HEX = {
  copper: '#FF3B00',
  copperMuted: 'rgba(255, 59, 0, 0.15)',
  teal: '#38B6FF',
  tealMuted: 'rgba(56, 182, 255, 0.15)',
  forest: '#0C0D0E',
  forestMuted: 'rgba(12, 13, 14, 0.10)',
  textSecondary: '#2D2F31',
  divider: 'rgba(12, 13, 14, 0.12)',
  cornsilk: '#FFFDF5',
};

function applyDefaults() {
  Chart.defaults.font.family = "'Satoshi', sans-serif";
  Chart.defaults.font.size = 13;
  Chart.defaults.color = HEX.textSecondary;
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.plugins.tooltip.enabled = true;
  Chart.defaults.plugins.tooltip.backgroundColor = HEX.forest;
  Chart.defaults.animation = false;
  Chart.defaults.responsive = true;
  Chart.defaults.maintainAspectRatio = false;
}

export function initCharts() {
  applyDefaults();
  (window as any).NarrativeCharts = {
    horizontalBar: (canvasId: string, labels: string[], data: number[], opts: any = {}) => {
      const el = document.getElementById(canvasId) as HTMLCanvasElement | null;
      if (!el) return;
      new Chart(el, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: opts.colors || data.map((_, i) => i === 0 ? HEX.copper : HEX.forestMuted),
            borderColor: opts.borderColors || data.map((_, i) => i === 0 ? HEX.copper : HEX.forest),
            borderWidth: 1.5,
            borderRadius: 4,
            barPercentage: 0.7,
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: { grid: { color: HEX.divider } },
            y: { grid: { display: false } }
          }
        }
      });
    }
  };
}
