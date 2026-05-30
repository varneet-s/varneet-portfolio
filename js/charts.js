/**
 * charts.js — Narrative Data Visualization Engine
 * Renders Chart.js charts from inline data embedded in each case study page.
 * Uses the portfolio's restrained palette (cornsilk, black-forest, copper).
 */

(function () {
  'use strict';

  /* ── Palette (from styles.css design tokens) ──────────────────────── */
  const PALETTE = {
    copper:       'oklch(0.55 0.15 45)',
    copperMuted:  'oklch(0.55 0.15 45 / 0.15)',
    forest:       'oklch(0.25 0.04 120)',
    forestMuted:  'oklch(0.25 0.04 120 / 0.10)',
    greenAccent:  'oklch(0.40 0.10 125)',
    greenMuted:   'oklch(0.40 0.10 125 / 0.12)',
    textSecondary:'oklch(0.25 0.04 120 / 0.75)',
    divider:      'oklch(0.25 0.04 120 / 0.08)',
    cornsilk:     'oklch(0.98 0.006 85)',
  };

  /* Fallback hex values for browsers that don't support oklch in canvas */
  const HEX = {
    copper:       '#b06c25',
    copperMuted:  'rgba(176,108,37,0.15)',
    forest:       '#283618',
    forestMuted:  'rgba(40,54,24,0.10)',
    greenAccent:  '#3a6b35',
    greenMuted:   'rgba(58,107,53,0.12)',
    textSecondary:'rgba(40,54,24,0.75)',
    divider:      'rgba(40,54,24,0.08)',
    cornsilk:     '#fefae0',
  };

  /* ── Chart.js global defaults ──────────────────────────────────────── */
  function applyDefaults() {
    if (!window.Chart) return;
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.font.size = 13;
    Chart.defaults.color = HEX.textSecondary;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.enabled = true;
    Chart.defaults.plugins.tooltip.backgroundColor = HEX.forest;
    Chart.defaults.plugins.tooltip.titleFont = { family: "'Outfit', sans-serif", size: 13, weight: 600 };
    Chart.defaults.plugins.tooltip.bodyFont = { family: "'Outfit', sans-serif", size: 12 };
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.cornerRadius = 4;
    Chart.defaults.animation = false; /* static charts */
    Chart.defaults.responsive = true;
    Chart.defaults.maintainAspectRatio = false;
  }

  /* ── Render helpers ────────────────────────────────────────────────── */

  /**
   * Horizontal bar chart (e.g. review scores, state revenue)
   */
  function horizontalBar(canvasId, labels, data, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: opts.colors || data.map((_, i) => i === 0 ? HEX.copper : HEX.forestMuted),
          borderColor: opts.borderColors || data.map((_, i) => i === 0 ? HEX.copper : HEX.forest),
          borderWidth: 1,
          borderRadius: 4,
          barPercentage: 0.6,
        }]
      },
      options: {
        indexAxis: 'y',
        aspectRatio: opts.aspectRatio || 2,
        scales: {
          x: {
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: {
              font: { size: 12 },
              callback: opts.xTickFormat || null,
            },
            min: opts.xMin,
            max: opts.xMax,
            title: opts.xTitle ? { display: true, text: opts.xTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          },
          y: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 13, weight: 500 } },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: opts.tooltipCallbacks || {},
          },
        }
      }
    });
  }

  /**
   * Vertical bar chart
   */
  function verticalBar(canvasId, labels, data, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: opts.colors || data.map((_, i) => i < 3 ? HEX.copper : HEX.forestMuted),
          borderColor: opts.borderColors || data.map((_, i) => i < 3 ? HEX.copper : HEX.forest),
          borderWidth: 1,
          borderRadius: 4,
          barPercentage: 0.65,
        }]
      },
      options: {
        aspectRatio: opts.aspectRatio || 2,
        scales: {
          y: {
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: {
              font: { size: 12 },
              callback: opts.yTickFormat || null,
            },
            title: opts.yTitle ? { display: true, text: opts.yTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          },
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, maxRotation: 45, minRotation: 0 },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: opts.tooltipCallbacks || {},
          },
        }
      }
    });
  }

  /**
   * Line chart with gradient segments — replicates the Tableau
   * "Delay Severity vs Score" chart with colored segments and data labels
   */
  function gradientLineChart(canvasId, labels, data, orderCounts, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    /* Color stops: green → olive → orange → red → dark red */
    const segmentColors = [
      '#5a8a4a', /* Early — green */
      '#8a8a3a', /* On Time → Late 1-3d transition — olive */
      '#c67a2e', /* Late 1-3d — orange */
      '#c04040', /* Late 4-7d — red */
      '#8b2020', /* Late 7+ — dark red */
    ];

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          borderColor: function(context) {
            /* Use segment coloring */
            return HEX.copper;
          },
          segment: {
            borderColor: function(ctx) {
              return segmentColors[ctx.p0DataIndex] || HEX.copper;
            },
          },
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.1,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: segmentColors,
          pointBorderColor: HEX.cornsilk,
          pointBorderWidth: 2,
          borderWidth: 3,
        }]
      },
      options: {
        aspectRatio: opts.aspectRatio || 2,
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 12, weight: 500 } },
            title: opts.xTitle ? { display: true, text: opts.xTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          },
          y: {
            grid: { color: HEX.divider },
            border: { display: false },
            min: 0,
            max: 5,
            ticks: {
              font: { size: 12 },
              stepSize: 0.5,
            },
            title: opts.yTitle ? { display: true, text: opts.yTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(items) {
                return items[0].label;
              },
              label: function(item) {
                var count = orderCounts[item.dataIndex];
                return 'Avg Score: ' + item.formattedValue + '  ·  ' + count.toLocaleString() + ' orders';
              }
            }
          },
        }
      }
    });
  }

  /**
   * Line chart (Lorenz curve, trends)
   */
  function lineChart(canvasId, labels, data, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    const datasets = [{
      data: data,
      borderColor: HEX.copper,
      backgroundColor: HEX.copperMuted,
      fill: true,
      tension: 0.3,
      pointRadius: 3,
      pointBackgroundColor: HEX.copper,
      pointBorderColor: HEX.cornsilk,
      pointBorderWidth: 2,
      borderWidth: 2,
    }];

    /* Optional equality line for Lorenz curves */
    if (opts.equalityLine) {
      datasets.push({
        data: labels.map((_, i) => (i / (labels.length - 1)) * 100),
        borderColor: HEX.divider,
        borderDash: [6, 4],
        borderWidth: 1.5,
        pointRadius: 0,
        fill: false,
      });
    }

    new Chart(ctx, {
      type: 'line',
      data: { labels, datasets },
      options: {
        aspectRatio: opts.aspectRatio || 1.8,
        scales: {
          x: {
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: { font: { size: 11 } },
            title: opts.xTitle ? { display: true, text: opts.xTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          },
          y: {
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: {
              font: { size: 12 },
              callback: opts.yTickFormat || null,
            },
            title: opts.yTitle ? { display: true, text: opts.yTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: opts.tooltipCallbacks || {},
          },
        }
      }
    });
  }

  /**
   * Lorenz Curve — replicates the Tableau GMV Pareto Distribution chart.
   * Smooth curve from 0% to 100% of sellers on X, 0% to 100% of cumulative GMV on Y.
   * Dashed reference lines at 20% sellers / 82.54% GMV.
   */
  function lorenzCurve(canvasId, xData, yData, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    /* Reference lines plugin */
    const refLinesPlugin = {
      id: 'lorenzRefLines',
      afterDraw: function(chart) {
        var xScale = chart.scales.x;
        var yScale = chart.scales.y;
        var drawCtx = chart.ctx;
        var refX = opts.refX || 20;
        var refY = opts.refY || 82.54;

        /* Pixel positions */
        var px = xScale.getPixelForValue(refX);
        var py = yScale.getPixelForValue(refY);
        var top = yScale.top;
        var bottom = yScale.bottom;
        var left = xScale.left;
        var right = xScale.right;

        drawCtx.save();
        drawCtx.setLineDash([6, 4]);
        drawCtx.strokeStyle = 'rgba(40,54,24,0.35)';
        drawCtx.lineWidth = 1.5;

        /* Vertical line at refX% */
        drawCtx.beginPath();
        drawCtx.moveTo(px, top);
        drawCtx.lineTo(px, bottom);
        drawCtx.stroke();

        /* Horizontal line at refY% */
        drawCtx.beginPath();
        drawCtx.moveTo(left, py);
        drawCtx.lineTo(right, py);
        drawCtx.stroke();

        drawCtx.restore();

        /* Annotation label */
        drawCtx.save();
        drawCtx.font = "bold 11px 'Outfit', sans-serif";
        drawCtx.fillStyle = HEX.forest;
        drawCtx.textAlign = 'left';
        drawCtx.fillText('20% of sellers', px + 6, py - 24);
        drawCtx.fillText('(592 sellers)', px + 6, py - 12);
        drawCtx.fillText('generate 82.54%', px + 6, py + 2);
        drawCtx.fillText('of GMV', px + 6, py + 14);
        drawCtx.restore();

        /* Y-axis label for refY */
        drawCtx.save();
        drawCtx.font = "11px 'Outfit', sans-serif";
        drawCtx.fillStyle = HEX.textSecondary;
        drawCtx.textAlign = 'right';
        drawCtx.fillText(refY + '% of GMV', left - 6, py + 4);
        drawCtx.restore();
      }
    };

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: xData,
        datasets: [{
          data: yData,
          borderColor: '#3366aa',
          backgroundColor: 'rgba(51,102,170,0.06)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 4,
          borderWidth: 2.5,
        }]
      },
      options: {
        aspectRatio: opts.aspectRatio || 1.2,
        scales: {
          x: {
            type: 'linear',
            min: 0,
            max: 100,
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: {
              font: { size: 11 },
              callback: function(v) { return v + '%'; },
              stepSize: 10,
            },
            title: { display: true, text: '% of Sellers', font: { size: 12, weight: 600 }, color: HEX.textSecondary },
          },
          y: {
            min: 0,
            max: 110,
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: {
              font: { size: 11 },
              callback: function(v) { return v + '%'; },
              stepSize: 10,
            },
            title: { display: true, text: '% of Total Running Sum of True GMV', font: { size: 12, weight: 600 }, color: HEX.textSecondary },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(items) {
                return items[0].label + '% of Sellers';
              },
              label: function(item) {
                return 'Cumulative GMV: ' + Number(item.raw).toFixed(1) + '%';
              }
            }
          },
        }
      },
      plugins: [refLinesPlugin]
    });
  }

  /**
   * Doughnut chart (proportions)
   */
  function doughnutChart(canvasId, labels, data, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: opts.colors || [HEX.copper, HEX.forestMuted],
          borderColor: HEX.cornsilk,
          borderWidth: 2.5,
        }]
      },
      options: {
        aspectRatio: 1.3,
        cutout: '62%',
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 16,
              font: { size: 13, family: "'Outfit', sans-serif", weight: 500 },
              color: HEX.textSecondary,
            }
          },
          tooltip: {
            enabled: true,
          },
        }
      }
    });
  }

  /**
   * Pareto Chart (Mixed Bar + Line) — kept for other case studies
   */
  function paretoChart(canvasId, labels, barData, lineData, opts = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: opts.lineLabel || 'Cumulative %',
            data: lineData,
            borderColor: HEX.copper,
            backgroundColor: HEX.copper,
            borderWidth: 2,
            pointRadius: 2,
            pointBackgroundColor: HEX.copper,
            tension: 0.2,
            yAxisID: 'yLine',
          },
          {
            type: 'bar',
            label: opts.barLabel || 'Value',
            data: barData,
            backgroundColor: HEX.forestMuted,
            borderColor: HEX.forest,
            borderWidth: 1,
            borderRadius: 2,
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            yAxisID: 'yBar',
          }
        ]
      },
      options: {
        aspectRatio: opts.aspectRatio || 2,
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              font: { size: 10 },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 10
            },
            title: opts.xTitle ? { display: true, text: opts.xTitle, font: { size: 12, weight: 500 }, color: HEX.textSecondary } : undefined,
          },
          yBar: {
            type: 'linear',
            display: true,
            position: 'left',
            grid: { color: HEX.divider },
            border: { display: false },
            ticks: { font: { size: 11 }, callback: opts.yBarTickFormat },
          },
          yLine: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: { display: false },
            border: { display: false },
            min: 0,
            max: 100,
            ticks: { font: { size: 11 }, callback: (v) => v + '%' },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        }
      }
    });
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  window.NarrativeCharts = {
    horizontalBar,
    verticalBar,
    lineChart,
    gradientLineChart,
    lorenzCurve,
    doughnutChart,
    paretoChart,
    applyDefaults,
    HEX,
  };

  /* Auto-init defaults when script loads */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyDefaults);
  } else {
    applyDefaults();
  }
})();
