import { useEffect } from "react";
import { toast } from "sonner";

import { Text } from "../components/Text";

export function useMessages({ score, currentLevelIndex, showMessages }) {
  useEffect(() => {
    if (!showMessages) return;
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
    if (score === 30) {
      toast(Text.score.thirty);
    }
    if (score === 35) {
      toast(Text.score.thirtyfive);
    }
    if (score === 40) {
      toast(Text.score.fourty);
    }
    if (score === 50) {
      toast(Text.score.fifty);
    }
    if (score === 55) {
      toast(Text.score.fiftyfive);
    }
    if (score === 60) {
      toast(Text.score.sixty);
    }
    if (score === 65) {
      toast(Text.score.sixtyfive);
    }
    if (score === 70) {
      toast(Text.score.seventy);
    }
    if (score === 75) {
      toast(Text.score.seventyfive);
    }
    if (score === 80) {
      toast(Text.score.eighty);
    }
  }, [score, showMessages]);

  useEffect(() => {
    if (!showMessages) return;
    if (currentLevelIndex === 0) toast.info(Text.world.initial);
    if (currentLevelIndex === 5) toast.info(Text.world.World2);
    if (currentLevelIndex === 6) toast.info(Text.world.World22);
    if (currentLevelIndex === 8) toast.info(Text.world.World24);
    if (currentLevelIndex === 9) toast.warning(Text.world.World25);
    if (currentLevelIndex === 10) toast.info(Text.world.World3);
    if (currentLevelIndex === 15) toast.info(Text.world.World4);
    if (currentLevelIndex === 19) toast.warning(Text.world.World45);
  }, [currentLevelIndex, showMessages]);
}
