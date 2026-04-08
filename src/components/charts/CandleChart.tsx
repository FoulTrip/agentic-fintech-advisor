'use client';
import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

const CandleChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#94a3b8',
      },
      grid: {
        vertLines: { color: '#1e293b' },
        horzLines: { color: '#1e293b' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    // Datos mock consistentes
    candlestickSeries.setData([
      { time: '2024-01-01', open: 140, high: 145, low: 138, close: 142 },
      { time: '2024-01-02', open: 142, high: 148, low: 141, close: 146 },
      { time: '2024-01-03', open: 146, high: 147, low: 143, close: 144 },
      { time: '2024-01-04', open: 144, high: 152, low: 144, close: 150 },
      { time: '2024-01-05', open: 150, high: 155, low: 149, close: 153 },
    ]);

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full" />;
};

export default CandleChart;