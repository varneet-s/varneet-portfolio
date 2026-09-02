import Chart from 'chart.js/auto';

const HEX = {
  copper: '#b06c25',
  copperMuted: 'rgba(176,108,37,0.15)',
  forest: '#283618',
  forestMuted: 'rgba(40,54,24,0.10)',
  greenAccent: '#3a6b35',
  greenMuted: 'rgba(58,107,53,0.12)',
  textSecondary: 'rgba(40,54,24,0.75)',
  divider: 'rgba(40,54,24,0.08)',
  cornsilk: '#fefae0',
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
  // Global window accessor for inline case study chart calls
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
            borderWidth: 1,
            borderRadius: 3,
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
