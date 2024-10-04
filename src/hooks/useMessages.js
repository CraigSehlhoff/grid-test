import { useEffect } from "react";
import { toast } from "sonner";

import { Text } from "../components/Text";

export function useMessages({ score, currentLevelIndex }) {
  useEffect(() => {
    if (score === 1) {
      toast(Text.score.initial);
    }
    if (score === 5) {
      toast(Text.score.five);
    }
    if (score === 10) {
      toast(Text.score.ten);
    }
    if (score === 15) {
      toast(Text.score.fifteen);
    }
    if (score === 20) {
      toast(Text.score.twenty);
    }
    if (score === 25) {
      toast(Text.score.twentyfive);
    }
  }, [score]);

  useEffect(() => {
    if (currentLevelIndex === 0) toast(Text.world.initial);
    if (currentLevelIndex === 5) toast(Text.world.World2);
    if (currentLevelIndex === 8) toast(Text.world.World24);
    if (currentLevelIndex === 10) toast(Text.world.World3);
  }, [currentLevelIndex]);
}
