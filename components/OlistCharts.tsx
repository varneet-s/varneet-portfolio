'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Chart?: any;
    NarrativeCharts?: any;
  }
}

export default function OlistCharts() {
  const [chartJsLoaded, setChartJsLoaded] = useState(false);
  const [chartsHelperLoaded, setChartsHelperLoaded] = useState(false);

  useEffect(() => {
    if (!chartJsLoaded || !chartsHelperLoaded) return;
    if (typeof window === 'undefined' || !window.NarrativeCharts) return;

    const NarrativeCharts = window.NarrativeCharts;
    NarrativeCharts.applyDefaults();

    /* ── H1 — Delay Severity vs. Score (gradient line with order counts) ── */
    NarrativeCharts.gradientLineChart(
      'chart-olist-delay-review',
      ['Early', 'On Time', 'Late 1-3 days', 'Late 4-7 days', 'Late 7+ days'],
      [4.295, 4.03, 3.286, 2.078, 1.697],
      [88652, 1292, 1870, 1802, 2862],
      {
        yTitle: 'Avg. Review Score',
        xTitle: 'Delay Band',
        aspectRatio: 2,
      }
    );

    /* ── H2 — Revenue By Top 10 States (horizontal bar) ── */
    NarrativeCharts.horizontalBar(
      'chart-olist-state-revenue',
      ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'DF', 'GO', 'ES'],
      [4622373, 1600069, 1426815, 665875, 605069, 463138, 447296, 273492, 254663, 246253],
      {
        colors: [
          'rgba(176,108,37,0.85)',
          'rgba(176,108,37,0.7)',
          'rgba(176,108,37,0.6)',
          'rgba(176,108,37,0.5)',
          'rgba(176,108,37,0.4)',
          'rgba(176,108,37,0.35)',
          'rgba(176,108,37,0.3)',
          'rgba(176,108,37,0.25)',
          'rgba(176,108,37,0.22)',
          'rgba(176,108,37,0.2)',
        ],
        xTitle: 'Revenue (R$)',
        xTickFormat: function (v: number) {
          if (v >= 1000000) return 'R$' + (v / 1000000).toFixed(1) + 'M';
          if (v >= 1000) return 'R$' + v / 1000 + 'K';
          return v;
        },
        tooltipCallbacks: {
          label: function (item: any) {
            return 'R$' + item.raw.toLocaleString();
          },
        },
        aspectRatio: 1.4,
      }
    );

    /* ── Monthly Growth Trend (Line Chart) ── */
    NarrativeCharts.lineChart(
      'chart-olist-monthly-growth',
      [
        'Sep 16', 'Oct 16', 'Nov 16', 'Dec 16', 'Jan 17', 'Feb 17', 'Mar 17',
        'Apr 17', 'May 17', 'Jun 17', 'Jul 17', 'Aug 17', 'Sep 17', 'Oct 17',
        'Nov 17', 'Dec 17', 'Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18',
        'Jun 18', 'Jul 18', 'Aug 18',
      ],
      [
        4, 143, 265, 461, 702, 750, 2023, 2145, 3546, 3115, 3891, 4193, 4285,
        4538, 7289, 5673, 6729, 7069, 7175, 6749, 6749, 6375, 6292, 6351,
      ],
      {
        yTitle: 'Orders / Month',
        xTitle: 'Month',
        aspectRatio: 2.2,
        tooltipCallbacks: {
          label: function (item: any) {
            return item.raw.toLocaleString() + ' orders';
          },
        },
      }
    );

    /* ── H3 — GMV Pareto Distribution (Lorenz Curve) ── */
    const lorenzX: number[] = [];
    const lorenzY: number[] = [];
    for (let i = 0; i <= 100; i++) {
      lorenzX.push(i);
      if (i === 0) {
        lorenzY.push(0);
      } else if (i <= 20) {
        lorenzY.push(82.54 * Math.pow(i / 20, 0.55));
      } else {
        const remaining = (i - 20) / 80;
        lorenzY.push(82.54 + (100 - 82.54) * Math.pow(remaining, 0.6));
      }
    }

    NarrativeCharts.lorenzCurve('chart-olist-lorenz', lorenzX, lorenzY, {
      refX: 20,
      refY: 82.54,
      aspectRatio: 1.2,
    });

    /* ── H4 — Freight % By State (vertical bar, all 27 states) ── */
    NarrativeCharts.verticalBar(
      'chart-olist-freight',
      [
        'RR', 'RO', 'MA', 'AC', 'PI', 'AM', 'RN', 'PB', 'TO', 'AL', 'PA', 'SE',
        'PE', 'CE', 'AP', 'BA', 'MT', 'ES', 'GO', 'RS', 'MS', 'PR', 'DF', 'SC',
        'RJ', 'MG', 'SP',
      ],
      [
        60.07, 57.83, 53.67, 51.21, 50.4, 50.17, 50.15, 50.01, 49.89, 47.13,
        46.33, 46.15, 43.41, 42.71, 38.82, 38.62, 37.88, 34.7, 34.18, 34.14,
        34.13, 33.53, 33.48, 32.96, 31.71, 31.71, 25.24,
      ],
      {
        colors: [
          'rgba(176,108,37,0.7)', 'rgba(176,108,37,0.7)', 'rgba(176,108,37,0.7)',
          'rgba(176,108,37,0.65)', 'rgba(176,108,37,0.6)', 'rgba(176,108,37,0.55)',
          'rgba(176,108,37,0.5)', 'rgba(176,108,37,0.5)', 'rgba(176,108,37,0.45)',
          'rgba(176,108,37,0.4)', 'rgba(176,108,37,0.4)', 'rgba(176,108,37,0.35)',
          'rgba(176,108,37,0.35)', 'rgba(176,108,37,0.3)', 'rgba(176,108,37,0.3)',
          'rgba(58,107,53,0.3)', 'rgba(58,107,53,0.3)', 'rgba(58,107,53,0.35)',
          'rgba(58,107,53,0.35)', 'rgba(58,107,53,0.4)', 'rgba(58,107,53,0.4)',
          'rgba(58,107,53,0.45)', 'rgba(58,107,53,0.45)', 'rgba(58,107,53,0.5)',
          'rgba(58,107,53,0.5)', 'rgba(58,107,53,0.55)', 'rgba(58,107,53,0.7)',
        ],
        yTickFormat: function (v: number) {
          return v + '%';
        },
        yTitle: 'Avg. Freight Pct',
        tooltipCallbacks: {
          label: function (item: any) {
            return item.raw.toFixed(2) + '%';
          },
        },
        aspectRatio: 1.8,
      }
    );
  }, [chartJsLoaded, chartsHelperLoaded]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"
        strategy="afterInteractive"
        onLoad={() => setChartJsLoaded(true)}
      />
      {chartJsLoaded && (
        <Script
          src="/js/charts.js?v=1.0.1"
          strategy="afterInteractive"
          onLoad={() => setChartsHelperLoaded(true)}
        />
      )}
    </>
  );
}
