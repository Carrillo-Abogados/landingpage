'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-04-09T18:00:00-05:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[100px] shadow-xl border border-white/20 hover:border-carrillo-cyan/30 transition-colors duration-500">
      <div className="text-5xl md:text-6xl font-black text-white mb-2 font-lato">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-carrillo-gray uppercase tracking-wider font-light">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <TimeBlock value={timeLeft.days} label="Días" />
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <TimeBlock value={timeLeft.minutes} label="Minutos" />
      <TimeBlock value={timeLeft.seconds} label="Segundos" />
    </div>
  );
}
