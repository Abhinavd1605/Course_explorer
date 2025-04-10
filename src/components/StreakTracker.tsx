import React, { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { getStreakCount, updateStreak } from '@/utils/localStorage';
import { toast } from 'sonner';

const StreakTracker = () => {
  const [streakCount, setStreakCount] = useState<number>(0);
  const [isNew, setIsNew] = useState<boolean>(false);

  useEffect(() => {
    const currentStreak = getStreakCount();
    const newStreak = updateStreak();
    
    if (newStreak > currentStreak && currentStreak > 0) {
      setIsNew(true);
      
      // Show streak milestone toasts
      if (newStreak === 7) {
        toast("Congratulations!", {
          description: "You've earned the 7-Day Streak badge! Keep going!",
          duration: 5000
        });
      } else if (newStreak === 30) {
        toast("Incredible Achievement!", {
          description: "You've earned the 30-Day Streak badge! You're amazing!",
          duration: 5000
        });
      } else if (newStreak % 5 === 0) {
        toast("Streak Updated!", {
          description: `You've maintained a ${newStreak}-day learning streak!`,
          duration: 3000
        });
      }
    }
    
    setStreakCount(newStreak);
  }, []);

  return (
    <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white ${
      isNew ? 'animate-pulse-light' : ''
    }`}>
      <Flame size={16} className="text-yellow-300" />
      <span className="font-semibold">{streakCount}</span>
      <span className="text-xs">day streak</span>
    </div>
  );
};

export default StreakTracker;
